import Pagination from "../components/pagination";
import ServersList from "../components/serversList";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { activeTab, viewDataLayout } from "../libs/store";
import { useRecoilState } from "recoil";
import ServersListCols from "../components/serversListCols";
import DetailsLayoutButton from "../components/detailsLayoutButton";
import ColumnsLayoutButton from "../components/columnsLayoutButton";

export default function Servers() {
	const [tabActive, setTabActive] = useRecoilState(activeTab);
	const [viewMode, setViewMode] = useRecoilState(viewDataLayout);

	useEffect(() => {
		setTabActive("home");
	}, []);

	return (
		<div className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">
			<div className="w-full h-auto sm:h-12 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center sm:justify-between">
				<div className="view-mode-wrapper flex gap-4 items-center justify-end">
					<DetailsLayoutButton />
					<ColumnsLayoutButton />
				</div>
				<Pagination isVisible={true} />
			</div>
			<ServersListCols viewMode={viewMode} />
			{/* <Pagination isVisible={true} /> */}
			<div className="w-full h-auto sm:h-12 flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 items-center justify-center sm:justify-between">
				<div className="view-mode-wrapper flex gap-4 items-center justify-end">
					<DetailsLayoutButton />
					<ColumnsLayoutButton />
				</div>
				<Pagination isVisible={true} />
			</div>
		</div>
	);
	// className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4"
	// className="item-server-vpn w-full h-24 sm:h-28 bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shrink-0 flex items-center justify-between px-4 py-2 md:py-4 shadow-lg hover:cursor-pointer hover:-translate-y-[2px] dark:hover:bg-[#303030] hover:bg-[#FDFDFD] transition-all "
}
