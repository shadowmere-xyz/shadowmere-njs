import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeTab } from "../libs/store";
import { useRouter } from "next/router";

export default function About() {
	const [tabActive, setTabActive] = useRecoilState(activeTab)
	const router = useRouter()

    useEffect(()=>{
		if (router.pathname === '/about'){
			setTabActive('about')
		}
    },[router.pathname, setTabActive])

	return (
		<div className="contenido-about col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40 border border-[#e0e0e0] dark:border-[#303030]">
			<h1 className="text-2xl font-bold">About Us</h1>
			{/* <!-- Aqui va el contenido del About --> */}
			<p>Shadowmere. A list of Shadowsocks proxies</p>
			<h2 className="font-bold">Disclaimer.</h2>
			<p>
				This website is only a list of tunnels collected all around
				internet. We do NOT provide or maintain any of these tunnels.{" "}
				<span className="bg-red-600 text-white">
					Use them at your own risk.
				</span>
			</p>
			<h2 className="font-bold">How do I use this?</h2>
			<p>
				Go give{" "}
				<a
					href="https://www.shadowsocks.org"
					className="text-[#579eff] font-bold after:content-['\f08e'] hover:text-[#467ecc] transition-colors after:pl-1 after:font-awesome after:text-sm">
					Shadowsocks
				</a>{" "}
				a quick look for information. Here is a list of clients for several
				platforms, but my favorite is{" "}
				<a
					href="https://getoutline.org/"
					className="text-[#579eff] font-bold after:content-['\f08e'] hover:text-[#467ecc] transition-colors after:pl-1 after:font-awesome after:text-sm">
					Outline
				</a>{" "}
				for any platform and{" "}
				<a
					href="https://play.google.com/store/apps/details?id=com.github.shadowsocks"
					className="text-[#579eff] font-bold after:content-['\f08e'] hover:text-[#467ecc] transition-colors after:pl-1 after:font-awesome after:text-sm">
					Shadowsocks for Android
				</a>
			</p>
		</div>
	);
}
