import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import LoggedInHeader from '../components/LoggedInHeader'
import { toast, ToastContainer } from 'react-toastify'

const ProductSearchResult = () => {
    const params = useParams()
    const [searchList, setSearchList] = useState()
    const [coCarts, setCoCarts] = useState()

    const getProducts = (() => {
        // if (event.target.value.length > 3) {
        //     setSearchList(fuse.search(event.target.value).map(res => res.item))
        // } else {
        //     setSearchList([])
        // }
        axios.get(`wallmart/?search=${params.query}&page=1&limit=50`).then(resp => {
            setSearchList(resp.data.items.Items)
            setCoCarts(resp.data.carts)
        })
    })

    const addToCart = async (product, cart) => {

        let data = {
            cocart: cart._id
        }
        for (let key in product) {
            data[key] = product[key]
        }
        await axios.post("products/", data).then(res => {
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="account-section group-section product-wrapper">
                <div className="container">
                    <div className="member-row">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarSupportedContent" aria-controls="sidebarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="member-right-col full-width">

                            <h4 className="mb-3">Product Search Results for : <u>{params.query}</u></h4>
                            <div className="CoCart-group">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <div>
                                            <div className="row">
                                                {searchList ? searchList.map(product => (
                                                    <div className="col-md-3" key={product._id}>
                                                        <div className="product-item">
                                                            <div className="d-flex w-100 h-100 justify-content-between flex-column">

                                                                <a href="#">
                                                                    <figure><img src={product.ImageUrl} alt={product.Name} /></figure>
                                                                    <span className="product-title">{product.Name}</span>
                                                                    <span className="product-price"><span className="highlight">Price:{product.CurrentPrice} {product.Currency}</span> <span className="line-through">{product.OriginalPrice} {product.Currency}</span></span>
                                                                </a>
                                                                <div className="d-flex w-100 justify-content-start">
                                                                    {/* <div className="ratings"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="c-count">(112 votes)</span></div> */}
                                                                    <div className="dropdown action-dropdown">
                                                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <span>Add to CoCart</span>
                                                                            <i className="fas fa-ellipsis-v"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                            {coCarts ? coCarts.map(item => (
                                                                                <li key={item._id}><a className="dropdown-item" onClick={() => addToCart(product, item)}>{item.label}</a></li>
                                                                            )
                                                                            ) : ""}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )) : <h4 style={{ "text-align": "center" }}>Getting results for you . . . . .</h4>}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-3 col-lg-2">
                                        <div className="card border p-3 mb-3" id="scrollbar3">
                                            <h4>Members</h4>
                                            <div className="cart-products-block">
                                                <div className="cart-product member-block">
                                                    <a href="#">
                                                        <img src={require("../assets/images/user.png")} alt="" />
                                                        <span>Joseph Gordan</span>
                                                    </a>
                                                </div>
                                                <div className="cart-product member-block">
                                                    <a href="#">
                                                        <img src={require("../assets/images/user.png")} alt="" />
                                                        <span>Jenifer Lindsay</span>
                                                    </a>
                                                </div>
                                                <div className="cart-product member-block">
                                                    <a href="#">
                                                        <img src={require("../assets/images/user.png")} alt="" />
                                                        <span>Sammy Ross</span>
                                                    </a>
                                                </div>
                                                <div className="cart-product member-block">
                                                    <a href="#">
                                                        <img src={require("../assets/images/user.png")} alt="" />
                                                        <span>Joseph Gordan</span>
                                                    </a>
                                                </div>
                                                <div className="cart-product member-block">
                                                    <a href="#">
                                                        <img src={require("../assets/images/user.png")} alt="" />
                                                        <span>Jenifer Lindsay</span>
                                                    </a>
                                                </div>
                                                <div className="cart-product member-block">
                                                    <a href="#">
                                                        <img src={require("../assets/images/user.png")} alt="" />
                                                        <span>Sammy Ross</span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="g-adv-desc">
                                            <img src={require("../assets/images/g-adv.jpg")} alt="" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- account-section ends --> */}
            <div className="product-ad-wrap">
                <div className="container">
                    <h3>Related Products</h3>
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

                </div>
            </div>
            {/* <!-- product-ads ends --> */}
        </>
    )
}

export default ProductSearchResult