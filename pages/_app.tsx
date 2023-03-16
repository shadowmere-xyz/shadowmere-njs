import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { RecoilRoot, useRecoilState } from 'recoil'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { darkModeState, loaderPage } from '../components/store'
import Layout from '../components/layout'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute="class" >
      <Script
				strategy='afterInteractive'
				src="https://www.googletagmanager.com/gtag/js?id=G-KQ4KMVJEXY" />
        <Script id={`gtag`} strategy='afterInteractive' dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQ4KMVJEXY', {
          page_path: window.location.pathname,
          });
        `}} />
        <Script
				src="https://cdn.websitepolicies.io/lib/cookieconsent/1.0.3/cookieconsent.min.js"
				defer />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
    </RecoilRoot>
  ) 
}
