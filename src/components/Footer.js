import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <figure><img className="logo" src={require("../assets/images/logo.png")} alt="" /></figure>
                                    <a href="#" className="link mb-3 d-block">About Us</a>
                                    <h4>Follow Us</h4>
                                    <ul className="social">
                                        <li><a target="_blank" href="https://www.facebook.com/SSCoCart"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a target="_blank" href="https://www.instagram.com/socialshopper.app/"><i className="fab fa-instagram"></i></a></li>
                                        <li><a target="_blank" href="https://twitter.com/SSCoCart"><i className="fab fa-twitter"></i></a></li>
                                        <li><a target="_blank" href="https://www.linkedin.com/company/socialshopperinc"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a target="_blank" href="https://www.tiktok.com/@socialshopper.app"><i className="fab fa-tiktok"></i></a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li href="#">
                                            <a href="terms.html">Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Affiliate Agreement</a>
                                        </li>
                                        <li>
                                            <a href="#">Return & Shipping Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <h4>Join our email list</h4>
                                    <form action="">
                                        <div className="form-group"><input type="email" className="form-control" placeholder="Your Email Address" /><button className="submit btn btn-primary"><i className="fas fa-paper-plane"></i></button></div>
                                    </form>
                                </div>
                                <div className="col-sm-6 col-md-4 offset-md-2">
                                    <ul className="d-flex justify-content-end">
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
