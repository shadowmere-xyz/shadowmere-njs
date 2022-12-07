const {atom, selector} = require("recoil")

export const darkModeState = atom({
    key: 'darkModeState',
    default: false,
})

export const darkState = selector({
    key: 'darkState',
    get: ({get}:any) => {
        const dark = get(darkModeState)
        return !dark
    }),
})