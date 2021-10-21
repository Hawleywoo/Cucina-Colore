import React from 'react'
import Layout from '../components/Layout'
import Map from '../components/Map'

export default function Directions() {
    return (
        <Layout imageSrc="/img/stock-wine-fruit.jpg" imageAlt="Wine and glasses with grapes" imageClassName="directions__image">
            <div className="directions">
                <div className="directions__header-container">
                    <h1>Directions</h1>
                    <div className="directions__header-container__address">
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
                <Map />
            </div>
        </Layout>
    )
}