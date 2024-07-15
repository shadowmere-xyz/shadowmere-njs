import { getFlagEmoji, getPercentage } from "../libs/functions";
import React, { useEffect, useRef, useState } from "react";
import { proxyId, qrScreen, viewDataLayout } from "../libs/store";
import { useRecoilState } from "recoil";
import useMousePosition from "../libs/useMousePosition";
import { useEffectOnce } from "usehooks-ts";
import {
  IconAnchor,
  IconCheck,
  IconClipboard,
  IconDownload,
  IconQrcode,
} from "@tabler/icons-react";
import NewFeature from "./newFeature";
import NewServer from "./newServer";
import Link from "next/link";
import { rootUrl } from "../vars/variables";

export default function ServerCol(dataServer: { proxy: any }) {
  const [timeCopy, setTimeCopy] = useState(false);
  const [proxID, setProxID] = useRecoilState(proxyId);
  const [qrActive, setQrActive] = useRecoilState(qrScreen);
  const ref = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition(ref.current);
  const [hasMounted, setHasMounted] = useState(false);
  const [style, setStyle] = useState("");
  const [viewMode, setViewMode] = useRecoilState(viewDataLayout);
  const [viewLayout, setViewLayout] = useState("");

  useEffect(() => {
    const view = JSON.parse(localStorage.getItem("viewMode")!);
    setViewMode(view);
  }, [viewLayout, setViewMode]);

  const handleQR = () => {
    setProxID(dataServer.proxy.id);
    setQrActive(!qrActive);
  };

  const handleMoveCapture = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // const target = e.target as HTMLDivElement
    const localX = e.clientX - (e.target as HTMLDivElement).offsetLeft - 60;
    const localY = e.clientY - (e.target as HTMLDivElement).offsetTop - 90;
    ref.current?.style.setProperty("--x", localX + "px");
    ref.current?.style.setProperty("--y", localY + "px");
    console.log(localX, localY);
  };

  return (
    <div
      ref={ref}
      onMouseMoveCapture={handleMoveCapture}
      className={`item-server-vpn relative overflow-hidden w-auto h-24 sm:h-24 bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shrink-0 flex items-center justify-between px-4 py-3 md:py-4 hover:cursor-pointer hover:-translate-y-[2px]  transition-all border border-[#e0e0e0] dark:border-[#303030] hover:border-[#3a3a3a] dark:hover:border-[#3a3a3a] after:blur-3xl backdrop-blur-sm duration-300 ${
        viewMode === "details" && "col-span-12"
      } ${viewMode === "cols" && "col-span-6"} `}
    >
      <div className="data-country-ip gap-1 flex flex-col items-start justify-center">
        <div className="w-auto h-auto flex gap-2 items-center">
          <div className="country-flag font-twemoji select-none flex items-center text-3xl sm:text-4xl w-auto h-6 cursor-pointer">
            {getFlagEmoji(dataServer.proxy.location_country_code)}
          </div>
          <div className="nombre-ip w-auto h-auto flex flex-col ">
            <div className="flex gap-1">
              <span className=" leading-[1.10rem] font-semibold w-auto overflow-hidden truncate text-[14px] sm:text-[16px] ">
                {dataServer.proxy.location_country}
              </span>
              {dataServer.proxy.times_checked < 10 && <NewServer />}
            </div>
            <span className=" leading-[1.10rem] font-medium w-auto overflow-hidden truncate text-[14px] text-[#7e7d7d] sm:text-[16px] ">
              {dataServer.proxy.ip_address}
            </span>
          </div>
        </div>

        <div className=" w-auto h-auto flex gap-2 ">
          <div
            className={
              "w-14 h-6 before:content-[''] before:absolute before:rounded flex gap-1 items-center justify-start select-none bg-[#cfcfcf] font-medium text-xs sm:text-sm rounded overflow-visible " +
              ((getPercentage(
                dataServer.proxy.times_check_succeeded,
                dataServer.proxy.times_checked
              ) <= 79 &&
                getPercentage(
                  dataServer.proxy.times_check_succeeded,
                  dataServer.proxy.times_checked
                ) > 30 &&
                "before:w-7 before:h-6 before:bg-yellow-500") ||
                (getPercentage(
                  dataServer.proxy.times_check_succeeded,
                  dataServer.proxy.times_checked
                ) > 79 &&
                  "before:w-14 before:h-6 before:bg-green-500") ||
                (getPercentage(
                  dataServer.proxy.times_check_succeeded,
                  dataServer.proxy.times_checked
                ) <= 30 &&
                  "before:w-4 before:h-6 before:bg-red-500"))
            }
          >
            <div className="w-full h-full flex items-center justify-center z-10 gap-0.5 ">
              <svg
                className=" fill-white"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2111_1115)">
                  <path
                    d="M3.44994 0.224375C3.46898 0.15958 3.50851 0.102699 3.56259 0.06225C3.61667 0.0218008 3.6824 -3.94915e-05 3.74994 5.36073e-08H6.24994C6.29943 3.7621e-05 6.3482 0.0118287 6.39224 0.0344027C6.43628 0.0569767 6.47433 0.0896881 6.50326 0.129844C6.53219 0.17 6.55116 0.216451 6.55863 0.265375C6.56609 0.314299 6.56183 0.364296 6.54619 0.41125L5.43369 3.75H7.81244C7.87096 3.74996 7.92832 3.76635 7.97798 3.79731C8.02764 3.82827 8.06761 3.87255 8.09334 3.92512C8.11906 3.97768 8.12952 4.03641 8.1235 4.09462C8.11748 4.15283 8.09525 4.20818 8.05931 4.25437L3.68431 9.87937C3.6395 9.93728 3.57577 9.9776 3.50425 9.99331C3.43274 10.009 3.35797 9.99913 3.29301 9.96534C3.22805 9.93156 3.17701 9.87604 3.14881 9.80847C3.1206 9.7409 3.11702 9.66557 3.13869 9.59562L4.26431 5.9375H2.18744C2.13885 5.93753 2.09093 5.92623 2.04748 5.9045C2.00403 5.88277 1.96624 5.8512 1.93712 5.81231C1.90799 5.77342 1.88834 5.72828 1.87972 5.68047C1.87109 5.63265 1.87374 5.58349 1.88744 5.53687L3.44994 0.224375Z"
                    fill="#303030"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2111_1115">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="w-auto h-6 text-[#303030] flex items-center justify-center">
                {`${getPercentage(
                  dataServer.proxy.times_check_succeeded,
                  dataServer.proxy.times_checked
                ).toString()}%`}
              </span>
            </div>
          </div>

          <div className="w-16 h-6 before:content-[''] before:absolute before:rounded before:w-16 before:h-6 before:bg-[#7474FF] flex gap-1 items-center justify-start select-none bg-[#cfcfcf] font-medium text-xs sm:text-sm rounded overflow-visible">
            <div className="w-full h-full flex items-center justify-center z-10 gap-0.5 ">
              <IconAnchor size={14} strokeWidth={2.5} color="white" />
              <span className="w-auto h-6 text-white text-xs sm:text-sm font-semibold flex items-center justify-center overflow-hidden">
                {dataServer.proxy.port}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* onMouseMove={(e:any)=>e.stopPropagation()} */}
      <div className="data-operations h-full gap-2 md:gap-4 flex flex-row-reverse items-end md:items-center">
        <div
          title="Copy"
          data-umami-event={"Copy"}
          className="opt-copiar w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#EBEBEB] dark:hover:bg-[#1B1B1B] active:bg-[#D7D7D7] dark:active:bg-[#111111] transition-all duration-150 active:scale-[95%]"
          onClick={() => {
            navigator.clipboard
              .writeText(
                dataServer.proxy.url +
                  "#" +
                  encodeURI(dataServer.proxy.location)
              )
              .then(() => {
                setTimeCopy(true);
                setTimeout(() => {
                  setTimeCopy(false);
                }, 500);
              })
              .catch(() => {
                alert("something went wrong");
              });
          }}
        >
          {timeCopy ? <IconCheck size={"24"} /> : <IconClipboard size={"24"} />}
        </div>

        <button
          onClick={handleQR}
          data-umami-event={"QR"}
          title="QR Code"
          className="opt-codigo-qr w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#EBEBEB] dark:hover:bg-[#1B1B1B] active:bg-[#D7D7D7] dark:active:bg-[#111111] transition-all duration-150 active:scale-[95%]"
        >
          <IconQrcode size={"24"} />
        </button>

        <Link
          title="Download"
          data-umami-event={"Download"}
          href={`${rootUrl}/${dataServer.proxy.id}/config`}
          className="opt-descargar w-4 h-4 sm:w-10 sm:h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#EBEBEB] dark:hover:bg-[#1B1B1B] active:bg-[#D7D7D7] dark:active:bg-[#111111] transition-all duration-150 active:scale-[95%]"
        >
          <IconDownload size={"24"} />
        </Link>
      </div>
    </div>
  );
}
