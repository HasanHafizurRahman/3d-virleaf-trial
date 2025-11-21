import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thanks! We\'ll be in touch soon.');
    };

    return (
        <section id="contact" className="relative py-32 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00DC82] to-[#6C5CE7] bg-clip-text text-transparent">
                        Let's Build Together
                    </h2>
                    <p className="text-xl text-white/60">
                        Ready to architect your digital future?
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                        <label className="block text-sm font-mono text-[#00DC82] mb-2">
                            &gt; Name:
                        </label>
                        <input
                            type="text"
                            className="w-full px-6 py-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00DC82] focus:outline-none transition-all duration-300"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="group">
                        <label className="block text-sm font-mono text-[#00DC82] mb-2">
                            &gt; Email:
                        </label>
                        <input
                            type="email"
                            className="w-full px-6 py-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00DC82] focus:outline-none transition-all duration-300"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="group">
                        <label className="block text-sm font-mono text-[#00DC82] mb-2">
                            &gt; Message:
                        </label>
                        <textarea
                            className="w-full px-6 py-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00DC82] focus:outline-none transition-all duration-300 min-h-[150px] resize-none"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 rounded-xl bg-gradient-to-r from-[#00DC82] to-[#22D3EE] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00DC82]/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                        [ INITIALIZE CONNECTION ]
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
