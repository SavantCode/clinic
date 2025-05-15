import React from 'react'

const services = [
    {
        title: "Acne & Scarring",
        desc: "Say goodbye to stubborn acne and scarring with our personalized skin treatments.",
        icon: "🧴",
    },
    {
        title: "Hair Restoration",
        desc: "Restore your confidence with our advanced hair regrowth therapies and treatments.",
        icon: "💇‍♂️",
    },
    {
        title: "Anti-Aging Treatments",
        desc: "Achieve youthful, glowing skin with our expert anti-aging solutions including Botox and fillers.",
        icon: "🧖‍♀️",
    },
    {
        title: "Skin Brightening",
        desc: "Even out your skin tone and achieve radiant skin with our brightening solutions.",
        icon: "✨",
    },
    {
        title: "Laser Treatments",
        desc: "Painless and precise laser treatments for hair removal, scars, and pigmentation.",
        icon: "🔬",
    },
    {
        title: "Dermatology Consultations",
        desc: "Expert one-on-one skin consultations tailored to your needs and lifestyle.",
        icon: "📋",
    },
]




const Services = () => {
    return (
        <section id="services" className="mt-28 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold  text-slate-800 mb-3.5">
                Our Services
            </h2>
            <p className="max-w-2xl  text-left text-slate-600 mb-12 text-base">
                At DermaCare Clinic, we offer a comprehensive range of advanced dermatological treatments tailored to your skin and hair needs. 
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 text-center border border-slate-100"
                    >
                        <div className="text-5xl mb-4">{s.icon}</div>
                        <h3 className="text-xl font-semibold text-blue-600">{s.title}</h3>
                        <p className="mt-3 text-slate-600 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Services