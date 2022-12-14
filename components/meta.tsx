import Head, { defaultHead } from "next/head";

type Props = {
    title: string;
    keywords: string;
    description: string;
}

export function Meta ({ title, keywords, description}: Props) {
    return (
        <Head>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any"/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Shadowmere',
    keywords: 'vpn, proxies, freedom of internet, community, productivity',
    description: 'A list of Shadowsocks proxies',
}