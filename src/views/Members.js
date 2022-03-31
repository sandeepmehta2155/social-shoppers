import React from 'react'

import LoggedInHeader from '../components/LoggedInHeader'

const Members = () => {
    return (
        <>
            <section className="account-section member-section">
                <div className="container">
                    <div className="member-row">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarSupportedContent" aria-controls="sidebarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i className="fas fa-bars"></i></span>
                        </button>
                        <div className="sidebar collapse navbar-collapse" id="sidebarSupportedContent">
                            <div className="div" id="scrollbar1">
                                <h4>Owned CoCarts</h4>
                                <ul className="sidebar-list">
                                    <li className="active"><a href="#"><span>Title A</span><i className="fas fa-bell"></i></a></li>
                                    <li><a href="#"><span>Title B</span></a></li>
                                    <li><a href="#"><span>Title C</span></a></li>
                                    <li><a href="#"><span>Title D</span></a></li>
                                </ul>
                                <h4>Joined CoCarts</h4>
                                <ul className="sidebar-list">
                                    <li><a href="#"><span>Title A</span></a></li>
                                    <li><a href="#"><span>Title B</span></a></li>
                                    <li><a href="#"><span>Title C</span></a></li>
                                    <li><a href="#"><span>Title D</span></a></li>
                                </ul>
                                <h4>Public CoCarts</h4>
                                <ul className="sidebar-list">
                                    <li><a href="#"><span>Title A</span></a></li>
                                    <li><a href="#"><span>Title B</span></a></li>
                                    <li><a href="#"><span>Title C</span></a></li>
                                    <li><a href="#"><span>Title D</span></a></li>
                                </ul>
                                <h4>Sample title</h4>
                                <ul className="sidebar-list">
                                    <li><a href="#"><span>Title A</span></a></li>
                                    <li><a href="#"><span>Title B</span></a></li>
                                    <li><a href="#"><span>Title C</span></a></li>
                                    <li><a href="#"><span>Title D</span></a></li>
                                </ul>
                                <h4>Sample title</h4>
                                <ul className="sidebar-list">
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                    <li><a href="#"><span>Lipsum lorem</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="member-right-col">
                            <div className="row">
                                <div className="col-md-12 col-lg-9">
                                    <div className="member-area scroller" id="scrollbar2">
                                        <h3>Shopping experts</h3>
                                        <div className="d-flex flex-column">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Steven Kho</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Gerard Buttler</span>
                                                            <span className="desc">Support Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Prestin Joseph</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Edie Johan</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Steven Kho</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Gerard Buttler</span>
                                                            <span className="desc">Support Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Prestin Joseph</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Edie Johan</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Steven Kho</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Gerard Buttler</span>
                                                            <span className="desc">Support Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Prestin Joseph</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Edie Johan</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Steven Kho</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Gerard Buttler</span>
                                                            <span className="desc">Support Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Prestin Joseph</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>
                                                    <div className="expert-block ">
                                                        <a href="#">
                                                            <figure><img src={require("../assets/images/user.png")} alt=" " /></figure>
                                                            <span>Edie Johan</span>
                                                            <span className="desc">Sales Expert</span>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="google-block">
                                        <img className=" d-none d-sm-none d-md-none d-lg-block d-xl-block" src={require("../assets/images/g-adv.jpg")} alt="" />
                                        <img className=" d-block d-sm-block d-md-block d-lg-none d-xl-none" src={require("../assets/images/g-adv-v.jpg")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- account-section ends --> */}
            <div className="product-ad-wrap">
                <div className="container">
                    <h3 className="mb-3">Product Ads</h3>
                    <div className="swiper product-ref">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="product-item">
                                    <div className="offer">Best Seller</div>
                                    <a href="#">
                                        <figure><img src={require("../assets/images/redmi9ASport.jpg")} alt="" /></figure>
                                        <span className="product-title">Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage)</span>
                                        <span className="product-price"><span className="highlight">Rs7,499</span> <span className="line-through">Rs.8,963</span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-item">
                                    <a href="#">
                                        <figure><img src={require("../assets/images/boAt-earpod.jpg")} alt="" /></figure>
                                        <span className="product-title">boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cider Cyan)</span>
                                        <span className="product-price"><span className="highlight">Rs7,499</span> <span className="line-through">Rs.8,963</span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-item">
                                    <a href="#">
                                        <figure><img src={require("../assets/images/one-plus-bullet-wireless.jpg")} alt="" /></figure>
                                        <span className="product-title">Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Reverb Red)</span>
                                        <span className="product-price"><span className="highlight">Rs.1,499</span> <span className="line-through">Rs.1,979</span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-item">
                                    <a href="#">
                                        <figure><img src={require("../assets/images/m12-mobile.jpg")} alt="" /></figure>
                                        <span className="product-title">Samsung Galaxy M12 (Blue,6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime</span>
                                        <span className="product-price"><span className="highlight">Rs.13,499</span> <span className="line-through">Rs.15,979</span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-item">
                                    <a href="#">
                                        <figure><img src={require("../assets/images/redmi9AMetallicBlue.jpg")} alt="" /></figure>
                                        <span className="product-title">Redmi 9A Sport (Metallic Blue, 2GB RAM, 32GB Storage)</span>
                                        <span className="product-price"><span className="highlight">Rs.7,499</span> <span className="line-through">Rs.8,979</span></span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-item">
                                    <a href="#">
                                        <figure><img src={require("../assets/images/redmi9Amidnight.jpg")} alt="" /></figure>
                                        <span className="product-title">Redmi 9A (Midnight Black 2GB RAM 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery</span>
                                        <span className="product-price"><span className="highlight">Rs.7,499</span> <span className="line-through">Rs.8,979</span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                    <img src={require("../assets/images/g-adv-v.jpg")} alt="" />
                </div>
            </div>
        </>
    )
}

export default Members