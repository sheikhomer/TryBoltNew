'use client'
import { PostQuery } from '../../../tina/__generated__/types';
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface ClientBlogProps {
    data: PostQuery;
    variables: {
        relativePath: string;
    };
    query: string;
}

export default function BlogClientPage(props: ClientBlogProps) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })
    return (
        <div>
            <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {data.post.title}
            </h1>
            <ContentSection content={data.post.body} />
            <div className="bg-green-100 text-center">
                Lost and looking for a place to start?
                <a
                    href="https://tina.io/guides/tina-cloud/getting-started/overview/"
                    className="text-blue-500 underline"
                >
                    {' '}
                    Check out this guide
                </a>{' '}
                to see how to add TinaCMS to an existing Next.js site.
            </div>
        </div>
    );
}

const PageSection = (props: { heading: string; content: string }) => (
  <>
    <h2>{props.heading}</h2>
    <p>{props.content}</p>
  </>
);

const components = {
  PageSection: PageSection,
};

const ContentSection = ({ content }: { content: any }) => (
  <div className="relative py-16 bg-white overflow-hidden text-black">
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto">
        <TinaMarkdown components={components} content={content} />
      </div>
    </div>
  </div>
);