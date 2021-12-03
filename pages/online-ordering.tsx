import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function OnlineOrdering() {

    return (
        <Layout imageSrc="/img/stock-dark-chef.jpg" imageAlt="Chef with a dark apron cooking" imageClassName="online-ordering__image">
            <div className="online-ordering">
                <div className="online-ordering__desc">
                    <h1><span>Online</span></h1>
                    <h1><span id="title-letter">O</span>RDERING</h1>
                    <p>Order some of the finest food in Cherry Creek and pick up in person.</p>
                    <div className="btn-container">
                        <div className="btn">
                            <a
                                href='https://app.upserve.com/s/cucina-colore-denver'
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                ORDER NOW
                            </a>
                        </div>
                    </div>
                </div>
                <div className="online-ordering__second-image">
                </div>
            </div>
            <section className="online-ordering__images-contianer">
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
                <p> images of food</p>
            </section>
        </Layout>
    )
}
