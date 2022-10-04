import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

export default function PortfolioEntry(props) {
	const [position, setPosition] = useState([0,0,0]);
	const [rotation, setRotation] = useState([0,0,0]);

	useFrame(({clock}) => {
		const partition = clock.getElapsedTime() % 360;
		setRotation([0, (partition / 6), 0])
		setPosition([0, Math.sin(partition) - (props.yOffset || 0), 0])
	})

	return (
        <mesh position={position} rotation={rotation}>
            <primitive object={props.model} scale={Array(3).fill(props.graphicScale|| 1)} />
        </mesh>
    )
}
