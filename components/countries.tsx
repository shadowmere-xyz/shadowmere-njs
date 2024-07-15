import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { getFlagEmoji, getPercentage } from "../libs/functions";
import { countryFilterState, pageCounterState } from "../libs/store";
import { useRecoilState } from "recoil";
import { apiBaseUrl } from "../vars/variables";
import { IconWorldPin } from "@tabler/icons-react";

export default function Countries(props: any) {
  const [country, setCountry] = useRecoilState(countryFilterState);
  const [pageFilter, setPageFilter] = useRecoilState(pageCounterState);

	const fetcher = (...args: [any, any]) =>
		fetch(...args).then((res) => res.json());

	const { data: countries, error } = useSWR(
		`${apiBaseUrl}/country-codes`,
		fetcher
	);
  useEffect(() => {
    window.addEventListener("keydown", function(event) {
			if (event.key === "u") {
				setCountry("US");
				setPageFilter(1);
				// console.log(event.key);
			}
		})
  },[setCountry, setPageFilter])

  const handleChange = (event: any) => {
    if (event.target.value === "UN") {
      setCountry("");
    } else {
      setCountry(event.target.value);
      setPageFilter(1);
    }
  };

  if (error) return <>Error</>;

  //   if (!countries)
  //     return (
  //       <div className="countries-filter flex flex-col gap-2 xl:gap-4">
  //         <div className="w-full h-6 flex items-center font-semibold gap-2">
  //           <IconWorldPin />
  //           Countries
  //         </div>

  //         <select
  //           title="Countries"
  //           name="countries"
  //           id="component-placeholder"
  //           className="form-select font-twemoji rounded-md border-gray-300 mx-2 text-[#303030] dark:text-[#cfcfcf]  dark:hover:bg-[#3a3a3a] dark:bg-[#303030] outline-none cursor-pointer border dark:border-[#3a3a3a] transition-all"
  //         >
  //           <option value="UN" className="font-twemoji">
  //             {getFlagEmoji("UN")} Worldwide
  //           </option>
  //         </select>
  //       </div>
  //     );

  return (
    <div className="countries-filter flex flex-col gap-2 xl:gap-4">
      <label
        htmlFor="countries"
        className="w-full h-6 flex items-center font-semibold gap-2"
      >
        <IconWorldPin stroke={1.5} />
        Countries
      </label>

      <select
        title="Countries"
        name="countries"
        id="countries-selection"
        value={props.valueCountry}
        onChange={handleChange}
        className="form-select font-twemoji rounded-md border-gray-300 mx-2 text-[#303030] hover:border-[#b1b1b1] dark:text-[#cfcfcf]  dark:hover:bg-[#3a3a3a] dark:bg-[#303030] outline-none cursor-pointer border dark:border-[#3a3a3a] transition-all"
      >
        <option value="UN" className="font-twemoji">
          {getFlagEmoji("UN")} Worldwide
        </option>
        {countries?.map((country: any, i: number) => (
          <option key={i} value={country.code} className="font-twemoji">
            {getFlagEmoji(country.code)} {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
