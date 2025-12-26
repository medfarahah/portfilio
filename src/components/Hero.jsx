import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-accent font-medium text-xl mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 tracking-tight">
                        {Array.from("MOHAMED FARAH").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10">
                        A passionate Software Engineer crafting beautiful and functional web experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center gap-6 mb-16"
                >
                    {[
                        { icon: <Github size={24} />, href: "https://github.com/medfarahah" },
                        { icon: <Linkedin size={24} />, href: "#" },
                        { icon: <Mail size={24} />, href: "mailto:medfarah057@gmail.com" },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="p-3 bg-secondary rounded-full text-text hover:bg-accent hover:text-white transition-all hover:-translate-y-1"
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="text-text-muted" size={24} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
