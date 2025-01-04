// "use client";

import { Template } from "tinacms";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import MermaidElement from "../mermaid-renderer";
import { PageBlocksContent } from "../../tina/__generated__/types";

export const Content = ({ data }: { data?: PageBlocksContent }) => {
    return (
        <section className="pb-16 px-4">
            <div className="container mx-auto">
                <div className="max-w-full  prose prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[#18CB96]
                prose-h4:text-lg prose-h4:font-semibold prose-h4:mt-2 prose-h4:mb-2">
                    <TinaMarkdown
                        content={data?.body ?? ""}
                        components={{
                            mermaid(props: { value: string } | undefined) {
                                if (!props) return <></>;  // Return empty fragment instead of null
                                return <MermaidElement value={props.value} />;
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    )
};

export const contentBlockSchema: Template = {
    name: "content",
    label: "Content",
    ui: {
        defaultItem: {
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
        },
    },
    fields: [
        {
            type: "rich-text",
            label: "Body",
            name: "body",
        },
    ],
};