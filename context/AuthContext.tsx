'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface User {
    _id: string;
    name: string;
    email: string;
    role: 'customer' | 'agent' | 'admin';
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/auth/me')
            .then(res => (res.ok ? res.json() : null))
            .then(data => {
                setUser(data?.user || null);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    async function logout() {
        await fetch('/api/auth/logout', { method: 'POST' });
        setUser(null);
        window.location.href = '/login';
    }

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
}
