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

export default function Sidebar(props: any) {
	const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
	const [portFilter, setPortFilter] = useRecoilState(portFilterState);
	const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);
	// const proxies: Proxies = useRecoilValue(proxiesObj)
	const [proxies, setProxies] = useState<Proxies>();
	const [time, setTime] = useState("");

	const handleClick = (event: any) => {
		setPageCounter(1);
		setPortFilter("");
		setCountryFilter("");
		// console.log(props.data)
	};

	const resetCountry = () => {
		return "UN";
	};

	useEffect(() => {
		if (props.data) {
			setProxies(props.data);
			// setTime(proxies?.results[0].last_checked)
		}
	});

	return (
		<div className="sidebar col-span-12 xl:col-span-3 w-auto h-fit 2xl:h-fit mb-4 bg-white dark:bg-[#212121] dark:text-[#cfcfcf]  flex flex-col xl:flex-col gap-6 p-4 rounded-lg border border-[#e0e0e0] dark:border-[#303030]  ">
			{/* <div className="online-vpns-filter flex flex-col gap-2 xl:gap-4">
				<div className="w-full h-6 flex items-center font-semibold gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-key stroke-[#303030] dark:stroke-[#cfcfcf]"
						width={20}
						height={20}
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
						<path d="M15 9h.01"></path>
					</svg>
					Online VPNs
				</div>
				<div className="w-full h-6 flex items-center font-semibold gap-2 pl-4">
					<svg
						className="fill-[#303030] dark:fill-[#cfcfcf]"
						width="12"
						height="13"
						viewBox="0 0 12 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M11.25 4.25H0.75C0.335789 4.25 0 3.91421 0 3.5V2C0 1.58579 0.335789 1.25 0.75 1.25H11.25C11.6642 1.25 12 1.58579 12 2V3.5C12 3.91421 11.6642 4.25 11.25 4.25ZM10.125 2.1875C9.81434 2.1875 9.5625 2.43934 9.5625 2.75C9.5625 3.06066 9.81434 3.3125 10.125 3.3125C10.4357 3.3125 10.6875 3.06066 10.6875 2.75C10.6875 2.43934 10.4357 2.1875 10.125 2.1875ZM8.625 2.1875C8.31434 2.1875 8.0625 2.43934 8.0625 2.75C8.0625 3.06066 8.31434 3.3125 8.625 3.3125C8.93566 3.3125 9.1875 3.06066 9.1875 2.75C9.1875 2.43934 8.93566 2.1875 8.625 2.1875ZM11.25 8H0.75C0.335789 8 0 7.66421 0 7.25V5.75C0 5.33579 0.335789 5 0.75 5H11.25C11.6642 5 12 5.33579 12 5.75V7.25C12 7.66421 11.6642 8 11.25 8ZM10.125 5.9375C9.81434 5.9375 9.5625 6.18934 9.5625 6.5C9.5625 6.81066 9.81434 7.0625 10.125 7.0625C10.4357 7.0625 10.6875 6.81066 10.6875 6.5C10.6875 6.18934 10.4357 5.9375 10.125 5.9375ZM8.625 5.9375C8.31434 5.9375 8.0625 6.18934 8.0625 6.5C8.0625 6.81066 8.31434 7.0625 8.625 7.0625C8.93566 7.0625 9.1875 6.81066 9.1875 6.5C9.1875 6.18934 8.93566 5.9375 8.625 5.9375ZM11.25 11.75H0.75C0.335789 11.75 0 11.4142 0 11V9.5C0 9.08579 0.335789 8.75 0.75 8.75H11.25C11.6642 8.75 12 9.08579 12 9.5V11C12 11.4142 11.6642 11.75 11.25 11.75ZM10.125 9.6875C9.81434 9.6875 9.5625 9.93934 9.5625 10.25C9.5625 10.5607 9.81434 10.8125 10.125 10.8125C10.4357 10.8125 10.6875 10.5607 10.6875 10.25C10.6875 9.93934 10.4357 9.6875 10.125 9.6875ZM8.625 9.6875C8.31434 9.6875 8.0625 9.93934 8.0625 10.25C8.0625 10.5607 8.31434 10.8125 8.625 10.8125C8.93566 10.8125 9.1875 10.5607 9.1875 10.25C9.1875 9.93934 8.93566 9.6875 8.625 9.6875Z" />
					</svg>
					<span className="font-normal">{proxies?.count}</span>
				</div>
			</div> */}

			{/* <div className="last-check-filter flex flex-col gap-2 xl:gap-4">
				<div className="w-full h-6 flex items-center font-semibold gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-refresh stroke-[#303030] dark:stroke-[#cfcfcf]"
						width={20}
						height={20}
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
						<path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
					</svg>
					Last check
				</div>
				<div className="w-full h-6 flex items-center font-semibold gap-2 pl-4">
					<span className="font-normal">{format(new Date(time), 'MMMM do yyyy, h:mm:ss a')}</span>
					<span className="font-normal">{props.time}</span>
				</div>
			</div> */}

			<Ports valuePort={portFilter} />

			<Countries valueCountry={countryFilter} />

			<button
				onClick={handleClick}
				className="button-reset w-auto h-12 flex gap-2 items-center justify-center px-5 rounded-md bg-[#212121] hover:bg-[#444444] active:bg-[#303030] dark:bg-[#303030] dark:transition-colors text-white border dark:border-[#3a3a3a] transition-all item-server-vpn after:blur-3xl backdrop-blur-sm overflow-hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-rotate-2 stroke-[#cfcfcf]"
					width={20}
					height={20}
					viewBox="0 0 24 24"
					strokeWidth="3"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5"></path>
					<path d="M18.37 7.16l0 .01"></path>
					<path d="M13 19.94l0 .01"></path>
					<path d="M16.84 18.37l0 .01"></path>
					<path d="M19.37 15.1l0 .01"></path>
					<path d="M19.94 11l0 .01"></path>
				</svg>
				<span className="dark:text-[#cfcfcf] font-medium">Reset Filters</span>
			</button>
		</div>
	);
}
