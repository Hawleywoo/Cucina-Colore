import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">
                    HOME
                </Link>
                <Link href="/online-ordering">
                    ONLINE ORDERING
                </Link>
                <div>
                    <h1>CUCINA</h1>
                    <h1>COLORE</h1>
                </div>
                <Link href="/menu">
                    MENU
                </Link>
                <Link href="/directions">
                    DIRECTIONS
                </Link>
            </nav>
        </header>
    )
}
