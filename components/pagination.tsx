import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Proxies } from "../libs/data";
import { proxiesObj, pageCounterState } from "../libs/store";

export default function Pagination(props: any) {
	// const proxies: Proxies = useRecoilValue(proxiesObj)
	const [prox, setProx] = useRecoilState<Proxies>(proxiesObj);
	const [pageCounter, setPageCounter] = useRecoilState<number>(
		pageCounterState
	);
	// const [page, setPage] = useState(pageCounter)

	const handleFirst = () => {
		setPageCounter(1);
	};

	const handleNext = (pageCounter: number) => {
		if (pageCounter < prox.total_pages) setPageCounter(pageCounter + 1);
	};

	const handlePrevious = (pageCounter: number) => {
		if (pageCounter > 1) {
			setPageCounter(pageCounter - 1);
		}
	};

	const handleLast = () => {
		setPageCounter(prox.total_pages);
	};

	return (
		<div
			className={
				"buttonPagesWrapper w-auto h-auto flex items-center justify-center " +
				(props.isVisible ? "" : "hidden")
			}>
			<div className="buttonPages w-[328px] h-14 flex items-center justify-between">
				<button
					title="First page"
					onClick={handleFirst}
					className="button-first w-10 h-10 rounded-[4px] bg-white hover:border-[#3a3a3a] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold font-awesome border border-[#e0e0e0] dark:border-[#303030]"
					type="button">
					{/* <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f100'] after:hover:-translate-x-[2px] after:hover:transition-all"></div> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevrons-left dark:stroke-[#cfcfcf] stroke-[#212121]"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M11 7l-5 5l5 5"></path>
						<path d="M17 7l-5 5l5 5"></path>
					</svg>
				</button>

				<button
					title="Previous page"
					onClick={() => pageCounter > 1 && setPageCounter(pageCounter - 1)}
					className="button-previous w-10 h-10 rounded-[4px] bg-white hover:border-[#3a3a3a] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold border border-[#e0e0e0] dark:border-[#303030]"
					type="button">
					{/* <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f104'] after:hover:-translate-x-[2px] after:hover:transition-all"></div> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevron-left dark:stroke-[#cfcfcf] stroke-[#212121]"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M15 6l-6 6l6 6"></path>
					</svg>
				</button>

				<span className="w-[90px] dark:text-[#cfcfcf] text-center font-semibold text-sm sm:text-base">
					{pageCounter + " of " + prox?.total_pages}
				</span>

				<button
					title="Next page"
					onClick={() =>
						pageCounter < prox.total_pages && setPageCounter(pageCounter + 1)
					}
					className="button-next w-10 h-10 rounded-[4px] bg-white hover:border-[#3a3a3a] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold border border-[#e0e0e0] dark:border-[#303030]"
					type="button">
					{/* <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f105'] after:hover:translate-x-[2px] after:hover:transition-all"></div> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevron-right dark:stroke-[#cfcfcf] stroke-[#212121]"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M9 6l6 6l-6 6"></path>
					</svg>
				</button>

				<button
					title="Last page"
					onClick={handleLast}
					className="button-last w-10 h-10 rounded-[4px] bg-white hover:border-[#3a3a3a] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold border border-[#e0e0e0] dark:border-[#303030]"
					type="button">
					{/* <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f101'] after:hover:translate-x-[2px] after:hover:transition-all"></div> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-chevrons-right dark:stroke-[#cfcfcf] stroke-[#212121]"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M7 7l5 5l-5 5"></path>
						<path d="M13 7l5 5l-5 5"></path>
					</svg>
				</button>
			</div>
		</div>
	);
}
