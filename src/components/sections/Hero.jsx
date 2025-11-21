
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "../3d/Scene";

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Suspense fallback={null}>
                        <Scene scrollY={scrollY} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-[#00DC82] via-[#22D3EE] to-[#6C5CE7] bg-clip-text text-transparent animate-fade-in">
                    Architecting
                    <br />
                    <span className="text-white">Digital Reality</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light">
                    We don't build software. We architect living ecosystems that breathe, adapt, and evolve.
                </p>
                <button className="group relative px-12 py-5 bg-gradient-to-r from-[#00DC82] to-[#22D3EE] rounded-full text-black font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#00DC82]/50 hover:scale-105">
                    <span className="relative z-10">Explore Our Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-[#00DC82] rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
