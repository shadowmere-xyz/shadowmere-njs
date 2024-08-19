import Script from "next/script";
import { useEffect, useState } from "react";

// type Props = {
//   cookiesAccepted: boolean;
// };

export default function UmamiScripts() {
  //   const [cookiesAccepted, setCookiesAcepted] = useState("");

  //   useEffect(() => {
  //     setCookiesAcepted(JSON.parse(localStorage.getItem("cookiesAccepted")!));
  //   }, [cookiesAccepted]);

  return (
    <>
      <Script
        // strategy="beforeInteractive"
        data-cookie-consent="tracking"
        src="https://umami.akiel.dev/script.js"
        data-website-id="67d430ad-af2b-4010-8585-7aa2d423e934"
      />
      <Script
        // strategy="beforeInteractive"
        data-cookie-consent="tracking"
        src="https://umami.akiel.dev/script.js"
        data-website-id="ab0233a0-d8c9-49a3-ba07-00c2adcbc9cc"
      />
    </>
  );
}
