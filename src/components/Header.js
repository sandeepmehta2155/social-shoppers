import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import api from '../api'

const Header = (props) => {
    const [searchList, setSearchList] = useState([])
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState("")
    const [coCarts, setCoCarts] = useState([])
    const navigate = useNavigate()
    const options = {
        keys: [
            "Name",
            "description"
        ]
    }

    function navigateToAccount() {
        navigate('/accounts')
    }

    const getProducts = async (event) => {
        await axios.get(`wallmart/`).then(resp => setProducts(resp.data.Items))
    }

    const handleChange = ((event) => {
        if (event.target.value.length === 0) {
            setSearchList([])
        } else if (event.target.value.length > 3) {
            setQuery(event.target.value)
            axios.get(`wallmart/?search=${event.target.value}&page=1&limit=15`).then(resp => {
                setSearchList(resp.data.items.Items)
                setCoCarts(resp.data.carts)
            })
        }
    })

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <header className="main-header">
            <div className="container">
                <nav className="navbar navbar-default navbar-expand-lg bg-transparent">
                    <button className="navbar-brand" style={{ background: 'none', border: 'none', outline: 'none' }}
                        onClick={() => navigate('/')}><img src={require("../assets/images/logo.png")}
                            alt="logo" /></button>
                    <div className="search-area">
                        <div className="search-box ">
                            <input className="form-control" placeholder="Search Here..." onChange={handleChange} />
                            <button className="btn btn-primary search-btn"><i className="fas fa-search" />
                            </button>
                        </div>
                        {searchList.length > 0 ?
                            <div id="keyword-searcher">
                                <div className="cart-products-block">
                                    {searchList ? searchList.map((item, index) => (
                                        <div className="cart-product" key={index}>
                                            <a href={item.Url} target="_blank">
                                                <img src={item.ImageUrl} alt={item.Name} />
                                                <span>{item.Name}
                                                    <br /> price:{item.CurrentPrice} {item.Currency}</span>
                                            </a>
                                            <div className="dropdown action-dropdown">
                                                <button className="btn dropdown-toggle" type="button"
                                                    data-bs-toggle="modal"
                                                    aria-expanded="false" data-bs-target="#login">
                                                    <span>Add to CoCart</span>
                                                    <i className="fas fa-ellipsis-v" />
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                </ul>
                                            </div>
                                            {/* <div className="d-flex w-100 justify-content-start"> */}
                                            {/* <div className="ratings"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="c-count">(112 votes)</span></div> */}

                                            {/* </div> */}
                                        </div>
                                    )
                                    ) : <h2>No data found</h2>}

                                    <div className="d-flex">
                                        <button onClick={() => navigate('/productresults/' + query)}
                                            className="btn btn-link justify-content-end">More Results
                                        </button>
                                    </div>
                                </div>
                            </div>
                            : ""}
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar icon-bar-1" />
                        <span className="icon-bar icon-bar-2" />
                        <span className="icon-bar icon-bar-3" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item join-btn">
                                <a href="#" className="nav-link">Join a CoCart</a>
                            </li>
                            <li className="nav-item nav-credentials">
                                <button type='button' id='login-button' data-bs-toggle="modal" data-bs-target="#login" className="nav-link">Sign In</button>
                            </li>
                            <li className="nav-item nav-credentials">
                                <button type='button' id='register-button' data-bs-toggle="modal" data-bs-target="#register" className="nav-link">Free Sign Up</button>
                                {/* <button className="nav-link" onClick={navigateToAccount}>Free Sign Up</button> */}
                            </li>

                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header
