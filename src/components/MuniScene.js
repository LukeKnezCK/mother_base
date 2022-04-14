
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Muni from "./Muni"
import '../App.css'

function MuniScene() {
    return (
        <Canvas className='canvas' camera={{near: 1.5, far: 100, position: [12, 7, 10], fov: 75}}>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.2} />
            <spotLight position={[15,2,10]} angle={1} penumbra={1} intensity={0.35}/>
            <Suspense fallback={null}>
                <Muni/>
            </Suspense>
        </Canvas>
    )
}

export default MuniScene