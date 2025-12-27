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
            setError(data.error || 'Invalid login credentials');
            return;
        }
        if (data.role === 'customer') router.push('/dashboard');

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
                                Sign in to your account
                            </h2>

                            {error && (
                                <p className="bg-red-500/20 text-red-200 p-2 rounded mb-4 text-sm">
                                    {error}
                                </p>
                            )}

                            <div className="mb-4">
                                <label className="block text-sm text-white/90 mb-1">
                                    Email address
                                </label>
                                <div className="flex items-center gap-2 bg-white/90 rounded-lg px-3">
                                    <FaUser className="text-gray-500" />
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-transparent p-2 outline-none text-gray-800"
                                        placeholder="you@example.com"
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
                            <button
                                disabled={loading}
                                className="w-full bg-amber-500 hover:bg-amber-600 text-cyan-950 font-semibold py-3 rounded-xl transition"
                            >
                                {loading ? 'Signing in...' : 'Login'}
                            </button>

                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                                <p className="text-white/80">
                                    Don’t have an account?{' '}
                                    <Link href="/register" className="underline hover:text-white">
                                        Register
                                    </Link>
                                </p>

                                <Link
                                    href="/forgot-password"
                                    className="underline text-white/80 hover:text-white"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
