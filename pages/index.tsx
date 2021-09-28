import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import { FaGoogle, FaTripadvisor, FaFacebookF, FaYelp } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div >
      <Layout imageSrc="/img/stock-wine.jpg" imageAlt="Wall of bottled wine" imageClassName="home__image">
        <section className="home__reservations" >
          <div className="home__reservations--image">
            <Image src="/img/stock-chef-topping-pizza.jpg" alt="Chef placing toppings on a pizza fresh out of the oven" layout="fill" objectFit="cover" />
          </div>
          <div className="home__reservations--desc" >
            <h1>Come Dine</h1> 
            <h3>  AT ONE OF DENVER&apos;S/CHERRY CREEK&apos;S </h3>
              <h3>BEST RESTAURANTS</h3>
            <p>CUCINA COLORE IS A MODERN TAKE ON TRADITIONAL ITALIAN CUISINE</p>
            <a>MAKE A RESERVATION</a>
          </div>
        </section>
        <section className="home__reviews">
          <div className="home__reviews--icons">
            <FaGoogle />
            <FaTripadvisor />
            <FaFacebookF />
            <FaYelp />
          </div>
          <h2>CHECK OUT OUR REVIEWS</h2>
        </section>
      </Layout>
    </div>
  )
}

export default Home
