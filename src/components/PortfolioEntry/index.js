import styles from './PortfolioEntry.module.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function PortfolioEntry(props) {
	const [model, setModel] = useState(null);

	useEffect(() => {
		const loader = new GLTFLoader();
		loader.load(props.graphic || [], async (gltf) => {
			const nodes = await gltf.parser.getDependencies('node');
			setModel(nodes[0]);
		});
	}, []);

	return (
		<div className="portfolioEntry">
			<div className="entryGraphic"></div>
			<div className="entryDescription">
				{model ? (
					<Suspense fallback={null}>
						<Canvas
							shadows={true}
							className={styles.canvas}
							camera={{
								position: [2, 2, 0],
							}}
						>
							<ambientLight color={'white'} intensity={0.5} />
							<primitive object={model} />
						</Canvas>
					</Suspense>
				) : (
					<text>Loading...</text>
				)}
				<h3>{props.title}</h3>
				<h4>{props.subtitle}</h4>
				<text>{props.description}</text>
			</div>
		</div>
	);
}
