import React from 'react'
import Layout  from '../components/Layout'
import Script from 'next/script'
import Papa from 'papaparse';


export default function Menu() {

    const getData = async (page: string) => {
        const data = Papa.parse(await fetchCsv(page))
        console.log(data)
        return data
    }

    const fetchCsv = async (page: string) => {
        const response: any = await fetch(page)
        const reader: any = response.body.getReader();
        const result = await reader.read();
        const decoder: any = new TextDecoder('utf-8')
        const csv = await decoder.decode(result.value);
        console.log(csv)
        return csv
    }
    getData('/menus/WINE BTB LIST APRIL 2021 first page.csv')

    return (
        <Layout imageSrc="/img/stock-two-pizzas.jpg" imageAlt="Two pizzas with two glasses of wine" imageClassName="menu__image">
            <div>
                <h1>Menu</h1>
            </div>
        </Layout>
    )
}
