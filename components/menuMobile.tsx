import Link from "next/link";
import { useRecoilState } from "recoil";
import { activeTab } from "../libs/store";

export default function MenuMobile(props: any) {
  const [tabActive, setTabActive] = useRecoilState(activeTab);

  return (
    <div
      className={
        "modal-menu-mobile w-full h-auto bg-black/50 z-10 fixed top-0 pointer-events-auto  " +
        (props.open ? "" : "hidden")
      }
    >
      <div className="menu-mobile absolute w-full h-auto bg-white dark:bg-[#212121] right-0 xl:hidden flex flex-col items-center justify-between transition-transform ease-in-out duration-150 top-20 shadow-lg border-b border-[#e0e0e0] dark:border-[#303030]">
        <div className="w-full h-auto flex flex-col items-center gap-4 py-4 px-4">
          <div className="w-full h-auto flex flex-col items-center justify-between gap-4 py-4 px-4">
            <Link
              href={"/"}
              onClick={() => props.handleOpen()}
              className="text-base dark:text-[#cfcfcf] font-medium w-full h-12 flex items-center justify-center px-5 rounded-md bg-[#EBEBEB] hover:bg-[#D7D7D7] dark:bg-[#1B1B1B] dark:hover:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%]"
            >
              Home
            </Link>

            <Link
              href={"/about"}
              onClick={() => props.handleOpen()}
              className="text-base dark:text-[#cfcfcf] font-medium w-full h-12 flex items-center justify-center px-5 rounded-md bg-[#EBEBEB] hover:bg-[#D7D7D7] dark:bg-[#1B1B1B] dark:hover:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%]"
            >
              About
            </Link>

            <Link
              href={"/why-shadowmere"}
              onClick={() => props.handleOpen()}
              className="text-base dark:text-[#cfcfcf] font-medium w-full h-12 flex items-center justify-center px-5 rounded-md bg-[#EBEBEB] hover:bg-[#D7D7D7] dark:bg-[#1B1B1B] dark:hover:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%]"
            >
              Why Shadowmere?
            </Link>

            <Link
              href={"/subscription"}
              onClick={() => props.handleOpen()}
              className="relative dark:text-[#cfcfcf] font-medium group w-full h-12 flex items-center justify-center px-5 rounded-md bg-[#EBEBEB] dark:bg-[#1B1B1B] cursor-pointer transition-colors transition-transform active:scale-[99%]"
            >
              <div className="relative w-auto h-auto px-2 ">
                Servers Subscriptions
              </div>
            </Link>

            <Link
              href={"https://github.com/shadowmere-xyz"}
              target={"_blank"}
              rel="noreferrer"
              title="fork"
              type="button"
              className="button-fork w-full h-12 flex gap-2 items-center justify-center px-5 rounded-md bg-[#303030] hover:bg-[#444444] active:bg-[#303030] dark:hover:bg-[#3a3a3a] dark:active:bg-[#3a3a3a] dark:transition-colors text-white border dark:border-[#3a3a3a] transition-all item-server-vpn after:blur-3xl backdrop-blur-sm overflow-hidden"
            >
              <svg
                className="fill-white "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_509_459)">
                  <path d="M7.77656 18.6281C7.77656 18.7219 7.66875 18.7969 7.53281 18.7969C7.37812 18.8109 7.27031 18.7359 7.27031 18.6281C7.27031 18.5344 7.37813 18.4594 7.51406 18.4594C7.65469 18.4453 7.77656 18.5203 7.77656 18.6281ZM6.31875 18.4172C6.28594 18.5109 6.37969 18.6187 6.52031 18.6469C6.64219 18.6937 6.78281 18.6469 6.81094 18.5531C6.83906 18.4594 6.75 18.3516 6.60938 18.3094C6.4875 18.2766 6.35156 18.3234 6.31875 18.4172ZM8.39062 18.3375C8.25469 18.3703 8.16094 18.4594 8.175 18.5672C8.18906 18.6609 8.31094 18.7219 8.45156 18.6891C8.5875 18.6563 8.68125 18.5672 8.66719 18.4734C8.65312 18.3844 8.52656 18.3234 8.39062 18.3375ZM11.475 0.375C4.97344 0.375 0 5.31094 0 11.8125C0 17.0109 3.27188 21.4594 7.94531 23.025C8.54531 23.1328 8.75625 22.7625 8.75625 22.4578C8.75625 22.1672 8.74219 20.5641 8.74219 19.5797C8.74219 19.5797 5.46094 20.2828 4.77188 18.1828C4.77188 18.1828 4.2375 16.8187 3.46875 16.4672C3.46875 16.4672 2.39531 15.7312 3.54375 15.7453C3.54375 15.7453 4.71094 15.8391 5.35312 16.9547C6.37969 18.7641 8.1 18.2438 8.77031 17.9344C8.87813 17.1844 9.18281 16.6641 9.52031 16.3547C6.9 16.0641 4.25625 15.6844 4.25625 11.175C4.25625 9.88594 4.6125 9.23906 5.3625 8.41406C5.24063 8.10938 4.84219 6.85312 5.48438 5.23125C6.46406 4.92656 8.71875 6.49688 8.71875 6.49688C9.65625 6.23438 10.6641 6.09844 11.6625 6.09844C12.6609 6.09844 13.6688 6.23438 14.6063 6.49688C14.6063 6.49688 16.8609 4.92187 17.8406 5.23125C18.4828 6.85781 18.0844 8.10938 17.9625 8.41406C18.7125 9.24375 19.1719 9.89062 19.1719 11.175C19.1719 15.6984 16.4109 16.0594 13.7906 16.3547C14.2219 16.725 14.5875 17.4281 14.5875 18.5297C14.5875 20.1094 14.5734 22.0641 14.5734 22.4484C14.5734 22.7531 14.7891 23.1234 15.3844 23.0156C20.0719 21.4594 23.25 17.0109 23.25 11.8125C23.25 5.31094 17.9766 0.375 11.475 0.375ZM4.55625 16.5422C4.49531 16.5891 4.50938 16.6969 4.58906 16.7859C4.66406 16.8609 4.77187 16.8938 4.83281 16.8328C4.89375 16.7859 4.87969 16.6781 4.8 16.5891C4.725 16.5141 4.61719 16.4812 4.55625 16.5422ZM4.05 16.1625C4.01719 16.2234 4.06406 16.2984 4.15781 16.3453C4.23281 16.3922 4.32656 16.3781 4.35938 16.3125C4.39219 16.2516 4.34531 16.1766 4.25156 16.1297C4.15781 16.1016 4.08281 16.1156 4.05 16.1625ZM5.56875 17.8312C5.49375 17.8922 5.52187 18.0328 5.62969 18.1219C5.7375 18.2297 5.87344 18.2438 5.93437 18.1688C5.99531 18.1078 5.96719 17.9672 5.87344 17.8781C5.77031 17.7703 5.62969 17.7562 5.56875 17.8312ZM5.03438 17.1422C4.95938 17.1891 4.95938 17.3109 5.03438 17.4188C5.10938 17.5266 5.23594 17.5734 5.29688 17.5266C5.37188 17.4656 5.37188 17.3438 5.29688 17.2359C5.23125 17.1281 5.10938 17.0813 5.03438 17.1422Z" />
                </g>
                <defs>
                  <clipPath id="clip0_509_459">
                    <rect width="23.25" height="24" />
                  </clipPath>
                </defs>
              </svg>
              Fork me on GitHub
            </Link>
          </div>
          <span className="font-twemoji align-baseline text-[#303030] dark:text-[#cfcfcf]">
            Made with ❤️ in Europe 🇪🇺 by Akiel
          </span>
        </div>
      </div>
    </div>
  );
}
