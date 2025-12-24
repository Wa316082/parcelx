'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaBoxOpen, FaTruck } from 'react-icons/fa';

export default function Header() {
    const [open, setOpen] = useState(false);

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
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/track"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500"
                        >
                            <FaTruck size={14} />
                            Track
                        </Link>
                        <Link
                            href="/login"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            Book Now
                        </Link>
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

            {/* Mobile Menu */}
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

                        <div className="pt-3 flex gap-2">
                            <Link
                                href="/track"
                                className="flex-1 text-center py-2 rounded-lg bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                            >
                                Track
                            </Link>
                            <Link
                                href="/login"
                                className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
