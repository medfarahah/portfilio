import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewYearCelebration = () => {
    // Set to true to preview the celebration now!
    const TEST_MODE = false;

    const [showCelebration, setShowCelebration] = useState(false);
    const [confetti, setConfetti] = useState([]);
    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        const checkNewYear = () => {
            // If TEST_MODE is enabled, always show celebration
            if (TEST_MODE) {
                setShowCelebration(true);
                return;
            }

            const now = new Date();
            const newYear2026 = new Date('2026-01-01T00:00:00');
            const newYearEnd = new Date('2026-01-02T00:00:00');

            // Check if current time is between Jan 1, 2026 00:00 and Jan 2, 2026 00:00
            if (now >= newYear2026 && now < newYearEnd) {
                setShowCelebration(true);
            } else {
                setShowCelebration(false);
            }
        };

        // Check immediately
        checkNewYear();

        // Check every minute
        const interval = setInterval(checkNewYear, 60000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (showCelebration) {
            // Generate confetti
            const confettiArray = Array.from({ length: 100 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 3,
                duration: 3 + Math.random() * 2,
                color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'][Math.floor(Math.random() * 6)],
                rotation: Math.random() * 360,
            }));
            setConfetti(confettiArray);

            // Generate fireworks periodically
            const fireworkInterval = setInterval(() => {
                const newFirework = {
                    id: Date.now(),
                    left: 20 + Math.random() * 60,
                    bottom: 20 + Math.random() * 30,
                    color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'][Math.floor(Math.random() * 6)],
                };
                setFireworks(prev => [...prev, newFirework]);

                // Remove firework after animation
                setTimeout(() => {
                    setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
                }, 2000);
            }, 1000);

            return () => clearInterval(fireworkInterval);
        }
    }, [showCelebration]);

    if (!showCelebration) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Celebration Banner */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-auto"
            >
                <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-2xl">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-center"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        🎉 Happy New Year 2026! 🎊
                    </motion.h1>
                </div>
            </motion.div>

            {/* Confetti */}
            {confetti.map((piece) => (
                <motion.div
                    key={piece.id}
                    className="absolute w-3 h-3 rounded-sm"
                    style={{
                        left: `${piece.left}%`,
                        top: '-10%',
                        backgroundColor: piece.color,
                        rotate: piece.rotation,
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        rotate: [piece.rotation, piece.rotation + 360],
                        x: [0, Math.sin(piece.id) * 100],
                    }}
                    transition={{
                        duration: piece.duration,
                        delay: piece.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Fireworks */}
            <AnimatePresence>
                {fireworks.map((firework) => (
                    <motion.div
                        key={firework.id}
                        className="absolute"
                        style={{
                            left: `${firework.left}%`,
                            bottom: `${firework.bottom}%`,
                        }}
                    >
                        {/* Firework particles */}
                        {Array.from({ length: 12 }).map((_, i) => {
                            const angle = (i * 360) / 12;
                            const distance = 100;
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full"
                                    style={{
                                        backgroundColor: firework.color,
                                        boxShadow: `0 0 10px ${firework.color}`,
                                    }}
                                    initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                                    animate={{
                                        x: Math.cos((angle * Math.PI) / 180) * distance,
                                        y: Math.sin((angle * Math.PI) / 180) * distance,
                                        opacity: 0,
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: 'easeOut',
                                    }}
                                />
                            );
                        })}
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Sparkles */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={`sparkle-${i}`}
                    className="absolute text-2xl"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 3,
                    }}
                >
                    ✨
                </motion.div>
            ))}

            {/* Balloons */}
            {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                    key={`balloon-${i}`}
                    className="absolute text-4xl"
                    style={{
                        left: `${10 + i * 8}%`,
                        bottom: '-10%',
                    }}
                    animate={{
                        y: [0, -window.innerHeight - 100],
                        x: [0, Math.sin(i) * 50],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    🎈
                </motion.div>
            ))}

            {/* Celebration Message */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-auto"
            >
                <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-lg border-2 border-yellow-400">
                    <p className="text-white text-lg md:text-2xl font-semibold">
                        Wishing you an amazing year ahead! 🌟
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default NewYearCelebration;
