import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Proxies } from "./data"
import { proxiesObj, pageCounterState } from "./store"



export default function Pagination (props: any) {
    const proxies: Proxies = useRecoilValue(proxiesObj)
    const [pageCounter, setPageCounter] = useRecoilState(pageCounterState)
    const [page, setPage] = useState(pageCounter)

    const handleFirst = () => {
        setPageCounter(1)
    }

    const handleNext = (pageCounter: number) => {
        if (pageCounter < proxies?.total_pages)
        setPageCounter(pageCounter++)
    }

    const handlePrevious = (pageCounter: number) => {
        if (pageCounter > 1)
        setPageCounter((pageCounter: number) => pageCounter-1)
    }
    
    const handleLast = () => {
        setPageCounter(proxies?.total_pages)
    }

    return (
        <div className={"buttonPagesWrapper w-full h-auto flex items-center justify-center" + props.isVisible ? '' : 'hidden'}>
                <div className="buttonPages w-[328px] h-14 flex items-center justify-between">
                    <button onClick={handleFirst} className="button-first w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold font-awesome rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f100'] after:hover:-translate-x-[2px] after:hover:transition-all"></div>                        
                    </button>
    
                    <button onClick={() => handlePrevious} className="button-previous w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f104'] after:hover:-translate-x-[2px] after:hover:transition-all"></div>                                                
                    </button>
    
                    <span className="w-[90px] dark:text-[#cfcfcf] text-center font-semibold text-sm sm:text-base" >{pageCounter + ' of ' + proxies?.total_pages}</span>
    
                    <button onClick={() => handleNext} className="button-next w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f105'] after:hover:translate-x-[2px] after:hover:transition-all"></div>                        
                    </button>
    
                    <button onClick={() => handleLast()} className="button-last w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f101'] after:hover:translate-x-[2px] after:hover:transition-all"></div>                                               
                    </button>
                </div>
            </div>
    )
}