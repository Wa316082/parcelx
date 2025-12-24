'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaUser, FaLock } from 'react-icons/fa';
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');

        const form = e.currentTarget;
        const email = (form.email as HTMLInputElement).value;
        const password = (form.password as HTMLInputElement).value;

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            setError(data.error || 'Login failed');
            return;
        }

        if (data.user.role === 'admin') router.push('/admin');
        if (data.user.role === 'agent') router.push('/agent');
        if (data.user.role === 'customer') router.push('/customer');
    }

    return (
        <div className="relative min-h-[80vh]">
            {/* Full-page background image */}
            <Image
                src="/login.jpg"
                alt="ParcelX illustration"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-700/90 to-cyan-700/20" />
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Left text block */}
                        <div className="w-full md:w-1/2 text-white p-8 z-10">
                            <h1 className="text-4xl font-bold mb-2">Welcome to ParcelX</h1>
                            <p className="max-w-xs text-sm">
                                Manage shipments, track deliveries and connect with customers — all in one place.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-end z-10">
                            <form
                                onSubmit={handleLogin}
                                className="bg-opacity-95 p-8 rounded-xl shadow-md w-full max-w-md m-6 border border-white"
                            >
                                <h2 className="text-2xl font-bold text-center mb-6 text-white">Login to ParcelX</h2>

                                {error && (
                                    <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">{error}</p>
                                )}

                                <div className="mb-4">
                                    <label className="block text-sm mb-1 text-white">Email</label>
                                    <div className="flex items-center border border-white rounded px-3">
                                        <FaUser className="text-gray-100" />
                                        <input name="email" type="email" required className="w-full p-2 outline-none text-white" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm mb-1 text-white">Password</label>
                                    <div className="flex items-center border border-white rounded px-3">
                                        <FaLock className="text-gray-100" />
                                        <input name="password" type="password" required className="w-full p-2 outline-none text-white" />
                                    </div>
                                </div>

                                <button
                                    disabled={loading}
                                    className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition cursor-pointer"
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            <div className="mt-4 text-sm flex flex-col items-center gap-2 md:flex-row md:justify-between">
                                <p className="text-white">
                                    Don`t have an account?{' '}
                                    <Link href="/register" className="font-medium underline text-white/90 hover:text-white">
                                        Register
                                    </Link>
                                </p>

                                <Link href="/forgot-password" className="text-white/90 underline hover:text-white">
                                    Forgot password?
                                </Link>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
