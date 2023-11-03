import Link from "next/link";
import Head from 'next/head';
import { useRouter } from 'next/router'; 
import { Col, Row } from 'antd';
import React from 'react';

export default function Header() {
  const router = useRouter(); 

  return (
    <div>
      <Head>
        <title>Personal Blogging App</title>
        <meta name="description" content="Find the best Blogs in your area" />
        <link rel="png" href="/logo.png" />
      </Head>

      <header>
        <div className="logo">Personal Blogging App</div>
        <nav>
          {router.pathname === '/profile' ? ( 
            <>
              <Link href="/auth/login" className="button">
                Logout
              </Link>
              <Link href="/" className="button">Home</Link>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="button">
                Login
              </Link>
              <Link href="/auth/signup" className="button">
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}
