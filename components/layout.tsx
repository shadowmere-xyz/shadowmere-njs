import { Meta } from "./meta";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import ModalQR from "./modalQR";
import { useRecoilState } from "recoil";
import { proxiesObj, qrScreen } from "../libs/store";
import { useEffect, useState } from "react";
import useSWR from "swr";
import {
  pageCounterState,
  portFilterState,
  countryFilterState,
  loaderPage,
} from "../libs/store";
import { Player } from "@lottiefiles/react-lottie-player";
import Loader from "./loader";
import Script from "next/script";
import ServerStatsCard from "./serversStatsCard";
import ItemSubscription from "./itemSubscriptionSSoscks";
import ItemSubscriptionSSocks from "./itemSubscriptionSSoscks";
import ItemSubscriptionV2Ray from "./itemSubscriptionV2Ray";
import { apiBaseUrl } from "../vars/variables";
import SupportSide from "./support-side";
import UmamiScripts from "./umamiScripts";
import { hasCookie, getCookie } from "cookies-next";


export default function Layout({ children }: any) {
  const [qrScreenCode, setQRScreenCode] = useRecoilState(qrScreen);
  const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
  const [portFilter, setPortFilter] = useRecoilState(portFilterState);
  const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);
  const [loader, setLoader] = useRecoilState(loaderPage);
  const [prox, setProx] = useRecoilState(proxiesObj);
  const [time, setTime] = useState("");
  const [cookiesAccepted, setCookiesAcepted] = useState(false);

  const fetcher = (...args: [any, any]) =>
    fetch(...args).then((res) => res.json());
  const { data: proxies, error } = useSWR(
    `${apiBaseUrl}/proxies/?format=json&is_active=true&location_country_code=` +
      countryFilter +
      "&port=" +
      portFilter +
      "&page=" +
      pageCounter?.toString(),
    fetcher
  );

  if (error) {
    <>Error</>;
  }
  if (!proxies) {
    <>Loading</>;
  }

  // useEffect(() => {
  //   document
  //     .querySelector("body")
  //     ?.classList.add(
  //       "overflow-y-scroll",
  //       "bg-[#F8F8F8]",
  //       "dark:bg-[#141414]",
  //       "text-[#212121]"
  //     );
  //   setProx(proxies);
  //   setTime(proxies?.results[0]?.last_checked);
  //   window.addEventListener("load", function () {
  //     (window as any).wpcc?.init({
  //       border: "thin",
  //       corners: "small",
  //       colors: {
  //         popup: {
  //           background: "#f6f6f6",
  //           text: "#000000",
  //           border: "#cfcfcf",
  //         },
  //         button: {
  //           background: "#303030",
  //           text: "#ffffff",
  //         },
  //       },
  //       position: "bottom",
  //     });
  //   });
  // }, [proxies, countryFilter, pageCounter, portFilter, setProx]);

  useEffect(() => {
    document
      .querySelector("body")
      ?.classList.add(
        "overflow-y-scroll",
        "bg-[#F8F8F8]",
        "dark:bg-[#141414]",
        "text-[#212121]"
      );
    if (proxies) {
      setProx(proxies);
      if (countryFilter === "" && pageCounter == 1 && portFilter === "") {
        setTime(proxies?.results[0]?.last_checked);
      }
    }
    window.addEventListener("load", function () {
      (window as any).wpcc?.init({
        border: "thin",
        corners: "small",
        colors: {
          popup: {
            background: "#f6f6f6",
            text: "#000000",
            border: "#cfcfcf",
          },
          button: {
            background: "#303030",
            text: "#ffffff",
          },
        },
        position: "bottom",
      });
    });
    // if (hasCookie("cookie_consent_user_accepted")) {
    //   console.log("hay cookie")
    // } else {
    //   console.log("No hay cookie")
    // }
    // document
    //   .querySelector("cc-nb-okagree")
    //   ?.addEventListener("click", function () {
    //     let firstScript = document.createElement("script");
    //     firstScript.setAttribute("data-cookie-consent", "tracking")
    //     firstScript.src = "https://umami.akiel.dev/script.js";
    //     firstScript.setAttribute("data-website-id", "67d430ad-af2b-4010-8585-7aa2d423e934")
    //     document.querySelector("head")?.appendChild(firstScript)
    //     // setCookiesAcepted(true);
    //   });
  }, [proxies, countryFilter, pageCounter, portFilter, setProx]);

  return (
    <>
      {/* <Loader isLoading={loader} /> */}
      <Meta />
      {/* {cookiesAccepted && <UmamiScripts />} */}
      <Navbar />
      {qrScreenCode && <ModalQR />}
      <main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-16 py-6 xl:py-8 gap-[30px] px-4 pb-4">
        <div className="sidebar-wrapper col-span-12 xl:col-span-3 gap-4 ">
          <div className="server-subs-wrapper w-full h-auto flex gap-4 shrink-0 ">
            <ServerStatsCard data={proxies} time={time} />
            <div className="server-subs-wrapper w-1/2 h-auto flex flex-col ">
              <ItemSubscriptionSSocks />
              <ItemSubscriptionV2Ray />
            </div>
          </div>
          <Sidebar data={proxies} time={time} />
          <SupportSide visibleResponsive="desktop" />
        </div>
        {children}
        <SupportSide visibleResponsive="mobile" />
      </main>
    </>
  );
}
