import { useRecoilState } from "recoil"
import { viewDataLayout } from "../libs/store"


export default function ServerSkeleton () {
    const [viewMode, setViewMode] = useRecoilState(viewDataLayout)


    return (
        <div className={`item-server-skeleton w-full h-24 sm:h-24 bg-[#EBEBEB] dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shrink-0 flex items-center justify-between px-4 py-2 md:py-4 transition-all ${viewMode === 'details' && 'col-span-12'} ${viewMode === 'cols' && 'col-span-6'} `}>

            <div className="data-country-ip animate-pulse gap-1 flex flex-col items-start justify-center">
                <div className="w-auto h-auto flex gap-2 items-center">
                    <div className="country-flag w-11 h-8 rounded-md bg-[#cfcfcf] dark:bg-[#323232] select-none flex items-center text-3xl sm:text-4xl cursor-pointer">{}</div>
                    <div className="nombre-ip w-auto h-auto flex flex-col gap-1">
                        <span className=" leading-[1.10rem] font-semibold w-20 h-4 bg-[#cfcfcf] dark:bg-[#323232] rounded-full overflow-hidden truncate text-[14px] sm:text-[16px] "></span>
                        <span className=" leading-[1.10rem] font-medium w-32 h-4 bg-[#cfcfcf] dark:bg-[#323232] rounded-full overflow-hidden truncate text-[14px] text-[#7e7d7d] sm:text-[16px] "></span>
                    </div>
                </div>

                <div className=" w-auto h-auto flex gap-2">
                    
                    <div className="w-14 h-6 flex gap-1 items-center justify-start select-none bg-[#cfcfcf] dark:bg-[#323232] font-medium text-xs sm:text-sm rounded overflow-visible "></div>

                    <div className="w-16 h-6 flex gap-1 items-center justify-start select-none bg-[#cfcfcf] dark:bg-[#323232] font-medium text-xs sm:text-sm rounded overflow-visible" >
                        
                    </div>
                </div>
            </div>
            <div className="data-operations animate-pulse gap-4 flex flex-row-reverse items-center" >     
                <div className="opt-copiar relative w-4 h-4  sm:w-10 sm:h-10 rounded-md bg-[#cfcfcf] dark:bg-[#323232] flex items-center justify-center transition-colors transition-transform "></div>
                <div className="opt-qr relative w-4 h-4  sm:w-10 sm:h-10 rounded-md bg-[#cfcfcf] dark:bg-[#323232] flex items-center justify-center transition-colors transition-transform "></div>
                <div className="opt-download relative w-4 h-4  sm:w-10 sm:h-10 bg-[#cfcfcf] rounded-md dark:bg-[#323232] flex items-center justify-center transition-colors transition-transform "></div>
            </div>
        </div>
    )
}