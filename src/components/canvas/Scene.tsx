"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";

interface SceneProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Scene({ children, className }: SceneProps) {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Performance optimization for high DPI screens
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
