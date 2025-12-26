import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-text mb-4">Get In Touch</h2>
                    <p className="text-text-muted">Have a project in mind?</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-text mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-text-muted">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm">Email</p>
                                    <p className="text-text">medfarah057@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-text-muted">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm">Phone</p>
                                    <p className="text-text">+905063564784</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-text-muted">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm">Location</p>
                                    <p className="text-text">Ankara, Turkiye</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
