"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import StarField from "./StarField";
import { Code2, Globe } from "lucide-react";

export default function About() {
    return (
        <Section id="about" className="relative bg-black text-white py-20 overflow-hidden">
            {/* 1. Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* 2. Star Field */}
            <StarField count={40} color="#ffffff" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="p-2 bg-white/5 rounded-lg border border-white/10 text-cyan-400">
                                <Code2 size={24} />
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                About Me
                            </h2>
                        </div>

                        <p className="text-gray-400 mb-4 text-base md:text-lg leading-relaxed font-light">
                            I am a <span className="text-cyan-400 font-medium">Bachelor of Computer Applications</span> student at <span className="text-white font-medium">RAMLAU</span> with a strong interest in <span className="text-white">Full Stack Web Development</span> and problem solving.
                        </p>
                        <p className="text-gray-400 mb-4 text-base md:text-lg leading-relaxed font-light">
                            I have hands-on experience building real-world web applications using <span className="text-white">React, Next.js, Node.js, Express, MongoDB, and SQL</span>. I enjoy working across the full development lifecycle — from designing clean user interfaces to implementing efficient backend logic and APIs.
                        </p>
                        <p className="text-gray-400 mb-4 text-base md:text-lg leading-relaxed font-light">
                            I actively practice <span className="text-purple-400 font-medium">Data Structures and Algorithms</span> and focus on writing clean, scalable, and maintainable code. I am motivated, self-driven, and continuously learning new technologies to improve my skills.
                        </p>
                        <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed font-light italic border-l-2 border-cyan-500/30 pl-4">
                            I am currently seeking <span className="text-cyan-400 font-medium">internship or entry-level opportunities</span> where I can apply my skills, learn from experienced engineers, and contribute to building impactful software products.
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-3">
                            {["C++", "DSA","Next.js", "React.js", "Node.js", "MongoDB", "SQL", "Git"].map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Interactive Code Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Glow behind card */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        {/* The Glass Card */}
                        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                            {/* Window Actions */}
                            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-xs font-mono text-gray-500">cmd</div>
                            </div>

                            {/* Code Content */}
                            <div className="font-mono text-sm leading-8">
                                <div className="text-purple-400">const <span className="text-blue-400">Ritik</span> = <span className="text-yellow-400">{"{"}</span></div>
                                <div className="pl-6 text-gray-300">education: <span className="text-green-400">&quot;MSITM&quot;</span>,</div>
                                <div className="pl-6 text-gray-300">skills: <span className="text-yellow-400">[ &quot;DSA&quot;, &quot;Full Stack Web Development&quot;]</span>,</div>
                                <div className="pl-6 text-gray-300">status: <span className="text-green-400">&quot;Open to Work&quot;</span>,</div>
                                <div className="pl-6 text-gray-300">loves: <span className="text-cyan-400">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-400">&quot;Innovation&quot;</span></div>
                                <div className="text-yellow-400">{"}"}</div>
                            </div>

                            {/* Decorative Icon */}
                            <Globe className="absolute bottom-6 right-6 text-white/5 w-24 h-24 rotate-[-20deg] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
