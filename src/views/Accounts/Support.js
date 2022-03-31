import React from 'react';

const Support = () => {
  return (
    <>
      <div className="card-panel ">
        <div className="row flex-column-reverse flex-sm-column-reverse flex-md-row">
          <div className="col-md-12 ">
            <h2 className="mb-3">Talk to us or Tweet Us</h2>
            <div className="form-group">
              <label for="">List of choices</label>
              <select className="form-select" aria-label="choices">
                <option selected="">Add list of choices</option>
                <option value="1">What I like</option>
                <option value="2">Comments</option>
                <option value="3">Suggestions</option>
                <option value="4">Tech issue</option>
              </select>
            </div>
            <div className="row mb-3 ">
              <div className="col-md-12 ">
                <div className="row">
                  <div className="col-md-6">
                    {/* <label for="" className="mb-2">Please identify your issue needing assistance, your concerns, or your comments to send an Email</label> */}
                    <div className="input-group flex-nowrap mb-3">
                      <textarea name="messages" cols="30" rows="20" className="form-control " placeholder="Your message is limited to 500 words " aria-label="Message " aria-describedby="addon-wrapping "></textarea>
                    </div>
                    <button className="btn btn-primary " type="submit ">Send email</button>
                  </div>
                  <div className="col-md-6">
                    <label for="" className="mb-2">Twitter Handle</label>
                    <div className="input-group flex-nowrap ">
                      <span className="input-group-text " id="addon-wrapping "><i className="fab fa-twitter "></i></span>
                      <input type="email " className="form-control " placeholder="TwitterDM account" aria-label="TwitterDM account" aria-describedby="addon-wrapping " />
                    </div>
                    <div className="form-group">
                      <label for="" className="mb-2">Please identify your issue needing assistance, your concerns, or your comments to send an Tweet</label>
                      <div className="input-group mb-2">
                        <textarea name="messages" cols="30" rows="10" className="form-control twiiter-input" placeholder="Limit your Tweet to 140 characters" aria-label="Limit your Tweet to 140 character " maxlength="140" aria-describedby="addon-wrapping "></textarea>
                      </div>
                      <span className="s-info"> Tweet to 140 characters</span>
                    </div>
                    {/* <div className="form-group">
                      <label for="">List of choices</label>
                      <select className="form-select" aria-label="choices">
                        <option selected="">Add list of choices</option>
                        <option value="1">Tech issue</option>
                        <option value="2">Comments</option>
                        <option value="3">Suggestions</option>
                        <option value="4">What I like</option>
                      </select>
                    </div> */}
                    <button className="btn btn-primary " type="submit ">Send Tweet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support