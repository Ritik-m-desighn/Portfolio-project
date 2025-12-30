"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StarField = ({ count = 50, color = "#ffffff" }) => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; duration: number }[]>([]);

    useEffect(() => {
        const tempStars = Array.from({ length: count }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1, // 1px to 3px
            duration: Math.random() * 3 + 2, // 2s to 5s
        }));
        setStars(tempStars);
    }, [count]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        backgroundColor: color,
                        boxShadow: `0 0 ${star.size * 2}px ${color}`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default StarField;
