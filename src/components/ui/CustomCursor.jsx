import React, { useRef, useState, useEffect, Suspense } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
                transition: 'width 0.2s, height 0.2s'
            }}
        >
            <div
                className={`border-2 rounded-full transition-all duration-200 ${isHovering
                    ? 'w-16 h-16 border-[#00DC82] bg-[#00DC82]/10'
                    : 'w-8 h-8 border-[#00DC82]'
                    }`}
                style={{ mixBlendMode: 'difference' }}
            />
        </div>
    );
};

export default CustomCursor;


