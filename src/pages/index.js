import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import PortfolioEntry from "../components/PortfolioEntry";
import { typeWrite } from "../utils";
import { URL } from "../globals.js";
import Head from "next/head";

export default function Home() {
  const [texts, setTexts] = useState({});
  useEffect(() => {
    const textsFinished = [
      "Nelson Cortes",
      "Software Engineer",
      "Experience",
      "Projects",
      "About Me",
      " | ",
      "Contact",
    ];
    setTexts([]);
    typeWrite(textsFinished, setTexts);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nelson Cortes - Software Engineer</title>
      </Head>
      <div className={styles.content}>
        <section className={styles.pageHeader}>
          <div className={styles.headerLeft}>
            <h1>{texts[0]}</h1>
            <h2>{texts[1]}</h2>
          </div>
          <div className={styles.headerRight}>
            <a href="#experienceSection">{texts[2]}</a>
            <a href="#projectsSection">{texts[3]}</a>
            <a href="#aboutSection">{texts[4]}</a>
            <text>{texts[5]}</text>
            <Link href="/contact">
              <a>{texts[6]}</a>
            </Link>
          </div>
        </section>
        <div className={styles.portfolio}>
          <section className={styles.portfolioSection} id="experienceSection">
            <h2>Experience</h2>
            <PortfolioEntry
              graphic={`${URL}/models/blockchainLogo/scene.glb`}
              graphicScale={1.75}
              yOffset={2}
              title="Blockchain.com"
              subtitle="Software Engineer Intern"
              description="Blockchain.com is a cryptocurrency financial services company. I primarily worked on a market ingestion service which would replace reliance on a third-party API."
              stack="NextJs, TypeScript, MongoDB, PostGres, ReactJS, ExpressJS, Fastify"
            ></PortfolioEntry>
            <PortfolioEntry
              graphic={`${URL}/models/computer/scene.glb`}
              graphicScale={0.175}
              title="Freelancing"
              subtitle="Web Designer/Developer"
              description="I do freelance work on and off, making cross-browser, dynamic websites and webapps for clients and myself."
              stack="HTML, CSS, JavaScript, Autodesk Maya, Adobe Photoshop, Adobe Illustrator"
            ></PortfolioEntry>
          </section>
          <section className={styles.portfolioSection} id="projectsSection">
            <h2>Projects</h2>
            <PortfolioEntry
              graphic={`${URL}/models/ramen/scene.glb`}
              graphicScale={60}
              yOffset={2}
              title="CoinSoup.io"
              stack="NextJs, TypeScript, MongoDB, ExpressJS"
              description="Cryptocurrency Webapp | More information coming soon!"
            ></PortfolioEntry>
          </section>
        </div>
        <div className={styles.aboutMe} id="aboutSection">
          <h2>About Me</h2>
          <text>
            University of Miami graduate with a Bachelor’s degree in Computer
            Engineering. Over 1 year of professional experience developing
            websites and web applications, and 2 years of academic experience
            implementing algorithms and data structures in low-level languages
            such as C and C++. I’m a knowledgeable, inventive, and fast-paced
            engineer eager to apply my skills and build innovative solutions.
            Fluent in English and Spanish.
          </text>
        </div>
      </div>
    </div>
  );
}
