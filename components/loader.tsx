import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Loader(props: any) {
	const { theme, setTheme, systemTheme } = useTheme();

	if (theme === "dark") {
		return (
			<div
				className={`loader-screen w-full h-full top-0 z-[90] bg-white dark:bg-[#141414]  flex items-center justify-center ${
					props.isLoading ? "hidden" : "fixed"
				}${
					// theme === 'dark' && 'hidden'
					``
				}`}>
				<Player
					src="/logo-animation-2-dark.json"
					background="transparent"
					speed={1}
					style={{ width: "100px", height: "100px" }}
					loop={true}
					autoplay={true}></Player>
			</div>
		);
	} else if (theme === "light") {
		return (
			<div
				className={`loader-screen w-full h-full top-0 z-[90] bg-white dark:bg-[#141414]  flex items-center justify-center ${
					props.isLoading ? "hidden" : "fixed"
				}${
					// theme === 'light' && 'hidden'
					``
				}`}>
				<Player
					src="/logo-animation-2.json"
					background="transparent"
					speed={1}
					style={{ width: "100px", height: "100px" }}
					loop={true}
					autoplay={true}></Player>
			</div>
		);
	} else {
		return <></>;
	}
}
