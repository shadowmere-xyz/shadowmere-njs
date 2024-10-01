import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="beforeInteractive"
          src="https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"
        />
        <Script
          id={`cookie_consent`}
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function () {
            cookieconsent.run({
                "notice_banner_type": "simple",
                "consent_type": "express",
                "palette": "dark",
                "language": "en",
                "page_load_consent_levels": ["strictly-necessary"],
                "notice_banner_reject_button_hide": false,
                "preferences_center_close_button_hide": false,
                "page_refresh_confirmation_buttons": false,
                "website_name": "Shadowmere"
            });
        });`,
          }}
        />
        <Script
          strategy="beforeInteractive"
          data-cookie-consent="tracking"
          async
          src="https://umami.akiel.dev/script.js"
          data-website-id="ab0233a0-d8c9-49a3-ba07-00c2adcbc9cc"
        />
        <Script
          strategy="beforeInteractive"
          data-cookie-consent="tracking"
          async
          src="https://umami.akiel.dev/script.js"
          data-website-id="67d430ad-af2b-4010-8585-7aa2d423e934"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
