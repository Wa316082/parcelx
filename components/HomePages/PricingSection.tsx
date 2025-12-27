'use client';
import { FaCheckCircle } from 'react-icons/fa';
import Link from "next/link";

const plans = [
    {
        name: 'Basic',
        price: '৳120',
        description: 'Best for small parcels',
        features: [
            'Up to 1kg',
            'Standard delivery',
            'Tracking included',
            'Email support',
        ],
    },
    {
        name: 'Standard',
        price: '৳250',
        description: 'Most popular choice',
        popular: true,
        features: [
            'Up to 5kg',
            'Fast delivery',
            'Live tracking',
            'Priority support',
        ],
    },
    {
        name: 'Premium',
        price: '৳500',
        description: 'For business shipments',
        features: [
            'Up to 10kg',
            'Express delivery',
            'Insurance included',
            '24/7 support',
        ],
    },
];

export default function PricingSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Simple & Transparent Pricing
                    </h2>
                    <p className="text-gray-600 mt-2">
                        No hidden fees. Pay only for what you ship.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-8 border bg-white ${
                                plan.popular
                                    ? 'border-blue-600 shadow-xl scale-105'
                                    : 'border-gray-200'
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                              Most Popular
                            </span>
                            )}

                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-4">{plan.description}</p>

                            <div className="text-4xl font-bold mb-6">
                                {plan.price}
                                <span className="text-sm text-gray-500"> / parcel</span>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <FaCheckCircle className="text-blue-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href='/book' className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer text-center block font-semibold">
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
