import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import PortfolioEntry from '../components/PortfolioEntry';
import { typeWrite } from '../utils';
import {URL} from '../globals.js';


export default function Home() {
	const [texts, setTexts] = useState({});
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
		setTexts([]);
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
						graphicScale={1.2}
						yOffset={2}
						title="Blockchain.com"
						subtitle="Software Engineer Intern"
					></PortfolioEntry>
					<PortfolioEntry
						graphic={`${URL}/models/computer/scene.glb`}
						graphicScale={0.13}
						title="Freelancing"
						subtitle="Web Designer/Developer"
					></PortfolioEntry>
				</section>
				<section className={styles.portfolioSection} id="projectsSection">
					<h2>Projects</h2>
					<PortfolioEntry
						graphic={`${URL}/models/ramen/scene.glb`}
						graphicScale={35}
						yOffset={1}
						title="CoinSoup.io"
						description="Cryptocurrency webapp | More information coming soon!"
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
