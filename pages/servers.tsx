import Pagination from "../components/pagination"
import ServersList from "../components/serversList"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import { useEffect } from "react"
import { activeTab } from "../libs/store"
import { useRecoilState } from "recoil"


export default function Servers() {
    const [tabActive, setTabActive] = useRecoilState(activeTab)

    useEffect(()=>{
        setTabActive('home')
    },[])

    return (
        <div className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">
            <Pagination isVisible={true} />
            <ServersList />
            <Pagination isVisible={true} />
        </div>
    )
    // className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4"
    // className="item-server-vpn w-full h-24 sm:h-28 bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shrink-0 flex items-center justify-between px-4 py-2 md:py-4 shadow-lg hover:cursor-pointer hover:-translate-y-[2px] dark:hover:bg-[#303030] hover:bg-[#FDFDFD] transition-all "
}