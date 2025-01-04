import client from "../../../../tina/__generated__/client";
import ClientPage from "./client-page";

export default async function ServicesPage({
    params,
  }: {
    params: Promise<{ filename: string }>
  }) {
    const { filename } = await params;
    const data = await client.queries.page({
        relativePath: `${filename}.md`,
    })
    return <ClientPage {...data} />;
}

export async function generateStaticParams() {
    const pages = await client.queries.pageConnection();
    const paths = pages?.data?.pageConnection.edges?.map((edge) => ({
        filename: edge?.node?._sys.breadcrumbs,
    }));

    return paths || [];
}