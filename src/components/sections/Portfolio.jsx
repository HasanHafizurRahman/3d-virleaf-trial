
const ProjectCard = ({ title, subtitle, tech, image, index }) => {
    return (
        <div
            className="group relative min-w-[350px] md:min-w-[450px] h-[500px] rounded-2xl overflow-hidden cursor-pointer"
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
            }}
        >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] group-hover:scale-105 transition-transform duration-700" />

            {/* Tech Stack Pills */}
            <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                {tech.map((t, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono backdrop-blur-xl bg-white/10 border border-white/20 text-[#00DC82]"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-[#00DC82] transition-colors">
                    {title}
                </h3>
                <p className="text-white/60 mb-6">{subtitle}</p>
                <button className="px-6 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-[#00DC82] hover:text-black hover:border-[#00DC82] transition-all duration-300">
                    View Case Study →
                </button>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00DC82]/0 via-[#00DC82]/0 to-[#00DC82]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

const Portfolio = () => {
    const projects = [
        {
            title: "V.com",
            subtitle: "Enterprise E-Commerce Platform",
            tech: ["React", "Node.js", "PostgreSQL"],
            image: "/vcom.jpg"
        },
        {
            title: "Ladentista",
            subtitle: "Healthcare Management System",
            tech: ["Next.js", "Python", "AI/ML"],
            image: "/ladentista.jpg"
        },
        {
            title: "Whitecat",
            subtitle: "Immersive Brand Experience",
            tech: ["Three.js", "GSAP", "WebGL"],
            image: "/whitecat.jpg"
        },
        {
            title: "Virleaf POS",
            subtitle: "Point of Sale Suite",
            tech: ["React", "Express", "MongoDB"],
            image: "/pos.jpg"
        },
        {
            title: "HRM Dashboard",
            subtitle: "Human Resource Management",
            tech: ["Vue.js", "Laravel", "MySQL"],
            image: "/hrm.jpg"
        }
    ];

    return (
        <section id="work" className="relative py-32 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-20">
                <div className="text-center">
                    <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        Featured Work
                    </h2>
                    <p className="text-xl text-white/60">
                        Case studies in digital transformation.
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-8 overflow-x-auto pb-8 px-4 scrollbar-hide">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;