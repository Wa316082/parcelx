import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { dbConnect } from '@/lib/db';
import User from '@/models/User';
import { signToken } from '@/lib/auth';

export async function POST(req: Request) {
    await dbConnect();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    if (user.status === 'pending') {
        return NextResponse.json({ error: 'Account pending approval' }, { status: 403 });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = signToken({
        id: user._id,
        role: user.role,
    });

    const res = NextResponse.json({ token, role: user.role });

    res.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    });
    return res;
}
