import useSWR from "swr";
import Ports from "./ports";
import Countries from "./countries";
import {
  pageCounterState,
  portFilterState,
  countryFilterState,
} from "../libs/store";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Proxies } from "../libs/data";
import { parseISO } from "date-fns/esm";
import { IconArrowRight, IconRotate, IconRotate2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NewFeature from "./newFeature";
// import front from "../public/front.jpg";
// import back from "../public/back.png";

type PanelProps = {
    visibleResponsive?: 'desktop' | 'mobile' | undefined;
}

export default function SupportSide(props: PanelProps) {
  //   const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
  //   const [portFilter, setPortFilter] = useRecoilState(portFilterState);
  //   const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);
  //   const [proxies, setProxies] = useState<Proxies>();
  //   const [time, setTime] = useState("");
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className={`sidebar col-span-12 xl:col-span-3 w-full h-fit 2xl:h-fit mb-4 bg-white dark:bg-[#212121] dark:text-[#cfcfcf] ${props.visibleResponsive == 'desktop' && 'hidden xl:flex'} ${props.visibleResponsive == 'mobile' && 'xl:hidden flex text-sm'} flex-col xl:flex-col gap-6 p-4 rounded-lg border border-[#e0e0e0] dark:border-[#303030]`}>
      <div className="flex gap-4 justify-between">
        <div className="relative w-full h-[209px] rounded-md bg-slate-200">
          <Image
            // src="https://vangogh.teespring.com/v3/image/DFqA9cbp7_Wq95i0JwY5ul66ENI/800/800.jpg"
            src={'/images/front.jpg'}
            alt="Shadowmere tshirt front"
            placeholder="blur"
            fill={true}
            blurDataURL={'/images/front.jpg'}
            className=" object-cover w-full lg:w-96 h-auto rounded-lg "
          />
        </div>
        <div className="relative w-full h-[209px] rounded-md bg-slate-200">
          <Image
            // src="https://vangogh.teespring.com/v3/image/r25YJ0ROGMCOU2lfd8vsVlXleP8/800/800.jpg"
            src={'/images/back.jpg'}
            alt="Shadowmere tshirt front"
            placeholder="blur"
            fill={true}
            blurDataURL={'/images/front.jpg'}
            className=" object-cover w-full lg:w-96 h-auto rounded-lg "
          />
        </div>
      </div>
      <Link
        data-umami-event={"tshirt"}
        href={`https://swordfest.creator-spring.com/listing/shadowmere`}
        target="_blank"
        className="button-reset w-auto h-12 flex gap-2 items-center justify-center px-5 rounded-md bg-[#212121] hover:bg-[#444444] active:bg-[#303030] dark:bg-[#303030] dark:transition-colors text-white border dark:border-[#3a3a3a] transition-all item-server-vpn after:blur-3xl backdrop-blur-sm overflow-hidden"
      >
          Get the Shadowmere Official Tee
        <IconArrowRight stroke={1.5} color="#cfcfcf" />
      </Link>
    </div>
  );
}
