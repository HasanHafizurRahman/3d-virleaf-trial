import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-white/5' : 'backdrop-blur-md bg-white/3'
                } border border-white/10 rounded-full px-8 py-4 shadow-2xl`}
        >
            <ul className="flex gap-8 text-sm font-medium text-white/90">
                <li><a href="#hero" className="hover:text-[#00DC82] transition-colors cursor-pointer">Home</a></li>
                <li><a href="#services" className="hover:text-[#00DC82] transition-colors cursor-pointer">Services</a></li>
                <li><a href="#work" className="hover:text-[#00DC82] transition-colors cursor-pointer">Work</a></li>
                <li><a href="#tech" className="hover:text-[#00DC82] transition-colors cursor-pointer">Tech</a></li>
                <li><a href="#contact" className="hover:text-[#00DC82] transition-colors cursor-pointer">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
