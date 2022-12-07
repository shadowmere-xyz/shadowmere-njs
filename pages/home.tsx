import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import Servers from "../components/server"

export default function Home() {
    return (
        <>
            <Navbar active={'home'} />
            <main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-20 py-6 xl:py-8 gap-[30px] px-4 pb-4">
                <Sidebar />
                <Servers />
            </main>
        </>
    )
}