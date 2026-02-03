"use client";
import React, { useRef, useLayoutEffect } from "react";
import Section from "./Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import StarField from "./StarField";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "To-Do App",
        desc: "Full-stack MERN To-Do app with persistent storage and CRUD operations.",
        tech: ["MongoDB", "Express", "React",  "Node.js"],
        color: "from-cyan-500 to-blue-600",
        link: "https://mineworklist.netlify.app/",
        github: "https://github.com/Ritik-m-desighn/Note_App.git",
        image: "https://plus.unsplash.com/premium_vector-1734098710258-aa2c5929dcda?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Shopify E-Commerce Application",
        desc: "Full-stack MERN eCommerce app with authentication, cart, checkout, and admin roles.",
        tech: ["HTML5", "CSS", "MongoDB", "Express", "React",  "Node.js"],
        color: "from-red-500 to-pink-600",
        link: "https://shopikkko77.vercel.app/",
        github: "https://github.com/Ritik-m-desighn/shoppiko.git",
        image: "https://plus.unsplash.com/premium_vector-1727150463663-370be0577ca9?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Movie OTT Platform[TBL]",
        desc: "Full-featured streaming experience with categories, search, and responsive player. ",
        tech: ["HTML5", "CSS", "JS", "MySQL"],
        color: "from-red-500 to-pink-600",
        link: "/#",
        github: "#",
        image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/40eba6cdf64ea43d49bd13e6173e3dae8adab88e"
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current || !triggerRef.current) return;

            const totalWidth = sectionRef.current.scrollWidth;
            const windowWidth = window.innerWidth;
            const scrollLength = totalWidth - windowWidth;

            gsap.fromTo(
                sectionRef.current,
                { x: 0 },
                {
                    x: -scrollLength,
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: () => `+=${scrollLength}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // Refresh ScrollTrigger to ensure correct positions
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={triggerRef} className="overflow-hidden bg-black">
            <Section id="projects" className="relative h-screen flex items-center overflow-hidden py-0">
                {/* 1. Star Background */}
                <StarField count={40} color="#00ffff" />

                {/* 2. Ambient Blows */}
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="absolute top-28 left-10 md:left-20 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <Code2 className="text-cyan-400" size={28} />
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 leading-tight">
                            Selected Projects
                        </h2>
                    </motion.div>
                </div>

                <div ref={sectionRef} className="flex gap-12 md:gap-20 pl-10 md:pl-20 pr-[20vw] items-center pt-[15vh] w-max">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative shrink-0">
                            <motion.div
                                whileHover={{ y: -15, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="relative w-[85vw] md:w-[480px] h-[75vh] md:h-[65vh] bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer will-change-transform"
                            >
                                {/* Visual Preview */}
                                <div className={`h-1/2 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    {project.image ? (
                                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                                unoptimized
                                            />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-all duration-700 flex items-center justify-center">
                                            <span className="text-[12rem] font-black text-white/[0.03] group-hover:text-white/[0.08] transition-all duration-700 select-none">{index + 1}</span>
                                        </div>
                                    )}
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />

                                    {/* Animated Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-10 flex flex-col h-1/2 justify-start md:justify-between gap-4 md:gap-0">
                                    <div className="order-2 md:order-1">
                                        <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light line-clamp-3">
                                            {project.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 md:gap-6 pt-0 md:pt-6 items-center order-1 md:order-2 mb-2 md:mb-0">
                                        <motion.a
                                            href={project.link}
                                            whileHover={{ x: 3 }}
                                            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/70 hover:text-cyan-400 transition-colors uppercase"
                                        >
                                            Live Demo <ArrowUpRight size={14} />
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ x: 3 }}
                                            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/70 hover:text-purple-400 transition-colors uppercase"
                                        >
                                            Github <Github size={14} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Inner Border Glow */}
                                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-white/0 group-hover:border-white/5 transition-colors duration-700 pointer-events-none" />
                            </motion.div>
                        </div>
                    ))}

                    {/* Final Spacer */}
                    <div className="w-[10vw]" />
                </div>
            </Section>
        </div>
    );
}
