import React from 'react'
import Layout  from '../components/Layout'
import Map from '../components/Map'

export default function Directions() {
    return (
        <Layout imageSrc="/img/stock-wine-fruit.jpg" imageAlt="Wine and glasses with grapes" imageClassName="directions__image">
            <div className="directions">
                <h1>Directions</h1>
                <div>
                    ADDRESS AND CONTACT INFO
                </div>
                <Map/>
            </div>
        </Layout>
    )
}
// AIzaSyCCZJhgNybS2UZE3y_O4f0pTewuJ20joCw