import React from 'react';

const MyExperts = () => {
  return (
    <>
      <div className="card-panel ">
        <h2 className="mb-3 ">My Experts</h2>
        <div className="row">
          <div className="col-md-3 ">
            <div className="expert-block ">
              <figure><img src={require("../../assets/images/user.png")} alt=" " /></figure>
              <span>Steven Kho</span>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="expert-block ">
              <figure><img src={require("../../assets/images/user.png")} alt=" " /></figure>
              <span>Gerard Buttler</span>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="expert-block ">
              <figure><img src={require("../../assets/images/user.png")} alt=" " /></figure>
              <span>Prestin Joseph</span>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="expert-block ">
              <figure><img src={require("../../assets/images/user.png")} alt=" " /></figure>
              <span>Edie Johan</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <div className="d-flex justify-content-start">
              <button className="btn btn-primary me-3" type="submit">Continue</button>
              {/* <button className="btn btn-outline-primary" type="button">View filled data</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyExperts