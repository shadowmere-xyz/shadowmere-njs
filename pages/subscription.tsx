import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import ShadowsockSubs from "../components/shadowsocksSubs";
import Sidebar from "../components/sidebar";
import VmessSubs from "../components/vmessSubs";

export default function Sub() {
	const [copyLink, setCopyLink] = useState(false);
	const [tab, setTab] = useState("ss");
	const elRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState<number | undefined>(0);
	const [strWidth, setStrWidth] = useState("");
	const tabs = [
		{
			name: "Shadowsocks",
			type: 'ss'
		},
		{
			name: "Vmess",
			type: 'vmess'
		},
	];

	const handleClick = (t: string) => {
		setTab(t);
	};

	useEffect(() => {
		console.log(tab);
		setWidth(elRef.current?.offsetWidth);
		setStrWidth(`w-[${width}px]`);
	}, [width, strWidth, tab, elRef]);

	return (
		<div className="contenido-sub col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shadow-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40">
			<h1 className="text-2xl font-bold">Server list subscription</h1>
			<div className="flex flex-col">
				<div className={`flex gap-8 font-semibold`}>
					{tabs.map((tab: any, i: any) => (
						<div className={`cursor-pointer ${tab == tab.type ? 'bg-[#1b1b1b]' : ''}`} ref={elRef} key={i} onClick={()=>handleClick(tab.type)}>{tab.name}</div>
					))}
					<div
						className={`marker ${strWidth} h-0.5 bg-[#cfcfcf]`}></div>
				</div>
				{/* <div className="w-full">
					<div
						className={`marker ${strWidth} h-0.5 bg-[#cfcfcf]`}></div>
				</div> */}
			</div>
			{tab === 'ss' && <ShadowsockSubs />}
			{tab === 'vmess' && <VmessSubs/>}
		</div>
	);
}
