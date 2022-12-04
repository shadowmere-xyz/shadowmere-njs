import useSWR from 'swr'
import React, { useState, useEffect } from 'react';
import { localArray, getFlagEmoji, getPercentage } from './functions';
import Home from '../index';
import Server from './server';

export default function ServersList() {

    const [pageCounter, setPageCounter] = useState(1);
    const [portPagination, setPortPagination] = useState('');
    const [countryPagination, setCountryPagination] = useState('');

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&location_country_code=' + countryPagination + '&port=' + portPagination + '&page=' + pageCounter.toString(), fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>



    return (
        // <div>{data.count}</div>

        <div id="cuerpo" className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">

            <p className="dark:text-white"><span className="font-bold dark:text-white">Disclaimer: </span>This website is only a list of tunnels collected all around internet. We do <span className="font-bold ">NOT</span> provide or maintain any of these tunnels. <span className="bg-red-600 text-white">Use them at your own risk.</span></p>

            {
                data.results.map((d, i) => (
                    <Server key={d.id} proxy={d} />
                ))
            }

        </div>
    


    )
}