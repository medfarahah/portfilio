import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "Next.js", "PHP", "MySQL",
    "Node.js", "Python", "C", "C++",
    "Tailwind CSS", "Git", "Framer Motion"
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-text mb-4">Skills & Technologies</h2>
                    <p className="text-text-muted">My technical toolkit</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-secondary p-4 rounded-xl text-center border border-white/5 hover:border-accent/50 transition-colors cursor-default"
                        >
                            <span className="text-text font-medium">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
