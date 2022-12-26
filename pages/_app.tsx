import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { RecoilRoot, useRecoilState } from 'recoil'
import { Suspense } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { darkModeState } from '../components/store'
import Layout from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute="class" >
        {/* <Suspense fallback={
          <div className='w-full h-full top-0 z-[90] bg-white dark:bg-[#141414] fixed flex items-center justify-center'>
            <div className="loader-screen w-full h-full top-0 z-[90] bg-white dark:bg-[#141414] fixed flex items-center justify-center">
              <Player src='/logo-animation-2-dark.json' background="transparent" speed={1} style={{ width: '100px', height: '100px' }} loop={true} autoplay={true}></Player>
            </div>
            <div className="loader-screen w-full h-full top-0 z-[90] bg-white dark:bg-[#141414] fixed flex items-center justify-center">
              <Player src='/logo-animation-2.json' background="transparent" speed={1} style={{ width: '100px', height: '100px' }} loop={true} autoplay={true}></Player>
            </div>
          </div>
        }> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        {/* </Suspense> */}
      </ThemeProvider>
    </RecoilRoot>
  )
}
