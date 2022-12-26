import useSWR from 'swr'
import React, { useState, useEffect } from 'react';
import { getFlagEmoji, getPercentage } from './functions';
import Home from '../pages/index';
import Server from './server';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { pageCounterState, portFilterState, countryFilterState, proxiesCount, proxiesObj } from './store';
import ServerSkeleton from './serverSkeleton';
import { Proxies } from './data';

export default function ServersList() {
    const [pageCounter, setPageCounter] = useRecoilState(pageCounterState);
    const [portFilter, setPortFilter] = useRecoilState(portFilterState);
    const [countryFilter, setCountryFilter] = useRecoilState(countryFilterState);
    // const proxies = useRecoilValue(proxiesObj)
    const [skeleton, setSkeleton] = useState(Array(10))
    const [proxyCounter, setProxyCounter] = useRecoilState(proxiesCount)
    // const [data, setData] = useRecoilState<Proxies>(proxiesObj)
    const [noResults, setNoResults] = useState('')


    const fetcher = (...args: [any,any]) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&location_country_code=' + countryFilter + '&port=' + portFilter + '&page=' + pageCounter?.toString(), fetcher)

    // useEffect(()=>{
    //     if (data.results?.lenght == 0)
    //         setNoResults('There is no results')
    // },[])

    if (error) return (
        <div id="cuerpo" className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-screen flex flex-col items-center justify-center gap-4">
            <span className=' dark:text-[#cfcfcf]' >Error to load...</span>
        </div>
    )

    if (!data) return (
    <div id="cuerpo" className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">
            <p className="dark:text-white"><span className="font-bold dark:text-white">Disclaimer: </span>This website is only a list of tunnels collected all around internet. We do <span className="font-bold ">NOT</span> provide or maintain any of these tunnels. <span className="bg-red-600 text-white">Use them at your own risk.</span></p>
            {
                skeleton.fill(0).map((skel: any, i: any) => <ServerSkeleton key={i} />)
            }
        </div>
    )    

        
    


    return (
        <div id="cuerpo" className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">
            <p className="dark:text-white"><span className="font-bold dark:text-white">Disclaimer: </span>This website is only a list of tunnels collected all around internet. We do <span className="font-bold ">NOT</span> provide or maintain any of these tunnels. <span className="bg-red-600 text-white">Use them at your own risk.</span></p>
            {/* <ServerSkeleton/> */}
            {/* {setProxyCounter(data.count)} */}
            {
                data.results.map((d: any) => (
                    <Server key={d.id} proxy={d} />
                ))
                
            }
            
        </div>

    )
}