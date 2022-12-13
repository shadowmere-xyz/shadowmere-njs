import useSWR from "swr";
import { Proxies } from "./data";

const {atom, selector} = require("recoil")

export const darkModeState = atom({
    key: 'darkModeState',
    default: false,
})

// export const darkState = selector({
//     key: 'darkState',
//     get: ({get}:any) => {
//         const dark = get(darkModeState)
//         return !dark
//     }),
// })

export const pageCounterState = atom({
    key: 'pageCounterState',
    default: 1,
});

export const portFilterState = atom({
    key: 'portFilterState',
    default: '',
})

export const countryFilterState = atom({
    key: 'countryFilterState',
    default: ''
})

export const proxiesCount = atom({
    key: 'proxiesCount',
    default: 0,
})

export const qrScreen = atom({
    key: 'qrScreen',
    default: false,
})

export const proxiesObj = selector({
    key: 'proxiesObj',
    get: async ({get}:any) => {
        const response: Proxies = await (await fetch('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true')).json()
        if (!response){
            return console.error();
        }
        return response
    },
})

export const proxyId = atom({
    key: 'proxyId',
    default: 0,
})

// export const proxiesObj2 = selector ({
//     key: 'proxiesObj2',
//     get: () => {
//         const fetcher = (...args: [any,any]) => fetch(...args).then((res) => res.json())
//         const { data, error } = useSWR('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&location_country_code=' + '' + '&port=' + '' + '&page=' + '1', fetcher)
//         if (error) return console.error()
//         if (!data) return 'loading'
//         return data
//     }
// })