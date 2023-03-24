import { format, parseISO, parseJSON } from "date-fns";
import { enUS } from "date-fns/locale";

export default function ServerStatsCard(props: any) {
	return (
		<>
			<div
				className={`sidebar w-1/2 h-auto mb-4 bg-white dark:bg-[#212121] dark:text-[#cfcfcf] flex flex-col xl:flex-col gap-2
                 p-4 rounded-lg border border-[#e0e0e0] dark:border-[#303030]  `}>
				<div className="flex gap-2 w-full items-center">
					<div className="icon-server w-8 h-8 flex shrink-0 rounded bg-[#303030] items-center justify-center">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.7958 3.20251L16.7975 6.20417C17.0202 6.42681 17.1968 6.69112 17.3173 6.98202C17.4378 7.27293 17.4998 7.58472 17.4998 7.89959C17.4998 8.21447 17.4378 8.52626 17.3173 8.81716C17.1968 9.10806 17.0202 9.37237 16.7975 9.59501L14.595 11.7975C14.3724 12.0202 14.1081 12.1968 13.8172 12.3173C13.5262 12.4378 13.2145 12.4998 12.8996 12.4998C12.5847 12.4998 12.2729 12.4378 11.982 12.3173C11.6911 12.1968 11.4268 12.0202 11.2042 11.7975L10.9533 11.5467L5.48833 17.0117C5.21143 17.2885 4.8459 17.4591 4.45583 17.4933L4.31 17.5H3.33333C3.12922 17.5 2.93222 17.425 2.77969 17.2894C2.62716 17.1538 2.52971 16.9669 2.50583 16.7642L2.5 16.6667V15.69C2.5001 15.2987 2.63786 14.9199 2.88917 14.62L2.98833 14.5117L3.33333 14.1667H5V12.5H6.66667V10.8333L8.45333 9.04667L8.2025 8.79584C7.97983 8.57321 7.8032 8.30889 7.68269 8.01799C7.56219 7.72709 7.50016 7.4153 7.50016 7.10042C7.50016 6.78555 7.56219 6.47376 7.68269 6.18286C7.8032 5.89196 7.97983 5.62764 8.2025 5.40501L10.405 3.20251C10.6276 2.97984 10.8919 2.80321 11.1828 2.6827C11.4738 2.56219 11.7855 2.50017 12.1004 2.50017C12.4153 2.50017 12.7271 2.56219 13.018 2.6827C13.3089 2.80321 13.5732 2.97984 13.7958 3.20251Z"
								stroke="#CFCFCF"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.5 7.5H12.5083"
								stroke="#CFCFCF"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<span className="text-sm">Online VPNs</span>
				</div>
				<div className="">
					<div className="flex gap-2 items-center">
						<svg
							className="stroke-[#212121] dark:stroke-[#949494]"
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_2435_1849)">
								<path
									d="M2.5 6.33333C2.5 5.67029 2.76339 5.0344 3.23223 4.56556C3.70107 4.09672 4.33696 3.83333 5 3.83333H15C15.663 3.83333 16.2989 4.09672 16.7678 4.56556C17.2366 5.0344 17.5 5.67029 17.5 6.33333V7.99999C17.5 8.66304 17.2366 9.29892 16.7678 9.76776C16.2989 10.2366 15.663 10.5 15 10.5H5C4.33696 10.5 3.70107 10.2366 3.23223 9.76776C2.76339 9.29892 2.5 8.66304 2.5 7.99999V6.33333Z"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12.5 17.1667H5C4.33696 17.1667 3.70107 16.9033 3.23223 16.4344C2.76339 15.9656 2.5 15.3297 2.5 14.6667V13C2.5 12.337 2.76339 11.7011 3.23223 11.2322C3.70107 10.7634 4.33696 10.5 5 10.5H15"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M5.83301 7.16667V7.17501"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M5.83301 13.8333V13.8417"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M16.6667 13L15 15.5H17.5L15.8333 18"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2435_1849">
									<rect
										width="20"
										height="20"
										fill="white"
										transform="translate(0 0.5)"
									/>
								</clipPath>
							</defs>
						</svg>
						<span className="dark:text-[#949494] text-sm">Servers</span>
					</div>
					<div>
						<h1 className="text-4xl font-bold">{props.data?.count}</h1>
						<span className="text-xs dark:text-[#949494]">
                            {props.time && format(new Date(props.time), "MMM. dd, yyyy, HH:mm aa")}
							
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
