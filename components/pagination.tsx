import { EventHandler, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Proxies } from "../libs/data";
import { proxiesObj, pageCounterState } from "../libs/store";

export default function Pagination(props: any) {
  const [prox, setProx] = useRecoilState<Proxies>(proxiesObj);
  const [pageCounter, setPageCounter] =
    useRecoilState<number>(pageCounterState);

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
        "buttonPagesWrapper w-full h-auto flex items-center justify-center sm:justify-end " +
        (props.isVisible ? "" : "hidden")
      }
    >
      <div className="buttonPages w-full sm:w-auto h-auto sm:h-14 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
        <div className="flex gap-2 w-full sm:w-auto justify-center px-1">
          <button
            title="First page"
            onClick={handleFirst}
            className="button-first w-1/2 sm:w-auto h-10 p-4 rounded-[4px] hover:border-[#3a3a3a] hover:bg-[#303030] bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold font-awesome border border-[#e0e0e0] dark:border-[#303030]"
            type="button"
          >
            First
          </button>

          <button
            title="Previous page"
            onClick={() => pageCounter > 1 && setPageCounter(pageCounter - 1)}
            className="button-previous w-1/2 sm:w-auto h-10 p-4 rounded-[4px] hover:border-[#3a3a3a] hover:bg-[#303030] bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold border border-[#e0e0e0] dark:border-[#303030]"
            type="button"
          >
            Previous
          </button>
        </div>

        <div className="w-auto h-10 flex items-center justify-center gap-2 dark:text-[#cfcfcf] text-center font-semibold text-sm sm:text-base">
          <input
            title="page"
            className=" w-1/3 sm:w-14 h-10 rounded text-center bg-[#ebebeb] dark:bg-[#111111] text-[#212121] dark:text-[#cfcfcf] placeholder:text-[#212121] dark:placeholder:text-[#7a7a7a]"
            type="number"
            placeholder={pageCounter.toString()}
            onFocus={(e) => {
              e.currentTarget.placeholder = "";
            }}
            onBlur={(e) => {
              e.currentTarget.placeholder = pageCounter.toString();
            }}
            onKeyDownCapture={(e) => {
              if (
                parseInt(e.currentTarget.value) > 0 &&
                parseInt(e.currentTarget.value) <= prox.total_pages
              ) {
                if (e.key === "Enter") {
                  setPageCounter(parseInt(e.currentTarget.value))
                  e.currentTarget.value = ""
                  e.currentTarget.blur()
                }
              }
            }}
          />
          {`of ${prox?.total_pages}`}
        </div>
        <div className="flex gap-2 w-full sm:w-auto justify-center px-1">

        <button
          title="Next page"
          onClick={() =>
            pageCounter < prox.total_pages &&
            setPageCounter(prox.current_page + 1)
          }
          className="button-next w-1/2 sm:w-auto h-10 p-4 rounded-[4px] hover:border-[#3a3a3a] hover:bg-[#303030] bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold border border-[#e0e0e0] dark:border-[#303030]"
          type="button"
        >
          Next
        </button>

        <button
          title="Last page"
          onClick={handleLast}
          className="button-last w-1/2 sm:w-auto h-10 p-4 rounded-[4px] hover:border-[#3a3a3a] hover:bg-[#303030] bg-[#212121] text-[#cfcfcf] transition-colors flex items-center justify-center shrink-0 font-bold border border-[#e0e0e0] dark:border-[#303030]"
          type="button"
        >
          Last
        </button>
        </div>
      </div>
    </div>
  );
}
