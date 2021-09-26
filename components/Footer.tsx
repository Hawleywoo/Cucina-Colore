import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <div>
                        <b>ADDRESS</b>
                        3041 East Third Ave.
                        Cherry Creek North
                        Denver, CO 80206
                    </div>
                    <div>
                        <b>CONTACT</b>
                        303-393-6917
                    </div>
                    <div>
                        <b>HOURS</b>
                        MON-SAT: 11am - 10pm
                        SUN: 11am-9pm
                    </div>
                </div>
                <ContactForm />
            </div>
        </footer>
    )
}
