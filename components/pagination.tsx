


export default function Pagination () {
    return (
        <div className="buttonPagesWrapper w-full h-auto 2xl:hidden flex justify-center">
                <div className="buttonPages w-[328px] h-14 flex items-center justify-between">
                    <button className="button-first w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold font-awesome rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f100'] after:hover:-translate-x-[2px] after:hover:transition-all"></div>                        
                    </button>
    
                    <button className="button-previous w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f104'] after:hover:-translate-x-[2px] after:hover:transition-all"></div>                                                
                    </button>
    
                    <span className="w-[90px] dark:text-[#cfcfcf] text-center font-semibold text-sm sm:text-base" ></span>
    
                    <button className="button-next w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f105'] after:hover:translate-x-[2px] after:hover:transition-all"></div>                        
                    </button>
    
                    <button className="button-last w-12 h-12 bg-[#212121] hover:bg-[#303030] dark:hover:bg-[#303030] dark:bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold rounded-lg shadow-xl" type="button" >
                        <div className="w-12 h-12 font-awesome text-xl flex items-center justify-center after:content-['\f101'] after:hover:translate-x-[2px] after:hover:transition-all"></div>                                               
                    </button>
                </div>
            </div>
    )
}