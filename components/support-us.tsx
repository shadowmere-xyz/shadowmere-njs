import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { activeTab } from "../libs/store";
import { useEffect } from "react";
import Link from "next/link";
import front from "../public/front.png";
import back from "../public/back.png";

export default function Support() {
  const [tabActive, setTabActive] = useRecoilState(activeTab);

  useEffect(() => {
    setTabActive("support");
  }, [setTabActive]);

  {
    /* <Link
								href={"/support-us"}
								onClick={() => setTabActive("support")}
								className={
									"relative dark:text-[#cfcfcf] font-medium group w-auto h-12 flex items-center justify-center px-3 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors active:scale-[99%] " +
									(tabActive === "support" && "bg-[#EBEBEB] dark:bg-[#1B1B1B]")
								}>
								Support Us
								<NewFeature />
							</Link> */
  }

  return (
    <div className="contenido-support col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40 border border-[#e0e0e0] dark:border-[#303030]">
      <h1 className="text-2xl font-bold">The Shadowmere Official Tee</h1>
      <div className="inline">
        We are releasing the Shadowmere official tee made by{" "}
        <Link
          href="https://x.com/swordfest"
          className="font-bold hover:text-[#579eff] cursor-pointer"
        >
          Swordfest
        </Link>{" "}
        for those who love the project and want to support us by buying it
      </div>
      <div className="relative flex flex-col justify-center lg:flex-row gap-4 w-full h-auto">
        <Image
          // src="https://vangogh.teespring.com/v3/image/DFqA9cbp7_Wq95i0JwY5ul66ENI/800/800.jpg"
          src={front}
          alt="Shadowmere tshirt front"
          width={328}
          height={328}
          placeholder="blur"
          blurDataURL="https://mockup-api.teespring.com/v3/image/DFqA9cbp7_Wq95i0JwY5ul66ENI/800/10.jpg"
          className=" w-fit lg:w-96 h-auto rounded-lg "
        />
        <Image
          src="https://vangogh.teespring.com/v3/image/r25YJ0ROGMCOU2lfd8vsVlXleP8/800/800.jpg"
          alt="Shadowmere tshirt back"
          width={328}
          height={328}
          placeholder="blur"
          blurDataURL="https://mockup-api.teespring.com/v3/image/DFqA9cbp7_Wq95i0JwY5ul66ENI/800/10.jpg"
          className="relative w-fit lg:w-96 h-auto rounded-lg object-scale-down"
        />
      </div>
      <div className="w-full h-auto flex items-center justify-center">
        <Link
          data-umami-event={"tshirt"}
          className="button-fork w-full h-12 lg:w-fit flex items-center justify-center px-16 rounded-md dark:text-[#303030] font-medium bg-[#303030] hover:bg-[#444444] active:bg-[#303030] dark:bg-[#cfcfcf] dark:hover:bg-[#bfbfbf] dark:active:bg-white dark:transition-colors text-white"
          href={`https://swordfest.creator-spring.com/listing/shadowmere`}
          target="_blank"
        >
          Get the tee!
        </Link>
      </div>
    </div>
  );
}
