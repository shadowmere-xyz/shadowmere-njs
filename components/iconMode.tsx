export default function Icon(props: any) {
	if (props.name === "light")
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={
					"icon icon-tabler icon-tabler-sun stroke-[#303030] dark:stroke-[#cfcfcf] " +
					(props.rotate && "hover:rotate-[-30deg]")
				}
				width={24}
				height={24}
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
				<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
			</svg>
		);
	if (props.name === "dark")
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={
					"icon icon-tabler icon-tabler-moon stroke-[#303030] dark:stroke-[#cfcfcf] " +
					(props.rotate && "hover:rotate-[-30deg]")
				}
				width={24}
				height={24}
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
			</svg>
		);
	if (props.name === "system")
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={"icon icon-tabler icon-tabler-device-imac stroke-[#303030] dark:stroke-[#cfcfcf] " + (props.rotate && "hover:rotate-[-30deg]")}
				width={24}
				height={24}
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12z"></path>
				<path d="M3 13h18"></path>
				<path d="M8 21h8"></path>
				<path d="M10 17l-.5 4"></path>
				<path d="M14 17l.5 4"></path>
			</svg>
		);
	return <></>;
}
