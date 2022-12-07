import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function Support() {
	return (
		<>
			<Head>
				<title>Support Us</title>
				<meta charSet="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
			</Head>
			<Navbar active={"support"} />
			<main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-20 py-6 xl:py-8 gap-[30px] px-4 pb-4">
				<Sidebar />
				<div className="contenido-support col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shadow-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40">
					<h1 className="text-2xl font-bold">The Shadowmere Official Tee</h1>
					{/* <!-- Aqui va el contenido del About --> */}
					<p>
						We are releasing the Shadowmere official tee made by{" "}
						<span
							className=" font-bold hover:text-[#579eff] cursor-pointer"
							onClick={() => {
								location.href = "https://twitter.com/swordfest";
							}}>
							Swordfest{" "}
						</span>{" "}
						for those who love the project and wants to support us by buying it
					</p>
					<div className="relative flex flex-col justify-center lg:flex-row gap-4 w-full h-auto">
						<img
							src="https://vangogh.teespring.com/v3/image/DFqA9cbp7_Wq95i0JwY5ul66ENI/800/800.jpg"
							alt=""
							srcset=""
							className="w-fit lg:w-96 h-auto rounded-lg "
						/>
						<img
							src="https://vangogh.teespring.com/v3/image/r25YJ0ROGMCOU2lfd8vsVlXleP8/800/800.jpg"
							alt=""
							srcset=""
							className="w-fit lg:w-96 h-auto rounded-lg object-scale-down"
						/>
					</div>
					<div className="w-full h-auto flex items-center justify-center">
						<button
							className="button-fork w-full h-12 lg:w-fit flex items-center justify-center px-16 rounded-md bg-[#303030] hover:bg-[#444444] active:bg-[#303030] dark:bg-[#cfcfcf] dark:hover:bg-[#bfbfbf] dark:active:bg-white dark:transition-colors text-white"
							onClick={() => {
								window.open(
									"https://swordfest.creator-spring.com/listing/shadowmere",
									"_blank"
								)?.focus;
							}}>
							<span className="dark:text-[#303030] font-medium">
								Get the tee!
							</span>
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
