"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center font-mono"
                >
                    <div className="text-neon-cyan text-4xl font-bold mb-4 animate-pulse">
                        System Initializing...
                    </div>
                    <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-2 text-gray-400 text-sm">
                        {progress}%
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
