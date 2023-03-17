import useSWR from "swr"
import React, { useEffect, useState } from "react"
import { getFlagEmoji, getPercentage } from '../libs/functions';
import { countryFilterState, pageCounterState } from "../libs/store";
import { useRecoilState } from "recoil";

export default function Countries(props: any) {
    const [country, setCountry] = useRecoilState(countryFilterState)
    const [pageFilter, setPageFilter] = useRecoilState(pageCounterState)

    const fetcher = (...args: [any,any]) => fetch(...args).then((res) => res.json())

    const { data: countries, error } = useSWR('https://shadowmere.akiel.dev/api/country-codes', fetcher)

    if (error) return <>Error</>
    
    if (!countries) return (
        <div className="countries-filter flex flex-col gap-2 xl:gap-4">
                <div className="w-full h-6 flex items-center font-semibold gap-2">
                    <svg className="fill-[#303030] dark:fill-[#cfcfcf]" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.58325 10.5C5.58637 11.4236 5.70204 12.3433 5.9277 13.2389H9.5277V7.97223H5.8777C5.68565 8.80122 5.58689 9.64907 5.58325 10.5V10.5Z"/>
                        <path d="M10.4722 7.97223V13.2389H14.0722C14.3072 12.3445 14.4322 11.4247 14.4444 10.5C14.4426 9.64928 14.3457 8.80143 14.1555 7.97223H10.4722Z"/>
                        <path d="M9.99998 1.61111C8.24192 1.61111 6.52335 2.13244 5.06157 3.10916C3.5998 4.08589 2.46049 5.47414 1.78771 7.09837C1.11494 8.72261 0.938906 10.5099 1.28189 12.2341C1.62487 13.9584 2.47145 15.5423 3.71458 16.7854C4.95772 18.0285 6.54157 18.8751 8.26584 19.2181C9.99012 19.5611 11.7774 19.385 13.4016 18.7123C15.0258 18.0395 16.4141 16.9002 17.3908 15.4384C18.3675 13.9766 18.8889 12.2581 18.8889 10.5C18.8889 8.14252 17.9524 5.8816 16.2854 4.21461C14.6184 2.54762 12.3575 1.61111 9.99998 1.61111V1.61111ZM16.7889 14.2278H14.7778C14.3975 15.4182 13.8353 16.5426 13.1111 17.5611C12.5767 17.794 12.0175 17.9655 11.4444 18.0722C12.4708 16.957 13.2607 15.6454 13.7666 14.2167H10.4778V18.1889H9.53887V14.2278H6.23331C6.73854 15.6585 7.52852 16.972 8.55553 18.0889C7.99423 17.9833 7.44642 17.8156 6.9222 17.5889C6.19544 16.5619 5.63313 15.4279 5.25553 14.2278H3.21109C3.03361 13.904 2.87951 13.568 2.74998 13.2222H4.9722C4.76397 12.3296 4.6559 11.4166 4.64998 10.5C4.65028 9.65041 4.73966 8.80318 4.91664 7.97223H2.64442C2.76125 7.6275 2.90235 7.29147 3.06664 6.96667H5.18331C5.58047 5.64392 6.1964 4.39703 7.00553 3.27778C7.51863 3.06518 8.05322 2.90871 8.59998 2.81111C7.49479 3.99725 6.66071 5.4095 6.15553 6.95H9.53887V2.72223H10.4778V6.96667H13.8611C13.3568 5.42863 12.5247 4.01839 11.4222 2.83334C11.9681 2.92389 12.5026 3.0729 13.0166 3.27778C13.8211 4.38895 14.435 5.62621 14.8333 6.93889H16.9278C17.092 7.2637 17.2331 7.59972 17.35 7.94445H15.0944C15.2752 8.78429 15.3665 9.64093 15.3666 10.5C15.3638 11.4219 15.2576 12.3406 15.05 13.2389H17.2722C17.1347 13.5796 16.9732 13.91 16.7889 14.2278Z"/>
                        </svg> 
                        Countries
                </div>
                
                <select title="Countries" name="countries" id="component-placeholder" className="form-select font-twemoji rounded-md border-gray-300 mx-2 text-[#303030] dark:text-[#cfcfcf] dark:border-0 dark:bg-[#303030] outline-none cursor-pointer">
                    <option value="UN" className="font-twemoji" >{getFlagEmoji('UN')} Worldwide</option>
                </select>
        </div>
    )

    const handleChange = (event: any) => {
        if (event.target.value === 'UN') {
            setCountry('')
        } else {
            setCountry(event.target.value)
            setPageFilter(1)
        }
    }

    // useEffect(() => {

    // }, [])

    return (
        <div className="countries-filter flex flex-col gap-2 xl:gap-4">
                <label htmlFor="countries" className="w-full h-6 flex items-center font-semibold gap-2">
                    <svg className="fill-[#303030] dark:fill-[#cfcfcf]" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.58325 10.5C5.58637 11.4236 5.70204 12.3433 5.9277 13.2389H9.5277V7.97223H5.8777C5.68565 8.80122 5.58689 9.64907 5.58325 10.5V10.5Z"/>
                        <path d="M10.4722 7.97223V13.2389H14.0722C14.3072 12.3445 14.4322 11.4247 14.4444 10.5C14.4426 9.64928 14.3457 8.80143 14.1555 7.97223H10.4722Z"/>
                        <path d="M9.99998 1.61111C8.24192 1.61111 6.52335 2.13244 5.06157 3.10916C3.5998 4.08589 2.46049 5.47414 1.78771 7.09837C1.11494 8.72261 0.938906 10.5099 1.28189 12.2341C1.62487 13.9584 2.47145 15.5423 3.71458 16.7854C4.95772 18.0285 6.54157 18.8751 8.26584 19.2181C9.99012 19.5611 11.7774 19.385 13.4016 18.7123C15.0258 18.0395 16.4141 16.9002 17.3908 15.4384C18.3675 13.9766 18.8889 12.2581 18.8889 10.5C18.8889 8.14252 17.9524 5.8816 16.2854 4.21461C14.6184 2.54762 12.3575 1.61111 9.99998 1.61111V1.61111ZM16.7889 14.2278H14.7778C14.3975 15.4182 13.8353 16.5426 13.1111 17.5611C12.5767 17.794 12.0175 17.9655 11.4444 18.0722C12.4708 16.957 13.2607 15.6454 13.7666 14.2167H10.4778V18.1889H9.53887V14.2278H6.23331C6.73854 15.6585 7.52852 16.972 8.55553 18.0889C7.99423 17.9833 7.44642 17.8156 6.9222 17.5889C6.19544 16.5619 5.63313 15.4279 5.25553 14.2278H3.21109C3.03361 13.904 2.87951 13.568 2.74998 13.2222H4.9722C4.76397 12.3296 4.6559 11.4166 4.64998 10.5C4.65028 9.65041 4.73966 8.80318 4.91664 7.97223H2.64442C2.76125 7.6275 2.90235 7.29147 3.06664 6.96667H5.18331C5.58047 5.64392 6.1964 4.39703 7.00553 3.27778C7.51863 3.06518 8.05322 2.90871 8.59998 2.81111C7.49479 3.99725 6.66071 5.4095 6.15553 6.95H9.53887V2.72223H10.4778V6.96667H13.8611C13.3568 5.42863 12.5247 4.01839 11.4222 2.83334C11.9681 2.92389 12.5026 3.0729 13.0166 3.27778C13.8211 4.38895 14.435 5.62621 14.8333 6.93889H16.9278C17.092 7.2637 17.2331 7.59972 17.35 7.94445H15.0944C15.2752 8.78429 15.3665 9.64093 15.3666 10.5C15.3638 11.4219 15.2576 12.3406 15.05 13.2389H17.2722C17.1347 13.5796 16.9732 13.91 16.7889 14.2278Z"/>
                    </svg>
                    Countries
                </label>
                
                <select title="Countries" name="countries" id="countries-selection" value={props.valueCountry} onChange={handleChange} className="form-select overflow-scroll font-twemoji rounded-md border-gray-300 mx-2 text-[#303030] dark:text-[#cfcfcf] dark:border-0 dark:bg-[#303030] outline-none cursor-pointer">
                    <option value='UN' className="font-twemoji" >{getFlagEmoji('UN')} Worldwide</option>
                    {
                        countries.map((country: any, i: number) => (
                            <option key={i} value={country.code} className="font-twemoji" >{getFlagEmoji(country.code)} {country.name}</option>
                        ))
                    }
                </select>
        </div>
    )
}