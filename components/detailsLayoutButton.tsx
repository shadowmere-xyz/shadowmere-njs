import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { viewDataLayout } from "../libs/store";
import { IconListDetails } from "@tabler/icons-react";

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
	}, [setViewMode])

	return (
		<div
			onClick={() => handleClick()}
			className={`w-10 h-10 rounded-[4px] flex items-center justify-center bg-white dark:bg-[#303030] border dark:hover:bg-[#444444] cursor-pointer ${
				viewMode === "details"
					? "border-[#3a3a3a] dark:border-[#cfcfcf]"
					: "border-[#e0e0e0] dark:border-[#3a3a3a]"
			} `}>
			<IconListDetails className="dark:stroke-[#cfcfcf] stroke-[#212121]"/>
		</div>
	);
}
