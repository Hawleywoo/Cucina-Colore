import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__divider"></div>
            <div className="footer__image"></div>

            <div className="footer__address-container">
                <div >
                    <div>
                        <h3><b>ADDRESS:</b></h3>
                        <p>3041 East Third Ave.
                        Cherry Creek North
                        Denver, CO 80206</p>
                    </div>
                    <div>
                        <h3><b>CONTACT:</b></h3>
                        <p>303-393-6917</p>
                    </div>
                    <div>
                        <h3><b>HOURS:</b></h3>
                        <p>MON-SAT: 11am - 10pm
                        SUN: 11am-9pm</p>
                    </div>
                </div>
            </div>
            
            <ContactForm />
        </footer>
    )
}
