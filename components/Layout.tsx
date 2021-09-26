import React, { ReactNode } from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children: ReactNode,
    imageAlt: string,
    imageSrc: string,
    imageClassName: string,
}
export default function Layout({ children, imageSrc, imageAlt, imageClassName }: Props) {
    return (
        <div>
            <Header />
            <div className={imageClassName}>
                <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
