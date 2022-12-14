import { Meta } from "./meta";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Servers from "../pages/servers";
import ModalQR from "./modalQR";

export default function Layout({ children }: any) {
    return (
        <>
            <Meta />
            <Navbar />
            <ModalQR qrActive={qrScreenCode} />
            <main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-20 py-6 xl:py-8 gap-[30px] px-4 pb-4">
                <Sidebar />
                {children}
            </main>
        </>
    )
}