'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaUser, FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // updated handleLogin (replace the existing function)
    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = (formData.get('name') ?? '').toString();
        const email = (formData.get('email') ?? '').toString();
        const password = (formData.get('password') ?? '').toString();
        const confirmPassword = (formData.get('confirmPassword') ?? '').toString();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, name }),
        });

        const data = await res.json();
        console.log(data);
        setLoading(false);

        if (!res.ok) {
            setError(data.error || 'Invalid login credentials');
            return;
        }
        router.push('/login');
    }


    return (
        <section className="relative min-h-screen flex items-center justify-center">
            <Image
                src="/login.jpg"
                alt="ParcelX login"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/90 via-cyan-900/80 to-cyan-800/60" />

            <div className="relative z-10 w-full max-w-7xl px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="text-white space-y-5">
                    <span className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-sm">
                      Secure Logistics Platform
                    </span>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Welcome to <span className="text-amber-400">ParcelX</span>
                        </h1>

                        <p className="text-white/80 max-w-md">
                            Manage shipments, track deliveries, and operate logistics
                            efficiently.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <form
                            onSubmit={handleLogin}
                            className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl"
                        >
                            <h2 className="text-2xl font-bold text-center mb-6 text-white">
                               Create Your Account
                            </h2>

                            {error && (
                                <p className="bg-red-500/20 text-red-200 p-2 rounded mb-4 text-sm">
                                    {error}
                                </p>
                            )}
                            <div className="mb-4">
                                <label className="block text-sm text-white/90 mb-1">
                                    Full Name
                                </label>
                                <div className="flex items-center gap-2 bg-white/90 rounded-lg px-3">
                                    <FaUser className="text-gray-500" />
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-transparent p-2 outline-none text-gray-800"
                                        placeholder="Your full name"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm text-white/90 mb-1">
                                    Email / Phone
                                </label>
                                <div className="flex items-center gap-2 bg-white/90 rounded-lg px-3">
                                    <FaUser className="text-gray-500" />
                                    <input
                                        name="email"
                                        type="text"
                                        required
                                        className="w-full bg-transparent p-2 outline-none text-gray-800"
                                        placeholder="Your email or phone"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm text-white/90 mb-1">
                                    Password
                                </label>
                                <div className="flex items-center gap-2 bg-white/90 rounded-lg px-3">
                                    <FaLock className="text-gray-500" />
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full bg-transparent p-2 outline-none text-gray-800"
                                        placeholder="Your password"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm text-white/90 mb-1">
                                    Confirm Password
                                </label>
                                <div className="flex items-center gap-2 bg-white/90 rounded-lg px-3">
                                    <FaLock className="text-gray-500" />
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        className="w-full bg-transparent p-2 outline-none text-gray-800"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                            </div>

                            <button
                                disabled={loading}
                                className="w-full bg-amber-500 hover:bg-amber-600 text-cyan-950 font-semibold py-3 rounded-xl transition"
                            >
                                {loading ? 'Signing in...' : 'Login'}
                            </button>

                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                                <p className="text-white/80">
                                   Already have an account?{' '}
                                    <Link href="/login" className="underline hover:text-white">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
