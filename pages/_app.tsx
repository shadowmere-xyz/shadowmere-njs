import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {Provider} from 'react-redux'
import {RecoilRoot, useRecoilState} from 'recoil'
import {Player, Controls} from '@lottiefiles/react-lottie-player'
import {darkModeState, loaderPage} from '../libs/store'
import Layout from '../components/layout'
import Script from 'next/script'

export default function App({Component, pageProps}: AppProps) {

    return (
        <RecoilRoot>
            <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute="class">
                <Script strategy='afterInteractive'
                        src="https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"/>
                <Script id={`cookie_consent`} strategy='afterInteractive'
                        dangerouslySetInnerHTML={{
                            __html: `
                    document.addEventListener('DOMContentLoaded', function () {
                    cookieconsent.run({
                        "notice_banner_type": "simple",
                        "consent_type": "express",
                        "palette": "light",
                        "language": "en",
                        "page_load_consent_levels": ["strictly-necessary"],
                        "notice_banner_reject_button_hide": false,
                        "preferences_center_close_button_hide": false,
                        "page_refresh_confirmation_buttons": false,
                        "website_name": "Shadowmere"
                    });
                });`
                        }}/>

                <Script strategy='afterInteractive' data-cookie-consent="tracking" async src="https://umami.akiel.dev/script.js"
                        data-website-id="ab0233a0-d8c9-49a3-ba07-00c2adcbc9cc" />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </RecoilRoot>
    )
}
