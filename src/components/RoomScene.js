import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Room from "./Room"
import '../App.css'

function RoomScene() {
    return (
        <Canvas className='canvas' camera={{near: 1.5, far: 100, position: [4, 6, 9], fov: 75}}>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.35} />
            <spotLight position={[10,3,10]} angle={1} penumbra={1} intensity={0.35}/>
            <Suspense fallback={null}>
                <Room/>
            </Suspense>
        </Canvas>
    )
}

export default RoomScene