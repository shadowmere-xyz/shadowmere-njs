import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
