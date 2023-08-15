import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from './00nav';

export default function Page() {
  return (
    <div>
      <Navbar />
      <h1>Howticulture</h1>
      <Link href="/mainpage">Dashboard</Link>
      <Link href="/about">About</Link>
    </div>
  );
}