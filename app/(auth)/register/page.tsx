'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        const form = e.currentTarget;
        const fd = new FormData(form);

        const name = (fd.get('name') ?? '').toString().trim();
        const email = (fd.get('email') ?? '').toString().trim();
        const password = (fd.get('password') ?? '').toString();
        const confirm = (fd.get('confirm') ?? '').toString();

        if (!name || !email || !password) {
            setError('Please fill all required fields.');
            setLoading(false);
            return;
        }

        if (password !== confirm) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();
            setLoading(false);

            if (!res.ok) {
                setError(data.error || 'Registration failed.');
                return;
            }

            setSuccess('Registration successful. Redirecting to login...');
            setTimeout(() => router.push('/login'), 1400);
        } catch (err) {
            setLoading(false);
            setError('Network error. Please try again.');
        }
    }

    return (
        <div className="relative min-h-[80vh]">
            <Image src="/login.jpg" alt="ParcelX background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-700/90 to-cyan-700/20" />

            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 text-white p-8 z-10">
                            <h1 className="text-4xl font-bold mb-2">Welcome to ParcelX</h1>
                            <p className="max-w-xs text-sm">
                                Manage shipments, track deliveries and connect with customers — all in one place.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-end z-10">
                            <form
                                onSubmit={handleRegister}
                                className=" bg-opacity-95 p-8 rounded-xl shadow-md w-full max-w-md m-6 border border-white text-white"
                            >
                                <h2 className="text-2xl font-bold text-center mb-6">Create your account</h2>

                                {error && <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">{error}</p>}
                                {success && <p className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">{success}</p>}

                                <div className="mb-4">
                                    <label className="block text-sm mb-1">Full name</label>
                                    <div className="flex items-center border rounded px-3">
                                        <FaUser className="text-gray-100" />
                                        <input name="name" type="text" required className="w-full p-2 outline-none" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm mb-1">Email</label>
                                    <div className="flex items-center border rounded px-3">
                                        <FaEnvelope className="text-gray-100" />
                                        <input name="email" type="email" required className="w-full p-2 outline-none" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm mb-1">Password</label>
                                    <div className="flex items-center border rounded px-3">
                                        <FaLock className="text-gray-100" />
                                        <input name="password" type="password" minLength={6} required className="w-full p-2 outline-none" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm mb-1">Confirm password</label>
                                    <div className="flex items-center border rounded px-3">
                                        <FaLock className="text-gray-100" />
                                        <input name="confirm" type="password" minLength={6} required className="w-full p-2 outline-none" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-2 bg-amber-600 hover:bg-amber-700 rounded text-white font-semibold transition-colors disabled:opacity-50"
                                >
                                    {loading ? 'Creating account...' : 'Register'}
                                </button>

                                <div className="mt-4 text-sm flex flex-col items-center gap-2 md:flex-row md:justify-between">
                                    <p className="text-white">
                                        Already have an account?{' '}
                                        <Link href="/login" className="font-medium underline hover:text-indigo-200">
                                            Login
                                        </Link>
                                    </p>

                                    <Link href="/forgot-password" className="font-medium underline hover:text-indigo-200">
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
