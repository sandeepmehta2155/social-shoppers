import React from 'react';

const MyContacts = () => {
  return (
    <>
      <div className="card-panel">
        <h2 className="mb-3">My Contacts</h2>
        <form className="cmxform" action="#" id="myContactForm" method="post">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user"></i></span>
                <input type="text" name="firstname2" className="form-control" placeholder="First Name" required />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="input-group flex-nowrap ">
                <span className="input-group-text " id="addon-wrapping "><i className="fas fa-user "></i></span>
                <input type="text" name="lastname2" className="form-control" placeholder="Last Name" required />
              </div>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-md-6 ">
              <div className="input-group flex-nowrap ">
                <span className="input-group-text " id="addon-wrapping "><i className="fas fa-envelope "></i></span>
                <input type="email" name="email2" className="form-control" placeholder="me@email.com" required />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="input-group flex-nowrap ">
                <span className="input-group-text " id="addon-wrapping "><i className="fas fa-users"></i></span>
                <select className="form-select" aria-label="gender">
                  <option selected>Select Group</option>
                  <option value="1 ">Contact Group name </option>
                  <option value="2 ">Select from existing one</option>
                </select>

              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label for="">Collect contacts via</label>
                <select className="form-select" aria-label="collect data">
                  <option selected="">Collect contacts via</option>
                  <option value="1">Facebook</option>
                  <option value="2">Email</option>
                  <option value="3">Google</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <div className="d-flex justify-content-start">
                <button className="btn btn-primary me-3" type="submit">Continue</button>
                <button className="btn btn-outline-primary" type="button">View filled data</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default MyContacts