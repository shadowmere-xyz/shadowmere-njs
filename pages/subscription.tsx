import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Navbar from "../components/navbar";
import ShadowsockSubs from "../components/shadowsocksSubs";
import Sidebar from "../components/sidebar";
import V2raySubs from "../components/v2raySubs";
import { activeTab } from "../libs/store";


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
			name: "V2Ray",
			type: 'v2ray'
		},
	];

	const [tabActive, setTabActive] = useRecoilState(activeTab)

    useEffect(()=>{
        setTabActive('sub')
    },[setTabActive])

	const handleClick = (t: string) => {
		setTab(t);
	};

	useEffect(() => {
		console.log(tab);
		setWidth(elRef.current?.offsetWidth);
		setStrWidth(`w-[${width}px]`);
	}, [width, strWidth, tab, elRef]);

	return (
		<div className="contenido-sub col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40 border border-[#e0e0e0] dark:border-[#303030]">
			<h1 className="text-2xl font-bold">Server list subscription</h1>
			<div className="flex flex-col">
				<div className={`flex gap-4 font-semibold`}>
					{tabs.map((t: any, i: any) => (
						<div className={`dark:text-[#cfcfcf] font-medium group w-auto h-12 flex items-center justify-center px-3 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors active:scale-[99%] ${tab === t.type && 'bg-[#EBEBEB] dark:bg-[#1B1B1B]'} `} ref={elRef} key={i} onClick={()=>handleClick(t.type)}>{t.name}</div>
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
			{tab === 'v2ray' && <V2raySubs/>}
		</div>
	);
}
