import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { viewDataLayout } from "../libs/store";

export default function DetailsLayoutButton() {
	const [viewMode, setViewMode] = useRecoilState(viewDataLayout);
	const [viewLayout, setViewLayout] = useState('')

	const handleClick = () => {
		setViewMode("details")
		localStorage.setItem('viewMode', JSON.stringify('details'))
	}

	useEffect(() => {
		const view = JSON.parse(localStorage.getItem('viewMode')!)
		setViewMode(view)
	}, [])

	return (
		<div
			onClick={() => handleClick()}
			className={`w-10 h-10 rounded-[4px] flex items-center justify-center bg-white dark:bg-[#303030] border dark:hover:bg-[#444444] cursor-pointer ${
				viewMode === "details"
					? "border-[#3a3a3a] dark:border-[#cfcfcf]"
					: "border-[#e0e0e0] dark:border-[#3a3a3a]"
			} `}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="icon icon-tabler icon-tabler-list-details dark:stroke-[#cfcfcf] stroke-[#212121] "
				width={20}
				height={20}
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M13 5h8"></path>
				<path d="M13 9h5"></path>
				<path d="M13 15h8"></path>
				<path d="M13 19h5"></path>
				<path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
				<path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
			</svg>
		</div>
	);
}
