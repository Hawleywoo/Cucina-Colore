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
            <h3>AT ONE OF DENVER&apos;S/CHERRY CREEK&apos;S </h3>
            <h3>BEST RESTAURANTS</h3>
            <p>CUCINA COLORE IS A MODERN TAKE ON TRADITIONAL ITALIAN CUISINE</p>
            <a>MAKE A RESERVATION</a>
          </div>
        </section>
        <section className="home__reviews">
          <div className="home__reviews--icons">
            <a
              href="https://www.google.com/search?q=Cucina+Colore&oq=Cucina+Colore&aqs=chrome..69i57j69i60j69i61l2j69i59l2&sourceid=chrome&ie=UTF-8#lrd=0x876c7e9791d48bcb:0x4c6aa14e166a6675,1,,,"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGoogle />
            </a>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g33388-d379503-Reviews-Cucina_Colore-Denver_Colorado.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTripadvisor />
            </a>
            <a
              href="https://www.facebook.com/pg/cucinacolorerestaurant/reviews/?ref=page_internal"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.yelp.com/biz/cucina-colore-denver"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaYelp />
            </a>
          </div>
          <h2>CHECK OUT OUR REVIEWS</h2>
        </section>
      </Layout>
    </div>
  )
}

export default Home
