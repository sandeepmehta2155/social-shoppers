import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../api'

import LoggedInHeader from '../components/LoggedInHeader'

const CoCarts = () => {
  const params = useParams();
  const navigation = useNavigate();

  let refresh = false;

  const [show, setShow] = useState(false);
  const [myCoCarts, setMyCoCarts] = useState([]);
  const [joinedCoCarts, setJoinedCoCarts] = useState([]);
  const [publicCoCarts, setPublicCoCarts] = useState([]);

  useEffect(() => {
    api.coCarts.MY()
      .then(
        (response) => {
          const res = response.data.data
          setMyCoCarts(res)
          if (res.length > 0) {
            navigation('/cocarts/' + res[0]._id)
          }
        }
      )
    api.coCarts.JOINED()
      .then(
        (response) => {
          const res = response.data.data
          setJoinedCoCarts(res)
          if (res.length > 0) {
            navigation('/cocarts/' + res[0]._id)
          }
        }
      )
    api.coCarts.PUBLIC()
      .then(
        (response) => {
          const res = response.data.data
          setPublicCoCarts(res)
          if (res.length > 0) {
            navigation('/cocarts/' + res[0]._id)
          }
          setShow(true)
        }
      )
  }, [!refresh])
  return (
    <>
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
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarSupportedContent" aria-controls="sidebarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span><i className="fas fa-bars" /></span>
            </button>
            <div className="sidebar scroller collapse navbar-collapse" id="sidebarSupportedContent">
              {
                show ?
                  (
                    <div className="div" id="scrollbar1">
                      <div className="chat-sidebar">
                        <a href="chat.html"><i className="fas fa-comment-dots" /><span>Chat</span></a>
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
                                      <Link
                                        to={'/cocarts/' + coCart._id}
                                      >
                                        <span>{coCart.label}</span>
                                        <i className="fas fa-bell" />
                                      </Link>
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
                                    <li className={params.id === coCart._id ? 'active' : ''} key={'joinedCoCart-' + index}><Link to={'/cocarts/' + coCart._id}><span>{coCart.label}</span><i className="fas fa-bell"></i></Link></li>
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
                                    <li className={params.id === coCart._id ? 'active' : ''} key={'publicCoCart-' + index}><Link to={'/cocarts/' + coCart._id}><span>{coCart.label}</span><i className="fas fa-bell"></i></Link></li>
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
                <h4><img className="modal-logo" src={require("../assets/images/logo.png")} alt="" /><span>CoCart: </span> Group A</h4>
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
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-globe"></i></span>
                        <input type="url" className="form-control" placeholder="Add Product Url" aria-label="Add product Url" aria-describedby="basic-addon1" />
                      </div>
                      <button className="btn btn-primary" type="button">Add to CoCart</button>
                    </div>
                    <div className="scroller" align="center">
                      <p>Wait a moment...</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2">
                    <p></p>
                    {/* <div className="g-adv-desc">
                                    <img src="images/g-adv.jpg" alt="">
                                </div> */}
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

export default CoCarts
