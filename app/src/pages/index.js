import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from './nav';
import Main from './mainpage';
import Layout from './layout';
import cheerio from 'cheerio';


export default function Page() {
  return (
    <Layout>
    <div className="d-flex flex-column align-items-center min-vh-100">
      <div className="container mt-4">
        
        <Main />
      </div>
    </div>
    </Layout>
  );
}