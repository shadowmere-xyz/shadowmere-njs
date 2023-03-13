export default function Icon(props: any) {
	if (props.name === "light")
		return (
			<svg
				className={
					"w-6 h-6 transition-transform fill-[#303030] dark:fill-[#cfcfcf] cursor-pointer " +
					(props.rotate && "hover:rotate-[-30deg]")
				}
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_524_2311)">
					<path d="M12.75 7.5C10.2703 7.5 8.25 9.52031 8.25 12C8.25 14.4797 10.2703 16.5 12.75 16.5C15.2297 16.5 17.25 14.4797 17.25 12C17.25 9.52031 15.2297 7.5 12.75 7.5ZM24.3 11.2734L19.8609 9.05625L21.4313 4.35C21.6422 3.7125 21.0375 3.10781 20.4047 3.32344L15.6984 4.89375L13.4766 0.45C13.1766 -0.15 12.3234 -0.15 12.0234 0.45L9.80625 4.88906L5.09531 3.31875C4.45781 3.10781 3.85313 3.7125 4.06875 4.34531L5.63906 9.05156L1.2 11.2734C0.6 11.5734 0.6 12.4266 1.2 12.7266L5.63906 14.9437L4.06875 19.6547C3.85781 20.2922 4.4625 20.8969 5.09531 20.6813L9.80156 19.1109L12.0188 23.55C12.3188 24.15 13.1719 24.15 13.4719 23.55L15.6891 19.1109L20.3953 20.6813C21.0328 20.8922 21.6375 20.2875 21.4219 19.6547L19.8516 14.9484L24.2906 12.7313C24.9 12.4266 24.9 11.5734 24.3 11.2734ZM16.9922 16.2422C14.6531 18.5812 10.8469 18.5812 8.50781 16.2422C6.16875 13.9031 6.16875 10.0969 8.50781 7.75781C10.8469 5.41875 14.6531 5.41875 16.9922 7.75781C19.3313 10.0969 19.3313 13.9031 16.9922 16.2422Z" />
				</g>
				<defs>
					<clipPath id="clip0_524_2311">
						<rect
							width="24"
							height="24"
							fill="white"
							transform="translate(0.75)"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	if (props.name === "dark")
		return (
			<svg
				className={
					"w-6 h-6 transition-transform fill-[#303030] dark:fill-[#cfcfcf] cursor-pointer " +
					(props.rotate && "hover:rotate-[-30deg]")
				}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24">
				<path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
			</svg>
		);
	if (props.name === "system")
		return (
			<svg
				className={
					"w-6 h-6 transition-transform fill-[#303030] dark:fill-[#cfcfcf] cursor-pointer " +
					(props.rotate && "hover:rotate-[-30deg]")
				}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24">
				<path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path>
			</svg>
		);
	return <></>;
}
