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
import { IconRotate, IconRotate2 } from "@tabler/icons-react";

export default function Sidebar(props: any) {
  const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
  const [portFilter, setPortFilter] = useRecoilState(portFilterState);
  const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);
  const [proxies, setProxies] = useState<Proxies>();
  const [time, setTime] = useState("");

  const handleClick = (event: any) => {
    setPageCounter(1);
    setPortFilter("");
    setCountryFilter("");
  };

  const resetCountry = () => {
    return "UN";
  };

  //check this out for issues
  useEffect(() => {
    if (props.data) {
      setProxies(props.data);
    }
  }, [props.data]);

  return (
    <div className="sidebar col-span-12 xl:col-span-3 w-auto h-fit 2xl:h-fit mb-4 bg-white dark:bg-[#212121] dark:text-[#cfcfcf]  flex flex-col xl:flex-col gap-6 p-4 rounded-lg border border-[#e0e0e0] dark:border-[#303030]  ">
      <Ports valuePort={portFilter} />
      <Countries valueCountry={countryFilter} />

      <button
        onClick={handleClick}
        className="button-reset w-auto h-12 flex gap-2 items-center justify-center px-5 rounded-md bg-[#212121] hover:bg-[#444444] active:bg-[#303030] dark:bg-[#303030] dark:transition-colors text-white border dark:border-[#3a3a3a] transition-all item-server-vpn after:blur-3xl backdrop-blur-sm overflow-hidden"
      >
        <IconRotate2 />
        <span className="dark:text-[#cfcfcf] font-medium">Reset Filters</span>
      </button>
    </div>
  );
}
