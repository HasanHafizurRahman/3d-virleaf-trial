const TechStack = () => {
    const technologies = [
        "React", "Three.js", "Node.js", "Python", "Flutter",
        "PostgreSQL", "MongoDB", "AWS", "Tailwind CSS", "GSAP",
        "TypeScript", "Docker", "Kubernetes", "Next.js", "Express"
    ];

    return (
        <section id="tech" className="relative py-32 overflow-hidden">
            <div className="mb-12 text-center">
                <h2 className="text-5xl font-bold text-white/90">Our Arsenal</h2>
            </div>

            {/* Infinite Marquee */}
            <div className="relative">
                <div className="flex animate-marquee">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-6 px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#00DC82] hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                        >
                            <span className="text-xl font-mono text-white/60 group-hover:text-[#00DC82] transition-colors">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;