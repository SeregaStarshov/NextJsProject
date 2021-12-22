import Box from '@mui/material/Box'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import backgroundImage from '../public/backgroundImage.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{
        backgroundColor: '#101C2B',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Header />
      </Box>
    </>
  )
}
