import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from './components/content'
import Navbar from './components/navbar'
import React, { useState, useEffect } from 'react'
// import { watch } from 'fs'



export default function Home() {
  const [darkMode, setDarkMode] = useState('');

  const handleClick = (isDarkMode) => {
    if (isDarkMode) {
      setDarkMode('dark')
    }
    else setDarkMode('light')
  }

  useEffect(() => {
    document.querySelector("html")?.classList.add(darkMode)
  })

  return (
    <React.Fragment>
      <Navbar handleClick={handleClick} />
      <Content />
    </React.Fragment>
  )
}
