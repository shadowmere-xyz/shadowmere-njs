import { useState } from "react";

export default function ItemSubscriptionV2Ray(props: any) {
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
			.writeText("https://shadowmere.akiel.dev/api/b64sub/")
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
			className={`itemSub w-full h-full mb-4 bg-white dark:bg-[#212121] dark:text-white flex items-center gap-2
                 p-4 rounded-lg border border-[#e0e0e0] dark:border-[#303030] hover:border-[#3a3a3a] cursor-pointer item-server-vpn after:blur-3xl backdrop-blur-sm overflow-hidden transition-all `}
			onMouseEnter={handleOver}
			onMouseLeave={handleLeave}
			onClick={handleClick}>
			<div className="icon-server w-8 h-8 flex shrink-0 rounded bg-[#303030] items-center justify-center">
				{!isOver ? (
					!timeCopy ? (
						<svg
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.88672 4.5H6.72763L11.6026 17.5L17.364 4.5"
								stroke="#cfcfcf"
								stroke-linecap="round"
								strokeWidth="1.5"
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
							"icon icon-tabler icon-tabler-clipboard-copy  "
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
			<div className={`flex flex-col `}>
				{!timeCopy && (
					<span className="dark:text-[#cfcfcf] text-sm capitalize pointer-events-none">
						V2Ray subscription
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
