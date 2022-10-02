import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import PortfolioEntry from '../components/PortfolioEntry';
import { typeWrite } from '../utils';
import {URL} from '../globals.js';


export default function Home() {
	const [texts, setTexts] = useState({});
	console.log("URL IS: ", URL);
	useEffect(() => {
		const textsFinished = [
			'Nelson Cortes',
			'Software Engineer',
			'Experience',
			'Projects',
			'About Me',
			' | ',
			'Contact',
		];
		typeWrite(textsFinished, setTexts);
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.pageHeader}>
				<div className={styles.headerLeft}>
					<h1>{texts[0]}</h1>
					<h2>{texts[1]}</h2>
				</div>
				<div className={styles.headerRight}>
					<a href="#experienceSection">{texts[2]}</a>
					<a href="#portfolioSection">{texts[3]}</a>
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
						title="Blockchain.com"
						subtitle="Software Engineer Intern"
					></PortfolioEntry>
					<PortfolioEntry
						title="Freelancing"
						subtitle="Web Designer/Developer"
					></PortfolioEntry>
				</section>
				<section className={styles.portfolioSection} id="projectsSection">
					<h2>Projects</h2>
					<PortfolioEntry
						graphic={`${URL}/models/ramen/scene.glb`}
						graphicScale={25}
						title="market-ingestion-service"
						description="NodeJS App that ingested and standardized cryptocurrency market data"
					></PortfolioEntry>
				</section>

				<section
					className={styles.portfolioSection}
					id="aboutSection"
				></section>
			</div>
		</div>
	);
}
