import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SnowmanAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        // Check if we should show the snowman (before Jan 1, 2026)
        const checkDate = () => {
            const now = new Date();
            const newYear2026 = new Date('2026-01-01T00:00:00');

            if (now < newYear2026) {
                setIsVisible(true);
                const timeDiff = newYear2026 - now;
                const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                setDaysLeft(days);
            } else {
                setIsVisible(false);
            }
        };

        checkDate();
        // Check every hour
        const interval = setInterval(checkDate, 1000 * 60 * 60);

        return () => clearInterval(interval);
    }, []);

    // Generate snowflakes
    const snowflakes = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        size: 4 + Math.random() * 4
    }));

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-8 right-8 z-50 pointer-events-none"
                >
                    {/* Snowflakes */}
                    <div className="absolute inset-0 w-64 h-64 overflow-hidden pointer-events-none">
                        {snowflakes.map((flake) => (
                            <div
                                key={flake.id}
                                className="snowflake absolute"
                                style={{
                                    left: `${flake.left}%`,
                                    animationDelay: `${flake.delay}s`,
                                    animationDuration: `${flake.duration}s`,
                                    width: `${flake.size}px`,
                                    height: `${flake.size}px`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Snowman Container */}
                    <motion.div
                        className="relative pointer-events-auto"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Countdown Badge */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg"
                        >
                            {daysLeft} {daysLeft === 1 ? 'day' : 'days'} to 2026! 🎉
                        </motion.div>

                        {/* Snowman */}
                        <div className="snowman-container">
                            {/* Bottom Ball */}
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-24 h-24 bg-white rounded-full shadow-xl relative"
                            >
                                {/* Buttons */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                </div>
                            </motion.div>

                            {/* Middle Ball */}
                            <motion.div
                                animate={{ rotate: [0, -3, 3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                                className="w-20 h-20 bg-white rounded-full shadow-xl relative -mt-4 mx-auto"
                            >
                                {/* Arms */}
                                <div className="absolute -left-8 top-1/3 w-8 h-1 bg-amber-800 rounded-full rotate-45 origin-right"></div>
                                <div className="absolute -right-8 top-1/3 w-8 h-1 bg-amber-800 rounded-full -rotate-45 origin-left"></div>

                                {/* Buttons */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                </div>
                            </motion.div>

                            {/* Head */}
                            <motion.div
                                animate={{ rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                className="w-16 h-16 bg-white rounded-full shadow-xl relative -mt-3 mx-auto"
                            >
                                {/* Hat */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                                    <div className="w-12 h-2 bg-gray-900 rounded-full"></div>
                                    <div className="w-8 h-6 bg-gray-900 rounded-t-lg mx-auto"></div>
                                </div>

                                {/* Eyes */}
                                <div className="absolute top-5 left-3 w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                                <div className="absolute top-5 right-3 w-1.5 h-1.5 bg-gray-900 rounded-full"></div>

                                {/* Carrot Nose */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-orange-500"></div>

                                {/* Smile */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 bg-gray-900 rounded-full"></div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SnowmanAnimation;
