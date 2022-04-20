/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Muni from './models/Muni.gltf'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(Muni)
  useFrame(state => {
    const time = state.clock.getElapsedTime();
    group.current.position.y = group.current.position.y + Math.sin(time * 2) / 100;
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['Muni-0'].geometry} material={materials['Material.005']} position={[-1.13, -2.17, -6.36]} rotation={[Math.PI, -1.53, Math.PI]} />
      <mesh geometry={nodes['Muni-1'].geometry} material={materials['Material.007']} position={[-1.13, -2.17, -6.36]} rotation={[Math.PI, -1.53, Math.PI]} />
      <mesh geometry={nodes['Muni-2'].geometry} material={materials['Material.008']} position={[-1.13, -2.17, -6.36]} rotation={[Math.PI, -1.53, Math.PI]} />
      <mesh geometry={nodes['Muni-3'].geometry} material={materials['Material.006']} position={[-1.13, -2.17, -6.36]} rotation={[Math.PI, -1.53, Math.PI]} />
    </group>
  )
}

useGLTF.preload(Muni)
