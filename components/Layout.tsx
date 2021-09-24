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
            <div style={{width: '100vw'}}>
                <Image src={imageSrc} alt={imageAlt} className={imageClassName} layout="fill" />
            </div>
            {children}
            <Footer />
        </div>
    )
}
