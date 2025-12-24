'use client';

import Link from 'next/link';
import {
    FaBoxOpen,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';
import {BsTwitterX} from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white">
                                <FaBoxOpen size={16} />
                            </div>
                            <h2 className="text-xl font-bold text-white">ParcelX</h2>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Smart logistics platform for fast, secure, and reliable parcel
                            booking and delivery services.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-white">
                                <FaFacebookF />
                            </Link>
                            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-white">
                                <BsTwitterX />
                            </Link>
                            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-white">
                                <FaLinkedinIn />
                            </Link>
                            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-white">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/book" className="hover:text-white">
                                    Book Parcel
                                </Link>
                            </li>
                            <li>
                                <Link href="/track" className="hover:text-white">
                                    Track Order
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-white">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="hover:text-white">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Domestic Delivery</li>
                            <li>International Shipping</li>
                            <li>Express Courier</li>
                            <li>Bulk Shipment</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                                Dhaka, Bangladesh
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-blue-500" />
                                +880 171234 5678
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                support@parcelx.com
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>
                        © {new Date().getFullYear()} <span className="text-white font-medium">ParcelX</span>. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        <Link href="/terms" className="hover:text-white">
                            Terms
                        </Link>
                        <Link href="/privacy" className="hover:text-white">
                            Privacy
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
