import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className= "home">
            <div className="home__container">
                    <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-59d56e74-90ad-47d3-b893-5d1b6665011b._CB417386572_.jpg"/>
                
                <div className="home__row">
                    <Product
                    id="123123123" 
                    title="The lean startup" 
                    price={29.99} 
                    image="https://s3-us-west-2.amazonaws.com/justsaywen/books/think_and_grow_rich_book.jpg"
                    rating={3}
                    />
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home
