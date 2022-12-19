import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Sub() {
	const [copyLink, setCopyLink] = useState(false);

	return (
				<div className="contenido-sub col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shadow-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40">
					<h1 className="text-2xl font-bold">Server list subscription</h1>
					<p>
						Some applications like 
						<a
							href="https://play.google.com/store/apps/details?id=com.github.shadowsocks"
							className="text-[#579eff] font-bold after:content-['\f08e'] hover:text-[#467ecc] transition-colors after:pl-1 after:font-awesome after:text-sm">
							Shadowsocks for Android
						</a>
						 allow users to subscribe to a list of servers. You can subscribe to
						Shadowmere&apos;s using this link: 
						<span
							onClick={() => {
								navigator.clipboard.writeText(
									"https://shadowmere.akiel.dev/api/sub"
								);
								setCopyLink(true);
								setTimeout(() => {
									setCopyLink(false);
								}, 1000);
							}}
							className=" group text-[#579eff] cursor-pointer font-bold hover:text-[#467ecc] transition-colors after:pl-1 dark:after:text-[#7a7a7a] after:text-[#c1c1c1] after:font-awesome after:text-sm ">
							https://shadowmere.akiel.dev/api/sub{" "}
							<span
								className={
									"font-semibold text-[#c1c1c1] dark:text-[#7a7a7a] " +
									(copyLink ? "" : "hidden")
								}>
								Copied to Clipboard!
							</span>
							<span
								className={
									"font-awesome group:text-[#579eff] group:hover:text-[#467ecc] " +
									(!copyLink ? "" : "hidden")
								}>
								&#xf0c5;
							</span>
						</span>
					</p>
					<h2 className="font-bold">Tutorial video</h2>
					<iframe
						className="w-full h-[640px] rounded-lg"
						src="https://www.youtube.com/embed/YvQjOExb4no"
						title="Set up shadowsocks subscription from Shadowmere"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			
	);
}
