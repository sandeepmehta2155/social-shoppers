import { useEffect, useState } from "react"
import api from '../api'
import LoginForm from '../components/Forms/Login'
import RegisterForm from '../components/Forms/Register'
import UNITYSVG from '../assets/images/unity.svg'


const Home = () => {
    const [user, setUser] = useState()
    // const payload = {
    //     credential: "iamnasir345@gmail.com",
    //     password: "divisible360"
    // }
    useEffect(() => {
        // api.users.LOGIN(payload)
        //     .then(response => {
        //         const res = response.data.data
        //         api.configurations.SET_CURRENT_USER(res)
        //     })
        setUser(api.configurations.GET_CURRENT_USER())
    }, [])
    return (
        <>
            <LoginForm />
            <RegisterForm />
            <section className="banner">
                <div className="container">
                    <div className="static-banner-item">
                        <div className="fixed-item">
                            <h1>Now you can shop online together with</h1>
                            <h2><span className="input"></span></h2>
                        </div>
                        <div className="banner-figure">
                            <img src={UNITYSVG} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- banner ends --> */}
            <section className="information-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-hands-helping"></i></div>
                                <span className="info-text">Build <br />relationships</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-globe-asia"></i></div>
                                <span className="info-text">Shop with anyone <br />anywhere</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-shopping-cart"></i></div>
                                <span className="info-text">Simple Use <br />CoCart</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="info-box">
                                <div className="icon"><i className="fas fa-gift"></i></div>
                                <span className="info-text">Trusted <br />Opinions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- information-section ends --> */}
            {/* <section className="two-column-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="group-cart"></div>
                        </div>
                        <div className="col-md-5">
                            <div className="group-cart-member"></div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="testimonials-section">
                <div className="container">
                    <h2>Customers Testimonials</h2>
                    <div className="swiper testimonials-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>This is the best place to shop that I was looking for quite a while. My
                                            daughter moved away to take her job offer, and CoCart definitely made it so
                                            much easier for us to shop together.</p>
                                    </div>
                                    <figure><img src={require("../assets/images/testimonials/Jane Dzubinski.jpg")}
                                        alt="" /></figure>
                                    <b>Jannie Thomas</b>
                                    <p>This is the best place to shop that I was looking for quite a while. My daughter
                                        moved away to take her job offer, and CoCart definitely made it so much easier
                                        for us to shop together. </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>I absolutely love the CoCart feature from this site! It creates more ways to
                                            spend time with my sister. I feel it helps to grow even closer, and it’s so
                                            convenient to ask her opinions now. I love it and highly recommend it.
                                        </p>
                                    </div>
                                    <figure><img src={require("../assets/images/testimonials/Rita Miller.png")} alt="" />
                                    </figure>
                                    <b>Rita Miller</b>
                                    <p>I absolutely love the CoCart feature from this site! It creates more ways to
                                        spend time with my sister. I feel it helps to grow even closer, and it’s so
                                        convenient to ask her opinions now. I love it and highly recommend it. </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>CoCart is a cool way to shop with my buddies. We are planning a fishing trip
                                            with a couple of friends and we are making a list to buy for the trip so we
                                            don’t forget anything. It’s so much easier than sending pics and links.</p>
                                    </div>
                                    <figure><img src={require("../assets/images/testimonials/Josh Fetterhoff.png")}
                                        alt="" /></figure>
                                    <b>Dan Myers</b>
                                    <p>CoCart is a cool way to shop with my buddies. We are planning a fishing trip with
                                        a couple of friends and we are making a list to buy for the trip so we don’t
                                        forget anything. It’s so much easier than sending pics and links. </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>We just found Social Shopper from Social Media (TikTok). This is the best app
                                            for families to shop. It helps us find the best deals with family effort.
                                            Our kids used to just tell me what to get. Now we actually have a
                                            conversation with them. Love CoCart! </p>
                                    </div>
                                    <figure><img src={require("../assets/images//testimonials/Zoe Breanne.jpg")}
                                        alt="" /></figure>
                                    <b>Zoe Breanne</b>
                                    <p>We just found Social Shopper from Social Media (TikTok). This is the best app for
                                        families to shop. It helps us find the best deals with family effort. Our kids
                                        used to just tell me what to get. Now we actually have a conversation with them.
                                        Love CoCart! </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>I love CoCart. Their website is so secure. Now I don’t have to share my
                                            account with anyone anymore. It is so easy to use. Now my kids can add
                                            products to CoCart but they can’t buy it without me. I also like the voting
                                            features because it’s easier to see what they like. It makes it a lot more
                                            fun to shop with my kids.</p>
                                    </div>
                                    <figure><img src={require("../assets/images/testimonials/Koffi Adziwonou.jpg")}
                                        alt="" /></figure>
                                    <b>Koffi Adziwonou</b>
                                    <p>I love CoCart. Their website is so secure. Now I don’t have to share my account
                                        with anyone anymore. It is so easy to use. Now my kids can add products to
                                        CoCart but they can’t buy it without me. I also like the voting features because
                                        it’s easier to see what they like. It makes it a lot more fun to shop with my
                                        kids. </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="block">
                                    <div className="overlay">
                                        <p>I used to think online shopping was very boring. I always found it annoying
                                            to have to create and share my wishlist. I used to hate it. But found this
                                            new way to shop with my friends so that we can see the products at the same
                                            time. Love CoCart! I really enjoy online shopping now and will definitely
                                            keep using this site. I hope more brands are available soon!!
                                        </p>
                                    </div>
                                    <figure><img src={require("../assets/images/testimonials/Linda Wu.png")} alt="" />
                                    </figure>
                                    <b>Linda Wu</b>
                                    <p>I used to think online shopping was very boring. I always found it annoying to
                                        have to create and share my wishlist. I used to hate it. But found this new way
                                        to shop with my friends so that we can see the products at the same time. Love
                                        CoCart! I really enjoy online shopping now and will definitely keep using this
                                        site. I hope more brands are available soon!! </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>
            {/* <!-- testimonials-section ends --> */}
            <div className="ecommerce-section">
                <div className="container">
                    <div className="counter-show">
                        <h2 className="counter"><span>+</span><span className="timer count-number">10000000</span> of
                            products are available at:</h2>
                    </div>
                    <div className="swiper client-logos">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={require("../assets/images/etsy.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/ebay.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/target.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/walmart.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/amazon.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/etsy.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/ebay.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/target.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/walmart.png")} alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src={require("../assets/images/amazon.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
