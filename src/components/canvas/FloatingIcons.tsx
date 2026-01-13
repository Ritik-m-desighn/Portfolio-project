"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const skills = [
    { name: "React.js", color: "#61DAFB", position: [-3, 1.8, 0] },
    { name: "Next.js", color: "#ffffff", position: [2.8, 1.6, 0.5] },
    { name: "Node.js", color: "#339933", position: [-1.8, -1.8, 1.2] },
    { name: "MongoDB", color: "#47A248", position: [1.8, -1.6, 1.5] },
    { name: "C++", color: "#00599C", position: [0.2, 2.8, -0.5] },
    { name: "Three.js", color: "#3776AB", position: [-2.8, 0.2, 1.8] },
    { name: "JavaScript", color: "#F7DF1E", position: [3, -0.2, 1.2] },
    { name: "Express.js", color: "#ffffff", position: [-0.2, -2.8, -0.8] },
    { name: "Tailwind", color: "#06B6D4", position: [-4, 0.8, -1.5] },
    { name: "Git & GitHub", color: "#F05032", position: [4, -0.8, -1.5] },
    { name: "SQL", color: "#4479A1", position: [0, 0, 2.8] },
];

function Balloon({ skill }: { skill: typeof skills[0] }) {
    return (
        <Float
            speed={1.5 + Math.random()}
            rotationIntensity={0.6}
            floatIntensity={1.2}
            position={new THREE.Vector3(...skill.position)}
        >
            <mesh>
                <sphereGeometry args={[0.45, 64, 64]} />
                <meshPhysicalMaterial
                    color={skill.color}
                    metalness={0.9}
                    roughness={0.05}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    reflectivity={1}
                    emissive={skill.color}
                    emissiveIntensity={0.15}
                />
                <Html distanceFactor={8} center position={[0, 0, 0]}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="pointer-events-none"
                    >
                        <div className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[9px] font-bold border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-nowrap select-none">
                            {skill.name}
                        </div>
                    </motion.div>
                </Html>
            </mesh>
        </Float>
    );
}

export default function FloatingIcons() {
    return (
        <div className="w-full h-[500px] md:h-[600px] absolute inset-0 z-0">
            <Canvas shadows gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
                <pointLight position={[10, 10, 10]} intensity={2.5} />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00ffff" />
                <ambientLight intensity={0.4} />

                {skills.map((skill) => (
                    <Balloon key={skill.name} skill={skill} />
                ))}

                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                    enablePan={false}
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
}
