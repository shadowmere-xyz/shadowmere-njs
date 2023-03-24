import { useState } from "react";

export default function ItemSubscriptionSSocks(props: any) {
	const [isOver, setIsOver] = useState(false);
	const [timeCopy, setTimeCopy] = useState(false);

	const handleOver = () => {
		setIsOver(true);
	};
	const handleLeave = () => {
		setIsOver(false);
	};
	const handleClick = () => {
		setIsOver(false);
		setTimeCopy(true);

		navigator.clipboard
			.writeText('https://shadowmere.akiel.dev/api/sub')
			.then(() => {
				setTimeout(() => {
					setTimeCopy(false);
					if (!isOver) {
						setIsOver(true);
					}
				}, 2000);
			})
			.catch(() => {
				alert("something went wrong");
			});
	};

	return (
		<div
			className={`itemSub w-full h-full mb-4 bg-white dark:bg-[#212121] flex items-center gap-2
                 p-4 rounded-lg border border-[#e0e0e0] dark:border-[#303030] hover:border-[#3a3a3a] cursor-pointer item-server-vpn after:blur-3xl backdrop-blur-sm overflow-hidden transition-all `}
			onMouseEnter={handleOver}
			onMouseLeave={handleLeave}
			onClick={handleClick}>
			<div className="icon-server w-8 h-8 flex shrink-0 rounded bg-[#303030] items-center justify-center">
				{!isOver ? (
					!timeCopy ? (
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.0653 17.39L13.4103 17.045L10.2053 21.045C10.1871 21.0681 10.1621 21.0849 10.1338 21.093C10.1056 21.1011 10.0755 21.1001 10.0478 21.0902C10.0201 21.0802 9.99632 21.0618 9.97971 21.0375C9.9631 21.0133 9.95455 20.9844 9.95528 20.955L10.0403 15.72M20.2653 3.89C20.2829 3.89238 20.2999 3.89836 20.3152 3.90758C20.3304 3.9168 20.3436 3.92906 20.354 3.9436C20.3643 3.95814 20.3715 3.97464 20.3752 3.99208C20.3788 4.00953 20.3789 4.02754 20.3753 4.045L17.1803 18.13C17.1768 18.1447 17.1704 18.1586 17.1614 18.1707C17.1523 18.1829 17.1409 18.193 17.1277 18.2005C17.1146 18.208 17.1 18.2128 17.085 18.2144C17.0699 18.216 17.0547 18.2145 17.0403 18.21L10.2203 16.06C10.1792 16.0476 10.1418 16.0252 10.1115 15.9949C10.0811 15.9645 10.0588 15.9271 10.0464 15.8861C10.034 15.845 10.032 15.8014 10.0405 15.7594C10.0491 15.7173 10.0679 15.678 10.0953 15.645L15.8953 8.56L15.8403 8.5L7.80528 15.42C7.76746 15.4491 7.72302 15.4685 7.67592 15.4764C7.62882 15.4842 7.58051 15.4803 7.53528 15.465L1.93528 13.26C1.91725 13.2515 1.90201 13.2381 1.89134 13.2213C1.88067 13.2044 1.875 13.1849 1.875 13.165C1.875 13.1451 1.88067 13.1256 1.89134 13.1087C1.90201 13.0919 1.91725 13.0785 1.93528 13.07L20.1953 3.905H20.2653V3.89Z"
								stroke="#cfcfcf"
								stroke-linecap="round"
								stroke-linejoin="round"
								strokeWidth="1.2"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`icon icon-tabler icon-tabler-check transition-all duration-100 ease-in-out`}
							width={24}
							height={24}
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="#cfcfcf"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M5 12l5 5l10 -10"></path>
						</svg>
					)
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={
							"icon icon-tabler icon-tabler-clipboard-copy "
						}
						width={24}
						height={24}
						viewBox="0 0 24 24"
						strokeWidth="1"
						stroke="#cfcfcf"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2"></path>
						<path d="M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1"></path>
						<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
					</svg>
				)}
			</div>
			<div className={`flex flex-col dark:text-[#cfcfcf]`}>
				{!timeCopy && (
					<span className="dark:text-[#cfcfcf]  text-sm capitalize pointer-events-none">
						Shadowsocks
					</span>
				)}
				{timeCopy && (
					<span className="dark:text-[#cfcfcf] text-md capitalize leading-4 pointer-events-none">
						Copied to Clipboard!
					</span>
				)}
				{/* <span className={`text-[#494949] text-sm capitalize ${!isOver && 'hidden'}`}>Copy</span> */}
			</div>
		</div>
	);
}
