import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Order from '@/models/Order';
import crypto from 'crypto';

export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();

    const trackingId = 'PX' + crypto.randomBytes(4).toString('hex').toUpperCase();

    const order = await Order.create({
        ...data,
        trackingId,
    });

    return NextResponse.json(order);
}

export async function GET() {
    await dbConnect();
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json(orders);
}
