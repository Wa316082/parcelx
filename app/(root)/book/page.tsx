'use client';
import React from 'react';
import Image from 'next/image';
import {FaCheck} from "react-icons/fa6";

export default function Page() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log('booking data', data);
    };

    return (
        <section className="relative min-h-[90vh] flex items-center">
            <Image
                src="/book-bg.jpg"
                alt="ParcelX background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 to-cyan-900/70" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div className="text-white space-y-6">
            <span className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-sm">
              Fast • Secure • Reliable
            </span>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Book Your Parcel <br />
                            <span className="text-amber-400">Delivery in Minutes</span>
                        </h1>

                        <p className="text-white/80 max-w-lg">
                            ParcelX provides cost-efficient, secure, and on-time delivery services
                            to your exact destination without damage or delay.
                        </p>

                        <ul className="space-y-2 text-white/90 text-sm">
                            <li className='flex items-center space-x-1'><FaCheck /><span>Door-to-door delivery</span></li>
                            <li className='flex items-center space-x-1'><FaCheck /><span>Real-time tracking</span></li>
                            <li className='flex items-center space-x-1'><FaCheck /><span>Flexible scheduling</span></li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h3 className="text-white font-semibold mb-3 border-b border-white/20 pb-2">
                                    Sender Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        name="sender"
                                        placeholder="Your full name"
                                        className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg"
                                        required
                                    />
                                    <input
                                        name="email"
                                        placeholder="Email or phone number"
                                        className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg"
                                        required
                                    />
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <h3 className="text-white font-semibold mb-3 border-b border-white/20 pb-2">
                                    Receiver Information
                                </h3>
                                <input
                                    name="recipient"
                                    placeholder="Recipient full name"
                                    className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg"
                                    required
                                />
                                <input
                                    name="deliveryAddress"
                                    placeholder="Delivery full address"
                                    className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-3 border-b border-white/20 pb-2">
                                    Parcel Details
                                </h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <input
                                        name="weight"
                                        type="number"
                                        step="0.01"
                                        placeholder="Weight (kg)"
                                        className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg"
                                    />
                                    <input
                                        name="date"
                                        type="date"
                                        className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg"
                                    />
                                    <select name="type"  className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg">
                                        <option value="">Parcel type</option>
                                        <option>Document</option>
                                        <option>Box</option>
                                        <option>Fragile</option>
                                    </select>
                                </div>
                            </div>

                            <input
                                name="pickupAddress"
                                placeholder="Pickup full address"
                                className="w-full bg-white p-2 outline-none text-gray-800 rounded-lg"
                                required
                            />

                            <div>
                                <h3 className="text-white font-semibold mb-3 border-b border-white/20 pb-2">
                                    Payment Method
                                </h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            defaultChecked
                                            className="peer hidden"
                                        />
                                        <div className="rounded-xl border border-white/30 p-4 peer-checked:border-amber-500 peer-checked:bg-amber-500/10 transition">
                                            <p className="text-white font-medium">Cash on Delivery</p>
                                            <p className="text-white/70 text-sm">
                                                Pay when the parcel is delivered
                                            </p>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="prepaid"
                                            className="peer hidden"
                                        />
                                        <div className="rounded-xl border border-white/30 p-4 peer-checked:border-amber-500 peer-checked:bg-amber-500/10 transition">
                                            <p className="text-white font-medium">Prepaid</p>
                                            <p className="text-white/70 text-sm">
                                                Pay online before pickup
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600 text-cyan-950 font-semibold py-3 rounded-xl transition"
                            >
                                Book Parcel Now
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
