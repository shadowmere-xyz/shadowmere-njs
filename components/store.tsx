import useSWR from "swr";
import { getProxAPI } from "./functions";

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

export const portPaginationState = atom({
    key: 'portPaginationState',
    default: '',
})

export const countryPaginationState = atom({
    key: 'countryPaginationState',
    default: ''
})

export const countrySelectState = atom({
    key: 'countrySelectState',
    default: 'UN',
})

export const portSelectState = atom({
    key: 'portSelectState',
    default: 'Any',
})

export const proxiesCount = atom({
    key: 'proxiesState',
    default: 0,
})