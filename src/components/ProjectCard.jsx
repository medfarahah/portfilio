import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)",
            }}
            className="relative group h-full"
        >
            <motion.div
                style={{
                    rotateX: useMotionTemplate`${mouseY.get() / 20}deg`,
                    rotateY: useMotionTemplate`${mouseX.get() / -20}deg`,
                }}
                className="bg-primary rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-200 shadow-xl h-full flex flex-col"
            >
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-accent rounded-full text-white hover:bg-accent-hover transition-colors"
                            title="View Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-secondary rounded-full text-white hover:bg-primary transition-colors"
                            title="View Code"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                    <p className="text-text-muted mb-4 text-sm flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-xs text-accent">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
