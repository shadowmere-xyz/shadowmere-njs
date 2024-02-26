import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import ColumnsLayoutButton from "../components/columnsLayoutButton";
import DetailsLayoutButton from "../components/detailsLayoutButton";
import Pagination from "../components/pagination";
import ServersListCols from "../components/serversListCols";
import { viewDataLayout } from "../libs/store";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const [viewMode, setViewMode] = useRecoilState(viewDataLayout);
  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    const view = JSON.parse(localStorage.getItem("viewMode")!);
    console.log(view);
    if (!view) {
      localStorage.setItem("viewMode", JSON.stringify(viewMode));
    } else {
      setViewMode(JSON.parse(localStorage.getItem("viewMode")!));
    }
  }, [viewMode, setViewMode]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (windowWidth <= 640) {
      localStorage.setItem("viewMode", JSON.stringify("details"));
    }
  }, [windowWidth]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">
        <div className="upper-bar w-full h-auto sm:h-12 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center sm:justify-between">
          <div
            className={`view-mode-wrapper hidden sm:flex gap-4 items-center justify-end `}
          >
            <DetailsLayoutButton />
            <ColumnsLayoutButton />
          </div>
          <Pagination isVisible={true} />
        </div>
        <ServersListCols viewMode={viewMode} />
        {/* <Pagination isVisible={true} /> */}
        <div className="lower-bar w-full h-auto sm:h-12 flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 items-center justify-center sm:justify-between">
          <div className="view-mode-wrapper hidden sm:flex gap-4 items-center justify-end">
            <DetailsLayoutButton />
            <ColumnsLayoutButton />
          </div>
          <Pagination isVisible={true} />
        </div>
      </div>
    </>
  );
}
