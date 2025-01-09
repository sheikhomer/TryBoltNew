"use client";

import { useRef } from "react";
import { ChatMessage } from "./message";
import { ScrollArea } from "../ui/scroll-area";
import { useChat } from "ai/react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";
const INITIAL_MESSAGE = "Hi! I'm your AI assistant from Adaptimize. How can I help you today?";

export function ChatContainer() {

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    initialMessages: [
      {
        id: "0",
        role: "assistant",
        content: INITIAL_MESSAGE
      }
    ]
  })

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center px-6 py-4 border-b">
        <div className="rounded-full p-1">
          <Image
            src="/assets/logo-icon.svg"
            alt="Adaptimize AI"
            width={24}
            height={24}
            className="h-8 w-8 rounded-full"
          />
        </div>
        <h2 className="text-lg font-semibold ml-2">Chat With Adaptimize AI</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {
            messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.content}
                isUser={message.role === "user"}
                isLoading={isLoading && index === messages.length - 1}
              />
            ))
          }
          {error && (
            <ChatMessage
              isLoading={false}
              message={"Sorry, I'm having trouble processing your request. Please try again later."}
              isUser={false}
            />
          )}
          

        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="border-t bg-background p-4">
        <div className="flex gap-4">
          <Textarea
            ref={textareaRef}
            value={input}
            placeholder="Message Adaptimize..."
            className="min-h-[60px] resize-none"
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || messages.length === 0}
          >
            <SendHorizontal className="h-4 w-4" style={{ color: "#18CB96" }} />
          </Button>
        </div>
      </form>
    </div>
  );
}