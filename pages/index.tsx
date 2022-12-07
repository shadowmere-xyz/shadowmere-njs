import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Content from '../components/content'
import Navbar from '../components/navbar'
import Servers from './servers'
import About from './about'
import ModalQR from '../components/modalQR'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Sidebar from '../components/sidebar'
// import { useDarkMode } from 'usehooks-ts'


// import { watch } from 'fs'



export default function Home() {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [qrCode, setQRCode] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // document.querySelector("html")?.classList.add(darkMode)
    document.querySelector('body')?.classList.add('overflow-y-scroll', 'bg-[#F8F8F8]', 'dark:bg-[#141414]', 'text-[#212121]')
    setHasMounted(true)
    console.log(isDarkMode)
    // setIsDarkMode(JSON.parse(localStorage.getItem('isDarkMode')))
  }, [])

  const handleDark = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) setTheme('light')
    else setTheme('dark')
    window.localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Shadowmere - Home</title>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any"/>
      </Head>
      
      <Navbar active={'home'}/>
      <main className="wrapper container mx-auto w-full h-full xl:h-full grid grid-cols-12 auto-rows-auto mb-16 2xl:mb-0 mt-20 py-6 xl:py-8 gap-[30px] px-4 pb-4">
        <Sidebar/>
        <Servers/>
      </main>
      <ModalQR qrActive={qrCode} />
    </>
  )
}
