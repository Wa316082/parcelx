'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaBoxOpen, FaTruck } from 'react-icons/fa';
import {useAuth} from "@/context/AuthContext";

export default function Header() {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth();
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white">
                            <FaBoxOpen size={16} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">ParcelX</h1>
                            <p className="text-[10px] text-gray-500 leading-none">
                                Smart Logistics
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/book" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                            Book Parcel
                        </Link>
                        <Link href="/track" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                            Track Order
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                            Pricing
                        </Link>
                        <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                            Support
                        </Link>
                        <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                            Dashboard
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/track"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-yellow-400 text-gray-900 rounded-lg shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                            aria-label="Track order"
                        >
                            <FaTruck size={16} aria-hidden="true" />
                            <span>Track</span>
                        </Link>

                        <Link
                            href="/book"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            aria-label="Book a parcel"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 3H8v4h8V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Book Now</span>
                        </Link>
                        {!user?
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                                aria-label="Sign in"
                            >
                                <span>Sign In</span>
                            </Link>
                            :
                            <button
                                onClick={logout}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                                aria-label="Sign in"
                            >
                                <span>Logout</span>
                            </button>
                        }

                    </div>


                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t bg-white">
                    <div className="px-4 py-4 space-y-4">
                        <Link href="/book" onClick={() => setOpen(false)} className="block font-medium">
                            Book Parcel
                        </Link>
                        <Link href="/track" onClick={() => setOpen(false)} className="block font-medium">
                            Track Order
                        </Link>
                        <Link href="/pricing" onClick={() => setOpen(false)} className="block font-medium">
                            Pricing
                        </Link>
                        <Link href="/support" onClick={() => setOpen(false)} className="block font-medium">
                            Support
                        </Link>

                        <div className="pt-3 flex gap-3">
                            <Link
                                href="/track"
                                onClick={() => setOpen(false)}
                                aria-label="Track order"
                                className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                            >
                                <FaTruck size={14} aria-hidden="true" />
                                <span className="text-sm font-medium">Track</span>
                            </Link>

                            <Link
                                href="/book"
                                onClick={() => setOpen(false)}
                                aria-label="Book now"
                                className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            >
                                <FaBoxOpen size={14} aria-hidden="true" />
                                <span className="text-sm font-semibold">Book Now</span>
                            </Link>
                            {!user?
                            <Link
                                href="/login"
                                onClick={() => setOpen(false)}
                                aria-label="Sign in"
                                className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                            >
                                <span className="text-sm font-medium">Sign In</span>
                            </Link>
                            :
                            <button
                                onClick={() => {logout(); setOpen(false);}}
                                aria-label="Sign out"
                                className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                            >
                                <span className="text-sm font-medium">Logout</span>
                            </button>
                            }
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
}
