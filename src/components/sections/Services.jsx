import { useState } from "react";

const ServiceCard = ({ title, description, icon, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 transition-all duration-500 hover:border-[#00DC82]/50 hover:shadow-2xl hover:shadow-[#00DC82]/20 hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
            }}
        >
            {/* Holographic Sheen */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,220,130,0.1) 0%, transparent 50%, rgba(108,92,231,0.1) 100%)',
                    transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.8s ease-out'
                }}
            />

            <div className="relative z-10">
                <div className="text-5xl mb-6">{icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00DC82] transition-colors">
                    {title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00DC82]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
};

const Services = () => {
    const services = [
        {
            title: "Web Applications",
            description: "Enterprise-grade React, Next.js, and Vue.js applications with cutting-edge performance.",
            icon: "🌐"
        },
        {
            title: "Mobile Development",
            description: "Native experiences with Flutter and React Native. iOS and Android, one codebase.",
            icon: "📱"
        },
        {
            title: "UI/UX Design",
            description: "Design systems that feel alive. Every pixel earns its place.",
            icon: "✨"
        },
        {
            title: "Enterprise SaaS",
            description: "Scalable platforms for CRM, ERP, HRM, and custom business solutions.",
            icon: "🏢"
        },
        {
            title: "E-Commerce",
            description: "Lightning-fast online stores with real-time inventory and AI recommendations.",
            icon: "🛍️"
        },
        {
            title: "AI Integration",
            description: "Machine learning models, computer vision, and intelligent automation.",
            icon: "🤖"
        }
    ];

    return (
        <section id="services" className="relative py-32 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        What We Architect
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Digital ecosystems engineered for scale, precision, and longevity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;