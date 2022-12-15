import { Meta } from "./meta";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Servers from "../pages/servers";
import ModalQR from "./modalQR";
import { useRecoilState } from "recoil";
import { qrScreen } from "./store";
import { useEffect } from "react";
import { activeTab } from "./store";
import useSWR from 'swr'
import { pageCounterState, portFilterState, countryFilterState } from "./store";


export default function Layout({ children }: any) {
    const [qrScreenCode, setQRScreenCode] = useRecoilState(qrScreen)
    const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
    const [portFilter, setPortFilter] = useRecoilState(portFilterState);
    const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);

    const fetcher = (...args: [any, any]) => fetch(...args).then((res) => res.json())
    const { data: proxies, error } = useSWR('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&location_country_code=' + countryFilter + '&port=' + portFilter + '&page=' + pageCounter?.toString(), fetcher)

    if (error) {
        <>Error</>
    }
    if (!proxies) {
        <>Loading</>
    }

    useEffect(() => {
        document.querySelector('body')?.classList.add('overflow-y-scroll', 'bg-[#F8F8F8]', 'dark:bg-[#141414]', 'text-[#212121]')
    })

    return (
        <>
            <Meta />
            <Navbar />
            <ModalQR qrActive={qrScreenCode} />
            <main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-20 py-6 xl:py-8 gap-[30px] px-4 pb-4">
                <Sidebar data={proxies} />
                {children}
            </main>
        </>
    )
}