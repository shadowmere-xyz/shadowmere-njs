import Sidebar from "./sidebar"
import Servers from "../libs/servers"
import About from "../pages/about";
import Why from "../pages/why-shadowmere";
import Support from "../pages/support-us";
import Sub from "../pages/subscription";


export default function Content ({activeTab}: any) {

    // const setActiveTab = (tab: string) => {
    //     switch(tab){
    //       case 'servers': return <Servers/>;
    //       case 'about': return <About/>;
    //       case 'why': return <Why/>;
    //       case 'support': return <Support/>;
    //       case 'sub': return <Sub/>;
    //     }
    //   }

    return (
        <main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-20 py-6 xl:py-8 gap-[30px] px-4 pb-4">
            <Sidebar/>
            {/* {setActiveTab(activeTab)} */}
        </main>
    )
}