"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useTexture, Stars, Sparkles } from "@react-three/drei";
import { Group, Vector3 } from "three";

export default function HeroModel() {
    const group = useRef<Group>(null);
    const bgGroup = useRef<Group>(null);
    const texture = useTexture("/robot.png");

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const mouseX = (state.mouse.x * Math.PI) / 10;
        const mouseY = (state.mouse.y * Math.PI) / 10;

        if (group.current) {
            // Robot Mouse Interaction - STOPPED
        }

        if (bgGroup.current) {
            // Background Parallax - STOPPED
        }
    });

    return (
        <>
            <group ref={group} dispose={null}>
                {/* Effect 3: Floating Animation */}
                <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
                    {/* Main Robot Image Plane */}
                    <mesh position={[2.5, 0, 0]} rotation={[0, -0.2, 0]}>
                        <planeGeometry args={[2.2, 3.2]} />
                        <meshBasicMaterial map={texture} transparent opacity={1} />
                    </mesh>
                </Float>
            </group>

            <group ref={bgGroup}>
                {/* BACKGROUND ORBS REMOVED */}

                {/* Moving Stars */}
                <Stars radius={50} depth={50} count={4000} factor={7} saturation={0} fade speed={1} />
                <Sparkles count={150} scale={15} size={6} speed={0.4} opacity={0.5} color="#0afff0" position={[0, 0, -5]} />

                {/* Robot Side Stars (Dense Cluster) - Moved back to prevent clipping */}
                <Sparkles count={100} scale={[6, 6, 6]} size={2.5} speed={0.3} opacity={1} color="#ffffff" position={[2.5, 0, -4]} />
            </group>
        </>
    );
}
