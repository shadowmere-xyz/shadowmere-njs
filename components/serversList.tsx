import useSWR from 'swr'
import React, { useState, useEffect } from 'react';
import { getFlagEmoji, getPercentage } from './functions';
import Home from '../pages/index';
import Server from './server';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { pageCounterState, portPaginationState, countryPaginationState, proxiesCount } from './store';
import ServerSkeleton from './serverSkeleton';

export default function ServersList() {
    const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
    const [portPagination, setPortPagination] = useRecoilState(portPaginationState);
    const [countryPagination, setCountryPagination] = useRecoilState(countryPaginationState);
    const [count, setCount] = useRecoilState(proxiesCount)
    const [skeleton, setSkeleton] = useState(Array(10).fill(0).map(()=> <ServerSkeleton/>))

    const fetcher = (...args: [any,any]) => fetch(...args).then((res) => res.json())

    const { data, error } = useSWR('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&location_country_code=' + countryPagination + '&port=' + portPagination + '&page=' + pageCounter.toString(), fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return (

    <div id="cuerpo" className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">

            <p className="dark:text-white"><span className="font-bold dark:text-white">Disclaimer: </span>This website is only a list of tunnels collected all around internet. We do <span className="font-bold ">NOT</span> provide or maintain any of these tunnels. <span className="bg-red-600 text-white">Use them at your own risk.</span></p>
            
            {skeleton}

        </div>
    
    )
    
    // if(data) {
    //     setProxiesObj(data)
    //     console.log(proxiesObj)
    // }
    
    console.log(data.count)

    return (
        // <div>{data.count}</div>
        
        <div id="cuerpo" className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">

            <p className="dark:text-white"><span className="font-bold dark:text-white">Disclaimer: </span>This website is only a list of tunnels collected all around internet. We do <span className="font-bold ">NOT</span> provide or maintain any of these tunnels. <span className="bg-red-600 text-white">Use them at your own risk.</span></p>
            
            {
                data.results.map((d: any, i: number) => (
                    <Server key={d.id} proxy={d} />
                ))
            }

        </div>
    


    )
}