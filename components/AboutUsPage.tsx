import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#425B76] mb-6 leading-tight">
                    The FYAMI Difference
                </h1>
                <p className="text-xl text-[#6D28D9] font-medium max-w-3xl mx-auto">
                    Empowering Your Business for Success in the Digital Age
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                <div>
                    <h2 className="text-2xl font-bold text-[#425B76] mb-4">Welcome to FYAMI</h2>
                    <p className="text-lg text-[#53535B] leading-relaxed mb-6">
                        Where innovation, expertise, and results converge to supercharge your business growth. Established in 2014 in Richmond Upon Thames, Greater London, and now based in Kingston, London, our journey began with a singular mission: to empower forward-thinking businesses with effective strategies in the ever-evolving digital landscape, alleviating the frustrations of outdated approaches.
                    </p>
                </div>
                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-xl">
                    {/* Placeholder for an image - using a relevant Unsplash image */}
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                        alt="Team Collaboration"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#E4E4E7] mb-16">
                <h2 className="text-3xl font-bold text-[#425B76] mb-6">Our Vision: A New Era of Business Success</h2>
                <p className="text-lg text-[#53535B] leading-relaxed mb-6">
                    Guided by the vision of Faye Eldridge, Managing Director of Fyami.com, our foundation is built upon a decade of understanding the challenges that business owners, CEOs, and Sales Directors face. Frustrated by ineffective methods, Faye set out to pioneer a better way—one that harnesses the power of technology while embracing time-tested strategies, simplifying the path to growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                <div className="order-2 md:order-1 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-xl">
                    {/* Placeholder for an image */}
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                        alt="Digital Strategy"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl font-bold text-[#425B76] mb-6">The FYAMI Approach</h2>
                    <h3 className="text-xl text-[#6D28D9] font-semibold mb-4">Blending Tradition and Innovation</h3>
                    <p className="text-lg text-[#53535B] leading-relaxed mb-6">
                        At FYAMI, we transcend the traditional boundaries of a marketing company. We embody a complete sales cycle experience, allowing us to offer unique insights and comprehensive strategies to our clients. Our core focus centers on elevating your new business development and lead generation initiatives. We don't merely increase the quantity of leads and opportunities; we enhance their quality, translating into tangible sales growth.
                    </p>
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-bold text-[#425B76] mb-8 text-center text-balance">Services That Transform: From Lead Generation to Sales Strategy</h2>
                <div className="bg-[#FAF9F6] p-8 rounded-2xl border-l-4 border-[#6D28D9]">
                    <p className="text-lg text-[#53535B] leading-relaxed">
                        FYAMI is your comprehensive partner, offering an array of solutions tailored to your unique needs. From brand style ideas to sales strategy, lead generation to marketing campaigns, our services cover every facet of your growth journey. Our flexible pricing models, including commission-based lead generation and sales close rates, cater to your specific requirements.
                    </p>
                </div>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-[#425B76] mb-6">Empower Your Business with FYAMI</h2>
                <p className="text-lg text-[#53535B] leading-relaxed mb-8">
                    If your goal is to amplify your business, secure more clients, and drive sales, FYAMI is your ally. Reach out to us today to explore how our holistic approach can propel your business to new heights. We offer not just solutions, but a transformative partnership committed to your success.
                </p>
                <p className="text-xl font-bold text-[#6D28D9] mb-8">
                    Get in touch and embark on your journey toward elevated business growth with FYAMI. Your success story begins here.
                </p>
                <a
                    href="/#contact"
                    className="inline-block px-8 py-3 bg-[#425B76] text-white rounded-full text-lg font-semibold hover:bg-[#6D28D9] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Start Growing Today
                </a>
            </div>
        </div>
    );
};

export default AboutUsPage;
