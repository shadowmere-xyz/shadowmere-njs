import useSWR from "swr";

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

export const qrScreen = atom({
    key: 'qrScreen',
    default: false,
})

export const proxiesObj = selector({
    key: 'proxiesObj',
    get:async ({get}:any) => {
        const response = await (await fetch('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true')).json()
        if (response.error){
            throw response.error
        }
        return response
    },
})

// export const proxiesObj = selector({
//     key: 'proxiesObj',
//     get: async ({get}:any) => {
//         const fetcher = (...args: [any,any]) => fetch(...args).then((res) => res.json())
//         const { data } = useSWR('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true', fetcher)
//         return data
//     },
// })