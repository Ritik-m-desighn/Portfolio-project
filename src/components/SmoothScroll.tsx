"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.07,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        }}>
            {children}
        </ReactLenis>
    );
}
