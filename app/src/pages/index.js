import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from './00header';

export default function Page() {
  return (
    <div>
      <Navbar />
      <h1>Howticulture</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
    </div>
  );
}