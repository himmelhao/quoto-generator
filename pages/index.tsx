import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GradientBackgroundCon } from '@/components/QuoteGenerator/GeneratorElements'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote generator</title>
        <meta name="description" content="A fun project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Background */}
      <GradientBackgroundCon></GradientBackgroundCon>
    </>
  )
}
