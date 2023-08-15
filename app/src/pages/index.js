import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from './00nav';
import Main from './mainpage/index';

export default function Page() {
  return (
    <div>
      <h1>Howticulture</h1>

      <Main />

    </div>
  );
}