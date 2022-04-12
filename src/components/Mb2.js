/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Mb2.gltf')
  useFrame(state => {
    const time = state.clock.getElapsedTime();
    group.current.position.y = group.current.position.y + Math.sin(time * 2) / 100;
    group.current.rotation.y += 0.0015;
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.MotherBase002.geometry} material={materials['palette.002']} rotation={[Math.PI / 2, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('/Mb2.gltf')