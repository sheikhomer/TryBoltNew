"use client";
import { Blocks } from "../../../../components/blocks";
import { PageQuery } from "../../../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

interface ClientPageProps {
    data: {
        page: PageQuery["page"];
    };
    variables: {
        relativePath: string;
    };
    query: string;
}

export default function ClientPage(props: ClientPageProps) {
    const {data} = useTina(props);
    return <Blocks {...data.page} />;
}