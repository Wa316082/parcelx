'use client';

import React from 'react';
import Link from 'next/link';

const dummyOrders = [
    {
        trackingId: 'PX1A2B3C4',
        recipient: 'John Doe',
        status: 'In Transit',
        paymentType: 'Prepaid',
        date: '2025-12-20',
    },
    {
        trackingId: 'PX5D6E7F8',
        recipient: 'Jane Smith',
        status: 'Delivered',
        paymentType: 'COD',
        date: '2025-12-18',
    },
    {
        trackingId: 'PX9G0H1I2',
        recipient: 'Alice Johnson',
        status: 'Pending',
        paymentType: 'Prepaid',
        date: '2025-12-21',
    },
];

export default function CustomerDashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* AuthHeader */}
            <header className="bg-cyan-900 text-white p-6">
                <h1 className="text-2xl font-bold">Welcome, Wasim!</h1>
                <p className="text-sm text-white/80 mt-1">Here’s your parcel overview.</p>
            </header>

            {/* Stats Cards */}
            <section className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                    <p className="text-gray-500 text-sm">Total Orders</p>
                    <p className="text-2xl font-bold mt-2">15</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                    <p className="text-gray-500 text-sm">Delivered</p>
                    <p className="text-2xl font-bold mt-2">10</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                    <p className="text-gray-500 text-sm">In Progress</p>
                    <p className="text-2xl font-bold mt-2">5</p>
                </div>
            </section>

            {/* Recent Orders Table */}
            <section className="p-6">
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-cyan-900 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium">Tracking ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Recipient</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Payment</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {dummyOrders.map((order) => (
                            <tr key={order.trackingId} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4">{order.trackingId}</td>
                                <td className="px-6 py-4">{order.recipient}</td>
                                <td className="px-6 py-4">
                    <span
                        className={`px-2 py-1 rounded text-sm ${
                            order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'Pending'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-blue-100 text-blue-800'
                        }`}
                    >
                      {order.status}
                    </span>
                                </td>
                                <td className="px-6 py-4">{order.paymentType}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/customer/order/${order.trackingId}`}
                                        className="text-cyan-700 hover:underline"
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="p-6">
                <div className="flex gap-4">
                    <Link
                        href="/customer/book"
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                        Book a Parcel
                    </Link>
                    <Link
                        href="/customer/history"
                        className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                        View All Orders
                    </Link>
                </div>
            </section>
        </div>
    );
}
