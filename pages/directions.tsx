import React from 'react'
import Layout  from '../components/Layout'

export default function Directions() {
    return (
        <Layout imageSrc="/img/stock-wine-fruit.jpg" imageAlt="Wine and glasses with grapes" imageClassName="directions__image">
            <div className="directions">
                <h1>Directions</h1>
                <div>
                    ADDRESS AND CONTACT INFO
                </div>
                <div>
                    MAP COMPONENT
                    <iframe 
                        width="600" 
                        height="450" 
                        style="border:0" 
                        loading="lazy" 
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJy4vUkZd-bIcRdWZqFk6hakw&key=AIzaSyCCZJhgNybS2UZE3y_O4f0pTewuJ20joCw">
                    </iframe>
                </div>
            </div>
        </Layout>
    )
}
// AIzaSyCCZJhgNybS2UZE3y_O4f0pTewuJ20joCw