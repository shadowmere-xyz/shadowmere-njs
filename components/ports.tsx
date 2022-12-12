import useSWR from "swr"
import React, { useEffect } from "react"
import { portPaginationState, portSelectState } from "./store"
import { useRecoilState } from "recoil"

export default function Ports(){
    const [port, setPort] = useRecoilState(portPaginationState)
    const [portSelect, setPortSelect] = useRecoilState(portSelectState)

    const fetcher = (...args: [any,any]) => fetch(...args).then((res) => res.json())

    const { data: ports, error } = useSWR('https://shadowmere.akiel.dev/api/ports/', fetcher)

    if (error) return <>Error</>

    if (!ports) return (
        <div className="ports-filter flex flex-col gap-2 xl:gap-4">
                <label htmlFor="ports" className="w-full h-6 flex items-center font-semibold gap-2">
                    <svg className="fill-[#303030] dark:fill-[#cfcfcf]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m22 15-3-4-3 4h1.906c-.436 2.469-2.438 4.471-4.906 4.906V13h2v-2h-2V9.336c1.543-.459 2.714-1.923 2.714-3.621C15.714 3.666 14.048 2 12 2S8.286 3.666 8.286 5.715c0 1.698 1.171 3.162 2.714 3.621V11H9v2h2v6.906C8.531 19.471 6.529 17.469 6.094 15H8l-3-4-3 4h2.073c.511 3.885 3.929 7 7.927 7s7.416-3.115 7.927-7H22zM10.286 5.715C10.286 4.77 11.055 4 12 4s1.714.77 1.714 1.715c0 .951-.801 1.785-1.714 1.785s-1.714-.834-1.714-1.785z"></path></svg> 
                    Ports
                </label>
                <select title="Ports" name="ports" id="port-selection-skeleton" className="relative puertos form-select rounded-md overflow-scroll border-gray-300 mx-2 text-[#303030] dark:text-[#cfcfcf] dark:border-0 dark:bg-[#303030] outline-none cursor-pointer">
                    <option id="opcion-skeleton"></option>
                </select>
        </div>
    )

    const handleChange = (event: any) => {
        if (event.target.value === 'Any') {
            setPort('')
        } else {
            setPort(event.target.value)
        }
    }

    return (
        <div className="ports-filter flex flex-col gap-2 xl:gap-4">
                <div className="w-full h-6 flex items-center font-semibold gap-2">
                    <svg className="fill-[#303030] dark:fill-[#cfcfcf]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m22 15-3-4-3 4h1.906c-.436 2.469-2.438 4.471-4.906 4.906V13h2v-2h-2V9.336c1.543-.459 2.714-1.923 2.714-3.621C15.714 3.666 14.048 2 12 2S8.286 3.666 8.286 5.715c0 1.698 1.171 3.162 2.714 3.621V11H9v2h2v6.906C8.531 19.471 6.529 17.469 6.094 15H8l-3-4-3 4h2.073c.511 3.885 3.929 7 7.927 7s7.416-3.115 7.927-7H22zM10.286 5.715C10.286 4.77 11.055 4 12 4s1.714.77 1.714 1.715c0 .951-.801 1.785-1.714 1.785s-1.714-.834-1.714-1.785z"></path></svg> 
                    Ports
                </div>
                <select title="Ports" name="ports" id="port-selection" onChange={handleChange} className="relative puertos form-select rounded-md overflow-scroll border-gray-300 mx-2 text-[#303030] dark:text-[#cfcfcf] dark:border-0 dark:bg-[#303030] outline-none cursor-pointer">
                    <option value={portSelect}>Any</option>
                    {
                        ports.map((port: any, i: number) => (
                            <option key={i} id="opcion">{port.port}</option>
                        ))
                    }
                </select>
        </div>
    )
}