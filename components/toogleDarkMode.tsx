import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'


export default function ToggleDarkMode() {
    const { theme, setTheme } = useTheme()
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleDark = () => {
        setIsDarkMode(!isDarkMode)
        if (isDarkMode) setTheme('light')
        else setTheme('dark')
        window.localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    }

    return (
        <button title='Theme Toggler' onClick={() => {

            handleDark();
            //   console.log(isDarkMode)

        }} id="toggle" className="custom-toggle w-auto h-auto cursor-pointer">
            <div className={"toggle-dark dark:hidden w-auto h-auto rounded-md flex items-center justify-center cursor-pointer "}>
                <svg className="w-6 h-6 hover:rotate-[-15deg] transition-transform fill-[#303030] cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2756 24C16.977 24 20.3575 22.316 22.5971 19.5566C22.9284 19.1484 22.5671 18.5521 22.0551 18.6496C16.2331 19.7584 10.8866 15.2945 10.8866 9.41738C10.8866 6.03197 12.6988 2.91886 15.6443 1.24266C16.0983 0.984281 15.9841 0.295922 15.4682 0.200625C14.745 0.0672624 14.0111 0.000109516 13.2756 0C6.65178 0 1.27563 5.3677 1.27563 12C1.27563 18.6239 6.64334 24 13.2756 24Z" />
                </svg>
            </div>
            <div className={"toggle-light hidden dark:flex w-auto h-auto rounded-md flex items-center justify-center cursor-pointer "}>
                <svg className="w-6 h-6 hover:rotate-[-30deg] transition-transform fill-[#303030] cursor-pointer" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_524_2311)">
                        <path d="M12.75 7.5C10.2703 7.5 8.25 9.52031 8.25 12C8.25 14.4797 10.2703 16.5 12.75 16.5C15.2297 16.5 17.25 14.4797 17.25 12C17.25 9.52031 15.2297 7.5 12.75 7.5ZM24.3 11.2734L19.8609 9.05625L21.4313 4.35C21.6422 3.7125 21.0375 3.10781 20.4047 3.32344L15.6984 4.89375L13.4766 0.45C13.1766 -0.15 12.3234 -0.15 12.0234 0.45L9.80625 4.88906L5.09531 3.31875C4.45781 3.10781 3.85313 3.7125 4.06875 4.34531L5.63906 9.05156L1.2 11.2734C0.6 11.5734 0.6 12.4266 1.2 12.7266L5.63906 14.9437L4.06875 19.6547C3.85781 20.2922 4.4625 20.8969 5.09531 20.6813L9.80156 19.1109L12.0188 23.55C12.3188 24.15 13.1719 24.15 13.4719 23.55L15.6891 19.1109L20.3953 20.6813C21.0328 20.8922 21.6375 20.2875 21.4219 19.6547L19.8516 14.9484L24.2906 12.7313C24.9 12.4266 24.9 11.5734 24.3 11.2734ZM16.9922 16.2422C14.6531 18.5812 10.8469 18.5812 8.50781 16.2422C6.16875 13.9031 6.16875 10.0969 8.50781 7.75781C10.8469 5.41875 14.6531 5.41875 16.9922 7.75781C19.3313 10.0969 19.3313 13.9031 16.9922 16.2422Z" fill="#CFCFCF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_524_2311">
                            <rect width="24" height="24" fill="white" transform="translate(0.75)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </button>
    )
}