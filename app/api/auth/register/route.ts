import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { dbConnect } from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
    await dbConnect();

    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const exists = await User.findOne({ email });
    if (exists) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashed,
        role: role || 'dashboard',
        status: role === 'agent' ? 'pending' : 'active',
    });

    return NextResponse.json({ success: true, userId: user._id });
}
