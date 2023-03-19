import useSWR from "swr";
import { Proxies } from "./data";

const { atom, selector } = require("recoil")

export const darkModeState = atom({
    key: 'darkModeState',
    default: false,
})

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

// export const proxiesObj = selector({
//     key: 'proxiesObj',
//     get: async ({ get }: any) => {
//         const response: Proxies = await (await fetch('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true')).json()
//         if (!response) {
//             return console.error();
//         }
//         return response
//     },
// })

export const proxyId = atom({
    key: 'proxyId',
    default: null,
})

export const activeTab = atom({
    key: 'activeTab',
    default: 'home',
})

export const proxiesObj = atom({
    key: 'proxiesObj',
    default: null,
})

export const loaderPage = atom({
    key: 'loaderPage',
    default: false,
})

export const viewDataLayout = atom({
    key: 'viewDataLayout',
    default: 'details'
})