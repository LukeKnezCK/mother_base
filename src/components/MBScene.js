import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mb2 from "./Mb2"
import '../App.css'

function MBScene() {
    return (
        <Canvas className='canvas' camera={{position: [7,7,8]}}>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.25} />
            <pointLight position={[-10,10,-10]} intensity={0.25}/>
            <Suspense fallback={null}>
                <Mb2 />
            </Suspense>
        </Canvas>
    )
}

export default MBScene