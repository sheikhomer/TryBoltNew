import { Template } from "tinacms"
import { PageBlocksQuotes } from "../../tina/__generated__/types"

export const Quotes = ({ data }: { data?: PageBlocksQuotes }) => {
    return (
        <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">{data?.title ?? "Let's partner up, adapt and optimize!"}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4" style={{ color: "#18CB96" }}>"</div>
              <p className="text-lg italic mb-6">
                {data?.quote1 ?? "Never stop testing, and your advertising will never stop improving."}
              </p>
              <p className="font-semibold">- {data?.author1 ?? "David Mackenzie Ogilvy CBE"}</p>
              <p className="text-sm text-muted-foreground"> {data?.author1Description ?? "Founder of Ogilvy & Mather, known as the 'Father of Advertising'."}</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4" style={{ color: "#18CB96" }}>"</div>
              <p className="text-lg italic mb-6">
                {data?.quote2 ?? "Content is fire. Social media is gasoline."}
              </p>
              <p className="font-semibold">- {data?.author2 ?? "Jay Baer"}</p>
              <p className="text-sm text-muted-foreground">{data?.author2Description ?? "7th generation entrepreneur. Founder of 5 multi-million dollar companies. Author of 7 business books. Hall of Fame keynote speaker. "}</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4" style={{ color: "#18CB96" }}>"</div>
              <p className="text-lg italic mb-6">
                {data?.quote3 ?? "People don't buy what you do; they buy why you do it."}
              </p>
              <p className="font-semibold">- {data?.author3 ?? "Simon Sinek"}</p>
              <p className="text-sm text-muted-foreground">{data?.author3Description ?? "Author of 'Start with Why' and 'The Infinite Game'."}</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export const quotesBlockSchema: Template = {
    name: "quotes",
    label: "Quotes",
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
            description: "The title of the quotes block",
        },
        {
            type: "string",
            label: "Quote 1",
            name: "quote1",
            description: "The first quote",
        },
        {
            type: "string",
            label: "Quote 2",
            name: "quote2",
            description: "The second quote",
        },
        {
            type: "string",
            label: "Quote 3",
            name: "quote3",
            description: "The third quote",
        },
        {
            type: "string",
            label: "Author 1",
            name: "author1",
            description: "The author of the first quote",
        },
        {
            type: "string",
            label: "Author 2",
            name: "author2",
            description: "The author of the second quote",
        },
        {
            type: "string",
            label: "Author 3",
            name: "author3",
            description: "The author of the third quote",
        },
        {
            type: "string",
            label: "Author 1 Description",
            name: "author1Description",
            description: "The description of the first author",
        },
        {
            type: "string",
            label: "Author 2 Description",
            name: "author2Description",
            description: "The description of the second author",
        },
        {
            type: "string",
            label: "Author 3 Description",
            name: "author3Description",
            description: "The description of the third author",
        },
    ]
}