"use client";
import React, { useRef, useLayoutEffect } from "react";
import Section from "./Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import StarField from "./StarField";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "AI Trip Planner",
        desc: "Smart travel itineraries generated via Gemini AI. Features budget tracking, route optimization, and real-time destination data.",
        tech: ["MERN Stack", "Gemini API", "Google Maps", "Shadcn UI"],
        color: "from-cyan-500 to-blue-600",
        link: "https://ai-world-routes.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Ai_World_Routes",
        image: "https://private-user-images.githubusercontent.com/177633409/479348746-439a16ea-59c3-4e35-9391-0abac2f4fa07.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcwNTYzOTAsIm5iZiI6MTc2NzA1NjA5MCwicGF0aCI6Ii8xNzc2MzM0MDkvNDc5MzQ4NzQ2LTQzOWExNmVhLTU5YzMtNGUzNS05MzkxLTBhYmFjMmY0ZmEwNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQwMDU0NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNDhiOGYyOGE2ZGExYTRjNzdlNmI2MjllMDljZjlkOWM0NTI5YTVjYzA4ODczZjJkZGIxMWU0YTk1MWQ5MTM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XaGWvu05rf0_njTWq1BOj3vYGRC58ijTKmAwzq4-rEc"
    },
    {
        title: "Fitness AI Coach",
        desc: "Personalized workout plans and real-time progress tracking powered by Machine Learning. Includes voice-guided support.",
        tech: ["Python", "ML", "Tkinter", "OpenCV"],
        color: "from-purple-500 to-indigo-600",
        link: "https://github.com/sonukumarsaw12/Fitness-AI-Coach",
        github: "https://github.com/sonukumarsaw12/Fitness-AI-Coach",
        image: "https://lh3.googleusercontent.com/d/1GLItbaNOY6hG9iwBUevwrGNAhwP05Mks"
    },
    {
        title: "Skill_Swap Platform",
        desc: "Skill Swap enables real-time skill exchange through scheduling, chat,and video meetings.",
        tech: ["WebRTC", "Socket.io", "MERN", "MongoDB", "JWT"],
        color: "from-emerald-500 to-teal-600",
        link: "https://skill-swap-by-sonu.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Skill_Swap_By_Sonu/tree/main",
        image: "https://private-user-images.githubusercontent.com/162047577/530868187-c63f22f1-3b6a-4b71-a8f1-5245bffcec7d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcwNTgyMjYsIm5iZiI6MTc2NzA1NzkyNiwicGF0aCI6Ii8xNjIwNDc1NzcvNTMwODY4MTg3LWM2M2YyMmYxLTNiNmEtNGI3MS1hOGYxLTUyNDViZmZjZWM3ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQwMTI1MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02M2M1YmY1MWQzOTJmMjczZmE2NmMwOGFhNzIwY2EyNDZmYTE2ZmRlOTcyOWU3YjY4ZmQ1ZjA2ZjZhZGJkNGU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jbTSUfcO7raAxhOF05l7hrYMItN_UwgsPrVOIJPrljE"
    },
    {
        title: "Movie OTT Platform",
        desc: "Full-featured streaming experience with categories, search, and responsive player. Managed via custom MySQL database.",
        tech: ["HTML5", "CSS", "JS", "MySQL"],
        color: "from-red-500 to-pink-600",
        link: "https://tangerine-souffle-7eae56.netlify.app/",
        github: "https://github.com/sonukumarsaw12/Movie-OTT-Platform/tree/main",
        image: "https://private-user-images.githubusercontent.com/162047577/530951846-e55c0ef3-1c3f-4ebc-b759-2cf04bbc9fa2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcwOTE3MDYsIm5iZiI6MTc2NzA5MTQwNiwicGF0aCI6Ii8xNjIwNDc1NzcvNTMwOTUxODQ2LWU1NWMwZWYzLTFjM2YtNGViYy1iNzU5LTJjZjA0YmJjOWZhMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxMDQzMjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ODQzYzVhNzNiNGNjMjZkNGY2ZDBiMTJkMjJiNTc3Y2NkZWJjNTcxMDQ4NTc2OGEwZThhYjYwOTE4OGIxODIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.TznRpRJRpiFeG9RUNExizm0xCoKYs387hmpVOt8mzZ8"
    },
    {
        title: "Glowify Ecommerce",
        desc: "Glowify is a modern full-stack e-commerce platform built using the MERN stack, featuring a user-friendly shopping experience and a powerful admin dashboard.",
        tech: ["MERN", "REACT-ROUTER", "JWT", "REDUX"],
        color: "from-blue-500 to-cyan-400",
        link: "https://shopping-full-stack-website.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Shopping_Full_Stack_website?tab=readme-ov-file#glowify---ecommerce-website-with-admin-panel",
        image: "https://private-user-images.githubusercontent.com/162047577/530954416-d8583861-a169-4681-b1d8-7190235dd588.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcwOTI1MjAsIm5iZiI6MTc2NzA5MjIyMCwicGF0aCI6Ii8xNjIwNDc1NzcvNTMwOTU0NDE2LWQ4NTgzODYxLWExNjktNDY4MS1iMWQ4LTcxOTAyMzVkZDU4OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxMDU3MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYWYyNjNjZDAxZDgwMGQwYWYxMzc3ZThmMjExOTUwZTk0ZWFmZGQ0MmFlZmQxNmEzZmRlYmY2ODI1MGNiNWUxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.CdAOqbeKMfRD1bvQoobjx--_TKPTFy7X3amd48dUN2A"
    },
    {
        title: "Sweet Shop UI",
        desc: "A full-stack Sweet Shop Management System built using modern web technologies and following Test-Driven Development (TDD) principles.",
        tech: ["MERN", "JWT", "REST API", "REACT-ROUTER", "JEST"],
        color: "from-orange-400 to-yellow-600",
        link: "https://sweet-shop-sk.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Sweet_Shop_Project",
        image: "https://private-user-images.githubusercontent.com/162047577/526248430-b6f3b343-73e5-4910-85b8-20f7acc70097.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjcwOTI2MzksIm5iZiI6MTc2NzA5MjMzOSwicGF0aCI6Ii8xNjIwNDc1NzcvNTI2MjQ4NDMwLWI2ZjNiMzQzLTczZTUtNDkxMC04NWI4LTIwZjdhY2M3MDA5Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIzMFQxMDU4NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YTgzYzcwMDZjYWM3ZDk4ZDk5N2I0MWEzNGNkNzBjYWI3NWQ2ZmI5ZDZmYjNjYmY4OGYzYzZiZDZjZDBmNzY1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GU5pj2F1XSR4kC74ZPqv1LbSYae3sv2f2ppR-BULvcs"
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
                                className="relative w-[85vw] md:w-[480px] h-[65vh] bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer will-change-transform"
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
                                <div className="p-10 flex flex-col h-1/2 justify-between">
                                    <div>
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

                                    <div className="flex gap-6 pt-6 items-center">
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
