import styles from './PortfolioEntry.module.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

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
		<div className="portfolioEntry">
			<div className="entryGraphic"></div>
			<div className="entryDescription">
				{model ? (
					<Suspense fallback={null}>
						<Canvas
							shadows={true}
							className={styles.canvas}
							camera={{
								position: props.camPosition || [2,2,2]
							}}
						>
							<OrbitControls />
							<ambientLight color={'white'} intensity={0.5} />
							<primitive object={model} scale={Array(3).fill(props.graphicScale|| 1)} />
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
