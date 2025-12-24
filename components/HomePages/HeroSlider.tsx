'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const slides = [
    {
        title: 'Fast & Reliable Parcel Delivery',
        subtitle: 'Ship your parcels anywhere with confidence',
        image: '/slider/slide1.webp',
    },
    {
        title: 'Smart Logistics for Everyone',
        subtitle: 'Easy booking, real-time tracking, fair pricing',
        image: '/slider/slide2.jpg',
    },
    {
        title: 'Delivering Beyond Borders',
        subtitle: 'Domestic & international shipping made simple',
        image: '/slider/slide3.jpg',
    },
];

export default function HeroSlider() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[80vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === active ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative z-10 h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl">
                                {slide.title}
                            </h1>
                            <p className="text-lg text-gray-200 mb-6 max-w-xl">
                                {slide.subtitle}
                            </p>

                            <div className="flex gap-4">
                                <Link
                                    href="/book"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Book Parcel
                                    <FaArrowRight />
                                </Link>
                                <Link
                                    href="/track"
                                    className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black"
                                >
                                    Track Order
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-3 h-3 rounded-full ${
                            active === i ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
