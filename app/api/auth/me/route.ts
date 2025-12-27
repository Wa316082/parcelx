import {NextRequest, NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';
import User from '@/models/User';

export async function GET(req: NextRequest) {
    const token = req.cookies.get('auth_token')?.value;

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    const user = await User.findById(decoded.userId).select('-password');
    console.log(user)
    return NextResponse.json({ user });
}
