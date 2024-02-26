import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { RecoilRoot, useRecoilState } from "recoil";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ThemeProvider
        enableSystem={true}
        defaultTheme={"system"}
        attribute="class"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
