import React from 'react';
import clsx from 'clsx';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
    return (
        <section id={id} className={clsx("min-h-screen w-full py-20 px-4 md:px-10 relative flex flex-col justify-center", className)}>
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    );
}
