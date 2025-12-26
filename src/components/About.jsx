import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold text-text mb-8">About Me</h2>
                    <div className="prose prose-invert mx-auto text-text-muted text-lg leading-relaxed">
                        <p className="mb-6">
                            I am a dedicated Software Engineer with a strong foundation in computer science and modern web technologies,
                            passionate about building scalable, efficient, and impactful web applications. I enjoy solving complex problems
                            and transforming ideas into reliable solutions.
                        </p>
                        <p>
                            Beyond coding, I actively explore emerging technologies, contribute to open-source projects, and stay up to date
                            with the latest tech trends—often accompanied by a good cup of coffee.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
