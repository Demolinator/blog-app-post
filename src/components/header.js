import { signOut } from "next-auth/react";
import Link from "next/link";
import { Col, Row } from 'antd';
import React from 'react';

export default function Header() {
    return (<header>
        <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">

        <Row>
          <Col span={8}>
            <h1>personal Blog App</h1>
          </Col>

          <Col span={8}></Col>

          <Col span={8}>
            <Link href="/auth/login">
              Login
            </Link>
          </Col>
        </Row> 
      

        </nav>
    </header>);
}


