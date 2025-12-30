"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
    cursorClassName?: string;
}

export default function Typewriter({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseTime = 2000,
    className = "",
    cursorClassName = "",
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingDelay, setTypingDelay] = useState(typingSpeed);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && displayedText === fullText) {
                // Finished typing word, pause then delete
                setTypingDelay(pauseTime);
                setIsDeleting(true);
            } else if (isDeleting && displayedText === "") {
                // Finished deleting, move to next word
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingDelay(500); // Small pause before typing next word
            }
        };

        timer = setTimeout(handleTyping, typingDelay);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <div className={`inline-flex items-center ${className}`}>
            <span className="sr-only">
                Current Role: {words[loopNum % words.length]}
            </span>
            <span aria-hidden="true">
                {displayedText}
            </span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className={`ml-1 inline-block w-[2px] h-[1.2em] bg-current ${cursorClassName}`}
            />
        </div>
    );
}
