import styles from './PortfolioEntry.module.css';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import Graphic from '../Graphic'

export default function PortfolioEntry(props) {
	const [model, setModel] = useState(null);

	useEffect(() => {
		const loader = new GLTFLoader();
		loader.load(props.graphic || [], async (gltf) => {
			let nodes = (await gltf.parser.getDependencies('node'));
			setModel(nodes[0]);
		});
	}, []);

	return (
		<div className={styles.portfolioEntry}>
			<div className={styles.entryGraphic}>
				{model ? (
					<Suspense fallback={null}>
						<Canvas
							shadows={true}
							className={styles.canvas}
							camera={{
								position: props.camPosition || [8,3,0]
							}}
						>
							<ambientLight color={'white'} intensity={0.5} />
							<Graphic model={model} graphicScale={props.graphicScale} yOffset={props.yOffset}/>
						</Canvas>
					</Suspense>
				) : (
					<text>Loading...</text>
				)}
			</div>
			<div className={styles.entryDescription}>
				<h3>{props.title}</h3>
				<h4>{props.subtitle}</h4>
				<text>{props.description}</text>
			</div>
		</div>
	);
}
