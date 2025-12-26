import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "GoCart",
        description: "A modern e-commerce platform built for seamless shopping experiences.",
        tags: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "/images/projects/gocart.png",
        links: { demo: "https://gocart-main-assalpays-projects.vercel.app/", github: "#" }
    },
    {
        title: "HellCare",
        description: "A healthcare management system designed for efficiency and patient care.",
        tags: ["React", "Tailwind CSS", "Vercel"],
        image: "/images/projects/helcare.png",
        links: { demo: "https://hellcare-4qas.vercel.app/", github: "#" }
    },
    {
        title: "Video Marketing Portfolio",
        description: "A showcase portfolio for video marketing and photography services.",
        tags: ["Next.js", "Framer Motion", "Multimedia"],
        image: "/images/projects/pvmp.png",
        links: { demo: "https://producteur-de-vid-o-marketing-publi.vercel.app/", github: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-text mb-4">Featured Projects</h2>
                    <p className="text-text-muted">Some of my recent work</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
