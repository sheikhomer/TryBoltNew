import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "../../tina/__generated__/types";
import { Hero } from "./hero";
import { Content } from "./content";
import { Quotes } from "./quotes";
export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
    return (
      <>
        {props.blocks
          ? props.blocks.map(function (block, i) {
              return (
                <div key={i} data-tina-field={tinaField(block)}>
                  <Block {...block} />
                </div>
              );
            })
          : null}
      </>
    );
  };

  const Block = (block: PageBlocks) => {
    switch (block.__typename) {
      case "PageBlocksHero":
        return <Hero data={block} />;
      case "PageBlocksContent":
        return <Content data={block} />;
      case "PageBlocksQuotes":
        return <Quotes data={block} />;
      default:
        return null;
    }
  };
  