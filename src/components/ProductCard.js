import React, { useEffect, useState } from 'react'

const ProductCard = (props) => {
  let refresh = false;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(props.product)
  }, [!refresh])

  return (
    <>
      <div className="product-item">
        <ul className="like-option">
          <li><a href="#"><i className="fas fa-thumbs-up"></i> <span>50</span></a></li>
          <li><a href="#"><i className="fas fa-thumbs-down"></i> <span>12</span></a></li>
          {/* <li>
            <a href="#"><i className="fas fa-paper-plane"></i> <span>Share</span></a>
          </li> */}
        </ul>
        <div className="d-flex w-100 h-100 justify-content-between flex-column">

          <a href="#">
            <figure><img src={require("../assets/images/boAt-earpod.jpg")} alt="" /></figure>
            <span className="product-title">boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cider Cyan)</span>
            <span className="product-price"><span className="highlight">Rs7,499</span> <span className="line-through">Rs.8,963</span></span>
          </a>
          {/* <div className="d-flex w-100 justify-content-start">
            <div className="dropdown action-dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span>Add to CoCart</span>
                <i className="fas fa-ellipsis-v"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Cocart 1</a></li>
                <li><a className="dropdown-item" href="#">Cocart 1</a></li>
                <li><a className="dropdown-item" href="#">Cocart 1</a></li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ProductCard