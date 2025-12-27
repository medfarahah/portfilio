import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 2, duration: 0.5 } }}
            onAnimationComplete={() => document.body.style.overflow = 'auto'}
            className="fixed inset-0 z-[100] bg-primary flex items-center justify-center pointer-events-none"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, repeat: 1, repeatType: "reverse" }}
                className="text-accent text-5xl font-bold tracking-tight"
            >
                MFA Portfolio
            </motion.div>
        </motion.div>
    );
};

export default PageLoader;

