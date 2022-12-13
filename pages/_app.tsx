import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <RecoilRoot>
      <Suspense fallback={<>Loading...</>}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  )
}
