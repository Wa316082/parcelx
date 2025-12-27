import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <div>
            Agent Dashboard Page <Link href="/admin">Admin Home</Link>
        </div>
    );
}

export default Page;