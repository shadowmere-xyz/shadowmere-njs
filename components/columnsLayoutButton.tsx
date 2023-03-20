import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { viewDataLayout } from "../libs/store";

export default function ColumnsLayoutButton() {
	const [viewMode, setViewMode] = useRecoilState(viewDataLayout);
	const [viewLayout, setViewLayout] = useState('')

	const handleClick = () => {
		setViewMode("cols")
		localStorage.setItem('viewMode', JSON.stringify('cols'))
	}

	// useEffect(() => {
	// 	const view = JSON.parse(localStorage.getItem('viewMode')!)
	// 	setViewMode(view)
	// }, [])
	

	return (
		<div
			onClick={() => handleClick()}
			className={`w-10 h-10 rounded-[4px] flex items-center justify-center bg-white dark:bg-[#303030] border border-[#e0e0e0] dark:border-[#3a3a3a] dark:hover:bg-[#444444] cursor-pointer ${
				viewMode === "cols"
					? "border-[#3a3a3a] dark:border-[#cfcfcf]"
					: "border-[#e0e0e0] dark:border-[#3a3a3a]"
			} `}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-columns dark:stroke-[#cfcfcf] stroke-[#212121]"
				width={20}
				height={20}
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M4 6l5.5 0"></path>
				<path d="M4 10l5.5 0"></path>
				<path d="M4 14l5.5 0"></path>
				<path d="M4 18l5.5 0"></path>
				<path d="M14.5 6l5.5 0"></path>
				<path d="M14.5 10l5.5 0"></path>
				<path d="M14.5 14l5.5 0"></path>
				<path d="M14.5 18l5.5 0"></path>
			</svg>
		</div>
	);
}
