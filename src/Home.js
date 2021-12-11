import React from 'react';
import './Home_Style.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://media.wired.com/photos/5c9040ee4950d24718d6da99/191:100/w_2400,h_1256,c_limit/shoppingcart-1066110386.jpg" alt=""
                />


                <div className="home_row">
                    <Product
                        id="49876594"
                        title="Apple watch series 7"
                        price={429.99}
                        image="https://cdna.artstation.com/p/marketplace/presentation_assets/000/045/206/large/file.png?1542544096"
                        rating={5} />
                    <Product
                        id="49538094"
                        title="Marshall Speaker"
                        price={239.0}
                        rating={4}
                        image="https://www.fortress.com.hk/medias/Marshall-Emberton-Sp-12084441.jpg?context=bWFzdGVyfGZyb250cHJkfDE5NjUyNHxpbWFnZS9qcGVnfGZyb250cHJkL2hhMy9oNGEvOTU1MjM0MTQzNDM5OC5qcGd8NzA1NGNkNGQ0NmVjMjg1MTk3OGVlNjEyZDQwZGQzY2NjYTM3ZjRkM2Q0MzQ1M2VjN2EzMDM4Yzc2NjlmNDczOQ" />


                </div>
                <div className="home_row">
                    <Product
                        id="4903850"
                        title="Adidas Yeezy"
                        price={399.99}
                        rating={3}
                        image="https://cdn.flightclub.com/TEMPLATE/800389/1.jpg" />
                    <Product
                        id="23445930"
                        title="Beats Headphone"
                        price={198.99}
                        rating={5}
                        image="https://media.kohlsimg.com/is/image/kohls/3996548_Ivory?wid=1200&hei=1200&op_sharpen=1"

                    />
                    <Product
                        id="3254354345"
                        title="The Jungle Book"
                        price={98.99}
                        rating={4}
                        image="https://lumiere-a.akamaihd.net/v1/images/p_thejunglebook2016_19751_6b8cfcec.jpeg" />

                </div>
                <div className="home_row">
                    <Product
                        id="90829332"
                        title="Playstation 5"
                        price={1094.98}
                        rating={4}
                        image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430161_sd.jpg;maxHeight=640;maxWidth=550"
                    />

                </div>
            </div>

        </div>
    )
}

export default Home
