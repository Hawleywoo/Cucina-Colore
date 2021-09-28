import React from 'react'
import Layout  from '../components/Layout'

export default function Directions() {
    return (
        <Layout imageSrc="/img/stock-wine-fruit.jpg" imageAlt="Wine and glasses with grapes" imageClassName="directions__image">
            <div style={{height: '60vh'}}>
                <h1>Directions</h1>
            </div>
        </Layout>
    )
}
