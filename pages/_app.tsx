import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { RecoilRoot, useRecoilState } from 'recoil'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { darkModeState, loaderPage } from '../libs/store'
import Layout from '../components/layout'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute="class" >
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
    </RecoilRoot>
  ) 
}
