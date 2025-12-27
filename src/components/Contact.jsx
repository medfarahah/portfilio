import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setShowNotification(true);
                form.reset();
                setTimeout(() => setShowNotification(false), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

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
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="access_key" value="a500c488-1f5d-4f83-8d76-923a8171518e" />
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                name="message"
                                placeholder="Your Message"
                                required
                                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </motion.form>
                </div>

                {/* Success Notification */}
                <AnimatePresence>
                    {showNotification && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="fixed bottom-8 right-8 bg-accent text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50"
                        >
                            <CheckCircle size={24} />
                            <span className="font-medium">Message sent successfully!</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Contact;
