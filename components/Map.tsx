import React from 'react'

export default function Map() {
    return (
        <div className="map" >
            <iframe 
                width="100%" 
                height="100%" 
                style={{border: 0}}
                loading="lazy" 
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJy4vUkZd-bIcRdWZqFk6hakw&key=AIzaSyCCZJhgNybS2UZE3y_O4f0pTewuJ20joCw">
            </iframe>
        </div>
    )
}
