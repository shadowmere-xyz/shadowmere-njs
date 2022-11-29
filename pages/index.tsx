import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from './components/content'
import Navbar from './components/navbar'
import React from 'react'


export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Content/>
    </React.Fragment>
  )
}
