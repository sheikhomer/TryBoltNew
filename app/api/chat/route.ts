import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, LangChainAdapter } from "ai";

import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from '@langchain/core/output_parsers';

const TEMPLATE = `You are a AI assistant from Adaptimize. You will be given a user's message and you will respond to it.
You will only answer based on the information provided in the context. If you don't know the answer, say "I am sorry, I am not sure about that".

Current conversation:
{chat_history}

User: {input}
AI:`;

const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`
}

export async function POST(req: NextRequest) {

    const body = await req.json();
    const messages = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;
    const prompt = PromptTemplate.fromTemplate(TEMPLATE);

    /**
     * We can also try e.g.:
     *
     * import { ChatAnthropic } from "@langchain/anthropic";
     * const model = new ChatAnthropic({});
     *
     * See a full list of supported models at:
     * https://js.langchain.com/docs/modules/model_io/models/
     */
    const model = new ChatOpenAI({
        temperature: 0.3, // Controls randomness in the response, use lower to be more deterministic.
        modelName: "gpt-4o-mini",
    });

    /**
     * OutputParser that parses LLMResult into the top likely string.
     */
    const outputParser = new StringOutputParser();

    /**
     * Can also initialize as:
     *
     * import { RunnableSequence } from "@langchain/core/runnables";
     * const chain = RunnableSequence.from([prompt, model, outputParser]);
     */
    const chain = prompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
        chat_history: formattedPreviousMessages.join("\n"),
        input: currentMessageContent,
    });

    return LangChainAdapter.toDataStreamResponse(stream);

}


