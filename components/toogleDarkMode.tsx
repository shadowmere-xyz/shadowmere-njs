import { useTheme } from 'next-themes'
import React, { useState, useEffect, useRef } from 'react'
import { useOutsideClick } from '../libs/functions'
import Icon from './iconMode'


export default function ToggleDarkMode() {
    const { theme, setTheme } = useTheme()
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    const handleClick = (theme: string) => {
        setTheme(theme)
    }

    const handleClickOutside = () => {
        setOpen(false)
    }
    const ref = useOutsideClick(handleClickOutside)

    return (
        <div>
            <div title='Theme Toggler' ref={ref} onClick={() => handleMenu()} id="toggle" className="custom-toggle overflow-visible relative w-auto h-auto cursor-pointer">
                <div className={("toggle-dark dark:hover:bg-[#1b1b1b] dark:active:bg-[#1b1b1b] w-12 h-12 hover:bg-[#EBEBEB] active:bg-[#D7D7D7] transition-colors rounded-md flex items-center justify-center cursor-pointer ") + (open ? 'bg-[#EBEBEB] dark:bg-[#1b1b1b]' : '')}>
                    <Icon name={theme?.toString()} rotate={false} />
                </div>
                <div  className={('absolute w-36 h-auto top-[72px] right-0 xl:left-0 bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-md shadow-lg flex flex-col mx-auto p-2 gap-2 border border-[#e0e0e0] dark:border-[#303030] ') + (open ? '' : 'hidden')}>
                    <button onClick={() => handleClick('light')} className={('item-theme w-32 h-10 rounded-md px-2 flex items-center justify-start gap-2 dark:hover:bg-[#1b1b1b] dark:active:bg-[#1b1b1b] hover:bg-[#EBEBEB] active:bg-[#D7D7D7] transition-colors ') + (theme === 'light' && 'bg-[#EBEBEB] dark:bg-[#1b1b1b]')}>
                        <Icon name={'light'} rotate={false}/>
                        <span className='font-medium'>Light</span>
                    </button>
                    <button onClick={() => handleClick('dark')} className={('item-theme w-32 h-10 rounded-md px-2 flex items-center justify-start gap-2 dark:hover:bg-[#1b1b1b] dark:active:bg-[#1b1b1b] hover:bg-[#EBEBEB] active:bg-[#D7D7D7] transition-colors ') + (theme === 'dark' && 'bg-[#EBEBEB] dark:bg-[#1b1b1b]')}>
                        <Icon name={'dark'} rotate={false}/>
                        <span className='font-medium'>Dark</span>
                    </button>
                    <button onClick={() => handleClick('system')} className={('item-theme w-32 h-10 rounded-md px-2 flex items-center justify-start gap-2 dark:hover:bg-[#1b1b1b] dark:active:bg-[#1b1b1b] hover:bg-[#EBEBEB] active:bg-[#D7D7D7] transition-colors ') + (theme === 'system' && 'bg-[#EBEBEB] dark:bg-[#1b1b1b]')}>
                        <Icon name={'system'} rotate={false}/>
                        <span className='font-medium'>System</span>
                    </button>
                </div>
            </div>
        </div>
    )
}