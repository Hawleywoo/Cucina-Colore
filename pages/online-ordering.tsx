import React from 'react'
import Layout from '../components/Layout'

export default function OnlineOrdering() {

    return (
        <Layout imageSrc="/img/stock-dark-chef.jpg" imageAlt="Chef with a dark apron cooking" imageClassName="online-ordering__image">
            <div className="online-ordering">
                <h1>Online Ordering</h1>
                <a href='https://app.upserve.com/s/cucina-colore-denver'>ORDER NOW</a>
            </div>
        </Layout>
    )
}
