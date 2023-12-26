import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";
// import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";
import {
  BackgroundImage1,
  BackgroundImage2,
  FootCon,
  FooterLink,
  GradientBackgroundCon,
} from "@/components/QuoteGenerator/GeneratorElements";
import Clouds1 from "../assets/cloud-and-thunder.png";
import Clouds2 from "../assets/cloudy-weather.png";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Quote generator</title>
        <meta name="description" content="A fun project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Background */}
      <GradientBackgroundCon>
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="cloudbackground1"
        ></BackgroundImage1>

        <BackgroundImage2
          src={Clouds2}
          height="300"
          alt="cloudbackground1"
        ></BackgroundImage2>

        <FootCon>
          <>
          Quotes Generated: {numberOfQuotes}
          <br />
          Developed by: <FooterLink href="https://www.linkedin.com/in/haohu1108/" target="_blank" rel="noopener noreferrer">
            @Hao Hu </FooterLink>
          </>
        </FootCon>

      </GradientBackgroundCon>
    </>
  );
}
