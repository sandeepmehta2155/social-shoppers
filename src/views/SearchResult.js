import React from 'react'

import LoggedInHeader from '../components/LoggedInHeader'

const SearchResult = () => {
    return (
        <>
            <section className="account-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-8">
                            <div className="searched-item card border">
                                <h4 className="mb-3"><strong>Your search results are</strong></h4>
                                <div className="row mb-3">
                                    <div className="col-lg-4">
                                        <div className="cart-product">
                                            <a href="#">
                                                <figure><img src={require("../assets/images/redmi9Amidnight.jpg")} alt="" /></figure>
                                                <div className="product-item-wrap">
                                                    <span className="product-title">Redmi 9A (Midnight Black 2GB RAM 32GB Storage) | 2GHz...</span>
                                                    <span className="product-price"><span className="highlight">Rs.7,499</span> <span className="line-through">Rs.8,979</span></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cart-product">
                                            <a href="#">
                                                <figure><img src={require("../assets/images/redmi9ASport.jpg")} alt="" /></figure>
                                                <div className="product-item-wrap">
                                                    <span className="product-title">Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage)</span>
                                                    <span className="product-price"><span className="highlight">Rs7,499</span> <span className="line-through">Rs.8,963</span></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cart-product">
                                            <a href="#">
                                                <figure><img src={require("../assets/images/m12-mobile.jpg")} alt="" /></figure>
                                                <div className="product-item-wrap">
                                                    <span className="product-title">Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage)...</span>
                                                    <span className="product-price"><span className="highlight">Rs.10,499</span> <span className="line-through">Rs.12,963</span></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border p-3">
                                <h4>Your CoCart</h4>
                                <div className="cart-products-block">
                                    <div className="cart-product cart-product-lg">
                                        <figure><img src={require("../assets/images/m12-mobile.jpg")} alt="" /></figure>
                                        <div className="product-item-wrap">
                                            <span className="product-title">Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate</span>
                                            <span className="product-price"><span className="highlight">Rs.10,499</span> <span className="line-through">Rs.12,963</span></span>
                                        </div>
                                        <div className="mobile-row">
                                            <div className="d-flex flex-column"><input type="text" value="1" className="input-sm" /></div>
                                            <div className="d-flex flex-column"><button className="cta-btn" type="button"><i className="fas fa-trash"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="cart-product cart-product-lg">
                                        <figure><img src={require("../assets/images/redmi-activ.jpg")} alt="" /></figure>
                                        <div className="product-item-wrap">
                                            <span className="product-title">Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate</span>
                                            <span className="product-price"><span className="highlight">Rs.10,499</span> <span className="line-through">Rs.12,963</span></span>
                                        </div>
                                        <div className="mobile-row">
                                            <div className="d-flex flex-column"><input type="text" value="1" className="input-sm" /></div>
                                            <div className="d-flex flex-column"><button className="cta-btn" type="button"><i className="fas fa-trash"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="cart-product cart-product-lg">
                                        <figure><img src={require("../assets/images/boAt-earpod.jpg")} alt="" /></figure>
                                        <div className="product-item-wrap">
                                            <span className="product-title">boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cider Cyan)</span>
                                            <span className="product-price"><span className="highlight">Rs7,499</span> <span className="line-through">Rs.8,963</span></span>
                                        </div>
                                        <div className="mobile-row">
                                            <div className="d-flex flex-column"><input type="text" value="1" className="input-sm" /></div>
                                            <div className="d-flex flex-column"><button className="cta-btn" type="button"><i className="fas fa-trash"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="cart-product cart-product-lg">
                                        <figure><img src={require("../assets/images/redmi9Amidnight.jpg")} alt="" /></figure>
                                        <div className="product-item-wrap">
                                            <span className="product-title">Redmi 9A (Midnight Black 2GB RAM 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery</span>
                                            <span className="product-price"><span className="highlight">Rs.7,499</span> <span className="line-through">Rs.8,979</span></span>
                                        </div>
                                        <div className="mobile-row">
                                            <div className="d-flex flex-column"><input type="text" value="1" className="input-sm" /></div>
                                            <div className="d-flex flex-column"><button className="cta-btn" type="button"><i className="fas fa-trash"></i></button></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="card border p-3 mb-4">
                                <h4>Add products to CoCart</h4>
                                <div className="cart-products-block">
                                    <div className="cart-product">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-globe"></i></span>
                                            <input type="url" className="form-control" placeholder="Add Url" aria-label="Add Url" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                                    </div>
                                    <div className="cart-product">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-globe"></i></span>
                                            <input type="url" className="form-control" placeholder="Add Url" aria-label="Add Url" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="d-flex"><button className="btn btn-primary" type="button">Add to CoCart</button></div>
                                    </div>

                                </div>
                            </div>
                            <div className="card border p-3">
                                <h4>Members</h4>
                                <div className="cart-products-block">
                                    <div className="cart-product member-block">
                                        <a href="#">
                                            <img src={require("../assets/images/user.png")} alt="" />
                                            <span>Joseph Gordan</span>
                                        </a>
                                        {/* <!-- <div className="d-flex flex-column"><button className="cta-btn" type="button"><i className="fas fa-plus"></i></button><button className="cta-btn" type="button"><i className="fas fa-trash"></i></button></div> --> */}
                                    </div>
                                    <div className="cart-product member-block">
                                        <a href="#">
                                            <img src={require("../assets/images/user.png")} alt="" />
                                            <span>Jenifer Lindsay</span>
                                        </a>
                                        {/* <!-- <div className="d-flex flex-column"><button className="cta-btn" type="button"><i className="fas fa-plus"></i></button><button className="cta-btn" type="button"><i className="fas fa-trash"></i></button></div> --> */}
                                    </div>
                                    <div className="cart-product member-block">
                                        <a href="#">
                                            <img src={require("../assets/images/user.png")} alt="" />
                                            <span>Sammy Ross</span>
                                        </a>
                                        {/* <!-- <div className="d-flex flex-column"><button className="cta-btn" type="button"><i className="fas fa-plus"></i></button><button className="cta-btn" type="button"><i className="fas fa-trash"></i></button></div> --> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchResult