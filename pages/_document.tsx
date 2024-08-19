import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <Script
          strategy="beforeInteractive"
          src="https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"
        /> */}
        <Script
          strategy="afterInteractive"
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="9cabde1d-7b0a-4dbb-bb99-6a039127ce32"
          data-blockingmode="auto"
          type="text/javascript"
        />

        {/* <Script
          id={`cookie_consent`}
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function () {
cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"dark","language":"en","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"Shadowmere"});
});`,
          }}
        /> */}
        <Script
          id="loadUmami"
          dangerouslySetInnerHTML={{
            __html: `
            function loadUmami() {
                var script = document.createElement('script');
                script.src = 'https://umami.akiel.dev/script.js';
                script.async = true;
                script.dataset.websiteId = 'ab0233a0-d8c9-49a3-ba07-00c2adcbc9cc';   
                document.head.appendChild(script);
            }

            window.addEventListener('CookieConsentDeclaration', function() {
                if (CookieConsent.consent.statistics) {
                    loadUmami();
                }
            });

            if (CookieConsent && CookieConsent.consent.statistics) {
                loadUmami();
            }

            `,
          }}
        />
        {/* <Script
          type="text/plain"
          data-cookie-consent="strictly-necessary"
          strategy="afterInteractive"
          async
          src="https://umami.akiel.dev/script.js"
          data-website-id="ab0233a0-d8c9-49a3-ba07-00c2adcbc9cc"
        />
        <Script
          type="text/plain"
          strategy="afterInteractive"
          data-cookie-consent="strictly-necessary"
          async
          src="https://umami.akiel.dev/script.js"
          data-website-id="67d430ad-af2b-4010-8585-7aa2d423e934"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
