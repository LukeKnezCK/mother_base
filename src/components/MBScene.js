import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mb2 from "./Mb2"
import '../App.css'

function MBScene() {
    return (
        <Canvas className='canvas' camera={{position: [2,2,11], fov: 75}}>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.2} />
            <spotLight position={[2,2,10]} angle={1} penumbra={1} intensity={0.35}/>
            <Suspense fallback={null}>
                <Mb2/>
            </Suspense>
        </Canvas>
    )
}

export default MBScene