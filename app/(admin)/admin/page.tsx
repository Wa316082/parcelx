import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <div>
            Admin Dashboard Page <Link href="/agent">Agent Home</Link>
        </div>
    );
}

export default Page;