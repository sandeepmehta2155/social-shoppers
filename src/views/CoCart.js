import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import api from '../api'

import LoggedInHeader from '../components/LoggedInHeader'
import MembersCard from '../components/MembersCard'
import Products from '../components/Products'

const CoCart = () => {
    const params = useParams()
    const navigation = useNavigate()
    const [show, setShow] = useState(false);
    const [coCart, setCoCart] = useState({});
    const [myCoCarts, setMyCoCarts] = useState([]);
    const [joinedCoCarts, setJoinedCoCarts] = useState([]);
    const [chatId, setChatId] = useState("")
    const [publicCoCarts, setPublicCoCarts] = useState([]);
    const [chatMessages, setChatMessages] = useState([])
    const [refresh, setRefresh] = useState(false);

    const getChatMessage = () => {
        api.messages.READ(chatId).then((response) => {
            let data = response.data.data
            data = data.filter(item => item.read === "No")
            setChatMessages(data)
        })
    }

    const getCoCart = (id = null) => {
        api.coCarts.READ(id ? id : params.id)
            .then((response) => {
                setCoCart(response.data.data)
                setChatId(response.data.chatId)
            })
    }

    const changeCart = (id) => {
        if (id !== params.id) {
            api.coCarts.READ(id)
                .then((response) => {
                    // setCoCart(response.data.data)
                    // setChatId(response.data.chatId)
                    window.location.assign(`/cocarts/${id}`)
                })
        }

    }

    const getMyCoCarts = () => {
        api.coCarts.MY()
            .then(
                (response) => {
                    setMyCoCarts(response.data.data)
                }
            )
    }

    const getJoinedCoCarts = () => {
        api.coCarts.JOINED()
            .then(
                (response) => {
                    setJoinedCoCarts(response.data.data)
                }
            )
    }

    const getPublicCoCarts = () => {
        api.coCarts.PUBLIC()
            .then(
                (response) => {
                    setPublicCoCarts(response.data.data)
                    setShow(true)
                }
            )
    }

    const deleteCartProduct = async (id) => {
        await axios.delete(`/products/${id}/`).then(response => {
            toast.success(response.data.message)
            getCoCart()
        })
    }

    const Like = (id) => {
        axios.get(`/products/like/${id}`)
        getCoCart()
    }

    const DisLike = (id) => {
        axios.get(`/products/dislike/${id}`)
        getCoCart()
    }

    useEffect(() => {
        getCoCart()
        getMyCoCarts()
        getChatMessage()
        getJoinedCoCarts()
        getPublicCoCarts()
        setRefresh(!refresh)
    }, [])
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="account-section group-section product-wrapper">
                <div className="container">
                    <div className="s-search">
                        <div className="row">
                            <div className="col-md-3">
                                {/* <!-- <div className="form-group search-group"><input type="text" name="" id="" className="form-control" placeholder="Search our Affiliates for your product"><button type="submit"><i className="fas fa-search"></i></button></div> --> */}
                            </div>
                            <div className="col-md-9">
                                <div className="row align-items-center">
                                    {/* <div className="col-md-6">
                    <h4 className="action-link">Modify Products (
                      <a href="#">Add</a> /
                      <a href="#">Delete</a> )
                    </h4>
                  </div> */}
                                    <div className="col-md-6">
                                        {/* <div className="add-url">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-globe"></i></span>
                        <input type="url" className="form-control" placeholder="Add product Url" aria-label="Add product Url" aria-describedby="basic-addon1" />
                      </div>
                      <button className="btn btn-primary" type="button">Add to CoCart</button>
                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="member-row">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sidebarSupportedContent"
                            aria-controls="sidebarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span><i className="fas fa-bars" /></span>
                        </button>
                        <div className="sidebar scroller collapse navbar-collapse" id="sidebarSupportedContent">
                            {
                                show ?
                                    (
                                        <div className="div" id="scrollbar1">
                                            <div className="chat-sidebar">
                                                <button
                                                    onClick={() => navigation('/chat/' + coCart.chatId)}
                                                >
                                                    <i className="fas fa-comment-dots" /><span>Chat</span>
                                                </button>
                                            </div>
                                            <h4>Owned CoCarts</h4>
                                            <ul className="sidebar-list">
                                                {
                                                    myCoCarts ?
                                                        (
                                                            <>
                                                                {
                                                                    myCoCarts.map((coCart, index) =>
                                                                        <li
                                                                            className={params.id === coCart._id ? 'active' : ''}
                                                                            key={'myCoCart-' + index}
                                                                        >
                                                                            <a onClick={() => changeCart(coCart._id)}>
                                                                                <span>{coCart.label}</span>
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                }
                                                            </>
                                                        )
                                                        :
                                                        <></>
                                                }
                                            </ul>
                                            <h4>Joined CoCarts</h4>
                                            <ul className="sidebar-list">
                                                {
                                                    joinedCoCarts ?
                                                        (
                                                            <>
                                                                {
                                                                    joinedCoCarts.map((coCart, index) =>
                                                                        <li className={params.id === coCart._id ? 'active' : ''}
                                                                            key={'joinedCoCart-' + index}><Link
                                                                                to={'/cocarts/' + coCart._id}><span>{coCart.label}</span><i
                                                                                    className="fas fa-bell"></i></Link></li>
                                                                    )
                                                                }
                                                            </>
                                                        )
                                                        :
                                                        <></>
                                                }
                                            </ul>
                                            <h4>Public CoCarts</h4>
                                            <ul className="sidebar-list">
                                                {
                                                    publicCoCarts ?
                                                        (
                                                            <>
                                                                {
                                                                    publicCoCarts.map((coCart, index) =>
                                                                        <li className={params.id === coCart._id ? 'active' : ''}
                                                                            key={'publicCoCart-' + index}>
                                                                            <a className='btn btn-link' onClick={() => changeCart(coCart._id)}>
                                                                                <span>{coCart.label}</span>
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                }
                                                            </>
                                                        )
                                                        :
                                                        <></>
                                                }
                                            </ul>
                                        </div>
                                    )
                                    :
                                    <></>
                            }
                        </div>
                        <div className="member-right-col">
                            {/* <!-- <h4 className="mb-3">Modify Products</h4> --> */}
                            <div className="group-cart-title">
                                <h4>
                                    <img
                                        className="modal-logo"
                                        src={require("../assets/images/logo.png")}
                                        alt=""
                                    />
                                    <span>CoCart: </span> {coCart ? coCart.label : ''}</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-12 offset-md-12">
                                    {/* <div className="add-url">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-globe"></i></span>
                                    <input type="url" className="form-control" placeholder="Add Product Url" aria-label="Add product Url" aria-describedby="basic-addon1">
                                </div>
                                <button className="btn btn-primary" type="button">Add to CoCart</button>
                            </div> */}
                                </div>
                            </div>
                            <div className="cocart-group">
                                <div className="row">
                                    <div className="col-md-9 col-lg-10">
                                        <div className="add-url">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"><i
                                                    className="fas fa-globe" /></span>
                                                <input type="url" className="form-control" placeholder="Add Product Url"
                                                    aria-label="Add product Url" aria-describedby="basic-addon1" />
                                            </div>
                                            <button className="btn btn-primary" type="button">Add to CoCart</button>
                                        </div>
                                        <div className="scroller">
                                            <div className="row">
                                                {coCart.products ? coCart.products.map(product => (
                                                    <div className="col-md-4" key={product._id}>
                                                        <div className="product-item">
                                                            <ul className="like-option">
                                                                <li className='col-md-3'>
                                                                    <a href="#" onClick={() => Like(product._id)}>
                                                                        <i className="fas fa-thumbs-up" />
                                                                        <span>{product?.like?.length}</span>
                                                                    </a>
                                                                </li>
                                                                <li className='col-md-3'>
                                                                    <a href="#" onClick={() => DisLike(product._id)}>
                                                                        <i className="fas fa-thumbs-down" />
                                                                        <span>{product?.dislike?.length}</span>
                                                                    </a>
                                                                </li>
                                                                <li className='col-md-3'>
                                                                    <button onClick={() => deleteCartProduct(product._id)} className="cart-btn mx-5" type="button">
                                                                        <i className="fa fa-trash"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="d-flex w-100 h-100 justify-content-between flex-column">
                                                                <a href="#">
                                                                    <figure><img src={product?.data?.ImageUrl} alt="" />
                                                                    </figure>
                                                                    <span
                                                                        className="product-title">{product?.data?.Name}</span>
                                                                    <span className="product-price">
                                                                        <span
                                                                            className="highlight">{product?.data?.CurrentPrice} {product?.data?.Currency}
                                                                        </span>
                                                                        <span className="line-through">{product?.data?.OriginalPrice} {product?.data?.Currency}</span>

                                                                    </span>
                                                                </a>

                                                                {/* <button className='btn btn-danger mt-2' onClick={() => deleteCartProduct(product._id)}>Remove from cart</button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )) : <h4>Loading ......</h4>}
                                            </div>
                                            {coCart?.products?.length < 1 ? <h3>No products in coCart</h3> : ""}
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-lg-2">
                                        <div className="card border p-2 mb-3" id="scrollbar3">
                                            <h4>Members</h4>
                                            <div className="cart-products-block">
                                                {
                                                    coCart?.members ?
                                                        coCart?.members.map(member => (
                                                            <div className="cart-product member-block" key={member._id}>
                                                                <a href="#">

                                                                    <img src={member.user.cover ? member.user.cover : require('../assets/images/user.png')} alt="" />
                                                                    <span>{member.user.name}</span>
                                                                </a>
                                                            </div>
                                                        )
                                                        )
                                                        :
                                                        <></>
                                                }
                                            </div>
                                        </div>
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
                    <h3>Blockbuster Deals</h3>
                    {/* <!-- <div className="swiper product-ref">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="product-item">
                            <a href="#">
                                <figure><img src="images/redmi9ASport.jpg" alt=""></figure>
                                <span className="product-title">Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage)</span>
                                <span className="product-price"><span className="highlight">Rs7,499</span> <span className="line-through">Rs.8,963</span></span>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-item">
                            <a href="#">
                                <figure><img src="images/boAt-earpod.jpg" alt=""></figure>
                                <span className="product-title">boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cider Cyan)</span>
                                <span className="product-price"><span className="highlight">Rs7,499</span> <span className="line-through">Rs.8,963</span></span>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-item">
                            <a href="#">
                                <figure><img src="images/one-plus-bullet-wireless.jpg" alt=""></figure>
                                <span className="product-title">Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Reverb Red)</span>
                                <span className="product-price"><span className="highlight">Rs.1,499</span> <span className="line-through">Rs.1,979</span></span>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-item">
                            <a href="#">
                                <figure><img src="images/m12-mobile.jpg" alt=""></figure>
                                <span className="product-title">Samsung Galaxy M12 (Blue,6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime</span>
                                <span className="product-price"><span className="highlight">Rs.13,499</span> <span className="line-through">Rs.15,979</span></span>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-item">
                            <a href="#">
                                <figure><img src="images/redmi9AMetallicBlue.jpg" alt=""></figure>
                                <span className="product-title">Redmi 9A Sport (Metallic Blue, 2GB RAM, 32GB Storage)</span>
                                <span className="product-price"><span className="highlight">Rs.7,499</span> <span className="line-through">Rs.8,979</span></span>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-item">
                            <a href="#">
                                <figure><img src="images/redmi9Amidnight.jpg" alt=""></figure>
                                <span className="product-title">Redmi 9A (Midnight Black 2GB RAM 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery</span>
                                <span className="product-price"><span className="highlight">Rs.7,499</span> <span className="line-through">Rs.8,979</span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div> --> */}
                    <img src={require("../assets/images/g-adv-v.jpg")} alt="" />

                </div>
            </div>
        </>
    )
}

export default CoCart
