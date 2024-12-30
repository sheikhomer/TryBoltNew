// app/blog/[filename]/page.tsx

import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from '../../../tina/__generated__/client';

// Dynamic Route Component
export default async function BlogPage({ params }: { params: { filename: string } }) {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.md` };

  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  // If data is not found, return a not-found page
  if (!data?.post) {
    return <h1>Post not found</h1>;
  }

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

// Define components for TinaMarkdown
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
