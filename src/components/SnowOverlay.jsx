import React, { useState, useEffect } from 'react';

const SnowOverlay = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if we should show the snow (before Jan 1, 2026)
        const checkDate = () => {
            const now = new Date();
            const newYear2026 = new Date('2026-01-01T00:00:00');
            setIsVisible(now < newYear2026);
        };

        checkDate();
        // Check every hour
        const interval = setInterval(checkDate, 1000 * 60 * 60);

        return () => clearInterval(interval);
    }, []);

    // Generate more snowflakes for full-screen effect
    const snowflakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 20,
        size: 2 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.7
    }));

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake-full absolute"
                    style={{
                        left: `${flake.left}%`,
                        animationDelay: `${flake.delay}s`,
                        animationDuration: `${flake.duration}s`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default SnowOverlay;
