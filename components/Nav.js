import React from "react";
import Btn from "./Btn";
import Link from 'next/link';
import './Nav.css'; // the styles import

export default () => (
    <nav>
        <Link href="/" passHref><Btn>Index</Btn></Link>
        <Link href="/second" passHref><Btn>Second</Btn></Link>
    </nav>
);