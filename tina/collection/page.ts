import { contentBlockSchema } from "../../components/blocks/content";
import { heroBlockSchema } from "../../components/blocks/hero";
import { Collection } from "tinacms";
import { quotesBlockSchema } from "../../components/blocks/quotes";

const Page: Collection = {
    name: "page",
    label: "Pages",
    path: "content/pages",
    ui: {
        router: ({ document }) => {
            return `/service-pages/${document._sys.filename}`;
        }
    },
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
            description:
                "The title of the page. This is used to display the title in the CMS",
            isTitle: true,
            required: true,
        },
        {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
                visualSelector: true,
            },
            templates: [
                heroBlockSchema,
                contentBlockSchema,
                quotesBlockSchema,
            ]
        }
    ]
}

export default Page;