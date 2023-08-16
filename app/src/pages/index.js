import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from './00nav';
import Main from './mainpage/index';

export default function Page() {
  return (
    <div className="d-flex flex-column align-items-center min-vh-100">
      <div className="container mt-4">
        <h1 className="text-center">How</h1>
        <Main />
      </div>
    </div>
  );
}