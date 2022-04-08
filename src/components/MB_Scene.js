import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mb2 from "./components/Mb2"

function MB_Scene() {
    return (
        <Canvas className='canvas'>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.25} />
            <directionalLight position={[2, 5, 1]} />
            <Suspense fallback={null}>
                <Mb2 />
            </Suspense>
        </Canvas>
    )
}

export default MB_Scene