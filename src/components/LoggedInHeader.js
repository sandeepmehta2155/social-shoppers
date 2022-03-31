import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Route, Link } from 'react-router-dom'

import axios from 'axios'

import api from '../api'

const LoggedInHeader = () => {
    const navigation = useNavigate()
    const [searchList, setSearchList] = useState([])
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState("")
    const [coCarts, setCoCarts] = useState([])
    const options = {
        keys: [
            "Name",
            "description"
        ]
    }

    const [routes, setRoutes] = useState([
        {
            title: 'Profile',
            path: '/accounts'
        },
        {
            title: 'Members Landing',
            path: '/members'
        },
        {
            title: 'My Subscriptions',
            path: '/cocarts'
        },
        {
            title: 'My Contacts',
            path: '/contacts'
        },
        {
            title: 'My Experts',
            path: '/members'
        },
        {
            title: 'My Settings',
            path: '/accounts'
        },
        {
            title: 'Help',
            path: '/help'
        }
    ])


    // const url = `https://api.impact.com/Mediapartners/IRcoZHKqML7v3208173nTKiVxHdoJh2TM1/Catalogs/ItemSearch?Keyword=Acme`

    // const url = `https://api.awin.com/publishers/1008521/programmes`

    const getProducts = async () => {
        await axios.get(`wallmart/`).then(resp => setProducts(resp.data.items.Items))
    }

    const getCoCarts = async () => {
        await axios.get("http://34.123.15.119/api/cocarts").then(resp => setCoCarts(resp.data.Items))
    }

    let itmes = {};
    useEffect(() => {
        getProducts()
    }, [])

    const Signout = () => {
        api.configurations.SET_CURRENT_USER(null)
        if (window.location.pathname === "/") {
            window.location.reload(false)
        } else {
            navigation('/')
        }
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

    const addToCart = async (product, cart) => {

        let data = {
            coCart: cart._id
        }
        for (let key in product) {
            data[key] = product[key]
        }
        try {
            await axios.post("products/", data).then(res => {
                toast.success(res.data.message)
                // navigation("/cocarts/" + cart._id)
            })
        } catch (error) {
            toast.error("Something went wrong")
        }

    }


    return (
        <>
            <header className="main-header">
                <div className="container">
                    <nav className="navbar navbar-default navbar-expand-lg bg-transparent">
                        {/* <a href="#" className="navbar-brand"><img src={require("../assets/images/logo.png")} alt="logo" /></a> */}
                        <button className="navbar-brand" style={{ background: 'none', border: 'none', outline: 'none' }}
                            onClick={() => navigation('/')}><img src={require("../assets/images/logo.png")}
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
                                                {/* <div className="d-flex w-100 justify-content-start"> */}
                                                {/* <div className="ratings"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="c-count">(112 votes)</span></div> */}

                                                <div className="dropdown action-dropdown">
                                                    <button className="btn dropdown-toggle" type="button"
                                                        id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span>Add to CoCart</span>
                                                        <i className="fas fa-ellipsis-v" />
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        {coCarts ? coCarts.map(cart => (
                                                            <li>
                                                                <button className="dropdown-item"
                                                                    onClick={() => addToCart(item, cart)}>{cart.label}</button>
                                                            </li>
                                                        )) : ""}
                                                    </ul>
                                                </div>
                                                {/* </div> */}
                                            </div>
                                        )
                                        ) : <h2>No data found</h2>}

                                        <div style={{ "text-align": "right" }}>
                                            <button onClick={() => navigation('/productresults/' + query)}
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
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    {/* <a href="join-cocart.html" className="nav-link">Join a CoCart</a> */}
                                    <button className="nav-link" onClick={() => navigation('/cocarts/join')}>Join a
                                        CoCart
                                    </button>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link" onClick={() => navigation('/cocarts/create')}>Create a
                                        CoCart
                                    </button>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle user-link" href="account.html"
                                        id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <img src={require("../assets/images/user.png")} alt="" /> <span>My Account</span></a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            routes ?
                                                routes.map((route, index) =>
                                                    <li key={'routes-' + (index + 1)}>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => navigation(route.path)}
                                                        >
                                                            {route.title}
                                                        </button>
                                                    </li>
                                                )
                                                :
                                                <></>
                                        }
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={Signout}
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- header ends --> */}
        </>
    )
}

export default LoggedInHeader
