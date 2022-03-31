import React, { useState } from 'react';

const MySubscriptions = () => {
  const [card, setCard] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [paymentType, setPaymentType] = useState('')
  return (
    <>
      <div className="card-panel">
        <h2 className="mb-3">My Subscription</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="nav flex-column nav-pills nav-pills-in me-3" id="v--pills" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-pills--plan1" data-bs-toggle="pill" data-bs-target="#v-pills-plan1" type="button" role="tab" aria-controls="plan1" aria-selected="false">Free/Basic</button>
              <button className="nav-link " id="v-pills--plan2" data-bs-toggle="pill" data-bs-target="#v-pills-plan2" type="button" role="tab" aria-controls="plan2" aria-selected="true">Personal</button>
              <button className="nav-link" id="v-pills--plan3" data-bs-toggle="pill" data-bs-target="#v-pills-plan3" type="button" role="tab" aria-controls="plan3" aria-selected="false">Personal Enhanced</button>
              <button className="nav-link disabled" id="v-pills--plan4" data-bs-toggle="pill" data-bs-target="#v-pills-plan4" type="button" role="tab" aria-controls="plan4" aria-selected="false">Private Event</button>
              <button className="nav-link disabled" id="v-pills--plan5" data-bs-toggle="pill" data-bs-target="#v-pills-plan5" type="button" role="tab" aria-controls="plan5" aria-selected="false">Public Event</button>
              <button className="nav-link disabled" id="v-pills--plan6" data-bs-toggle="pill" data-bs-target="#v-pills-plan6" type="button" role="tab" aria-controls="plan6" aria-selected="false">Influencer</button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content" id="v--pills">
              <div className="tab-pane fade show active" id="v-pills-plan1" role="tabpanel" aria-labelledby="v-pills--plan1">
                <div className="row">
                  <div className="col-md-12">
                    <h4>This Basic plan is <span className="text-pink">Free!</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, autem.</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-plan2" role="tabpanel" aria-labelledby="v-pills--plan2">
                <h4>Personal</h4>
                <p>You are subscribed to <span className="text-lg">Personal Plan</span>. Your plan will expire <code>12-12-2022</code></p>

                <div className="v-card">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Your Card Type</label>
                        <select className="form-select" aria-label="gender" value={card}>
                          <option selected="">Select Card</option>
                          <option value="1">Master Card</option>
                          <option value="2">Visa</option>
                          <option value="3">Discover</option>
                          <option value="4">American Express</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group"><label for="">Name on card</label><input type="text" placeholder="Name on card" className="form-control" /></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group"><label for="">Card Number</label><input type="text" placeholder="Card Number" className="form-control" /></div>
                    </div>
                    <div className="col-lg-6">
                      <label for="">Expiration Date</label>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <select className="form-select" aria-label="Year" value={year}>
                              <option selected>Year</option>
                              <option value="1">2022</option>
                              <option value="2">2023</option>
                              <option value="3">2025</option>
                              <option value="4">2026</option>
                              <option value="5">2027</option>
                              <option value="6">2028</option>
                              <option value="7">2029</option>
                              <option value="8">2030</option>
                              <option value="9">2031</option>
                              <option value="10">2032</option>
                              <option value="11">2033</option>
                              <option value="12">2034</option>
                              <option value="13">2035</option>
                              <option value="14">2036</option>
                              <option value="15">2037</option>
                              <option value="16">2038</option>
                              <option value="17">2039</option>
                              <option value="18">2040</option>
                            </select>
                          </div>

                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <select className="form-select" aria-label="Month" value={month}>
                              <option selected>Month</option>
                              <option value="1">01</option>
                              <option value="2">02</option>
                              <option value="4">04</option>
                              <option value="5">05</option>
                              <option value="6">06</option>
                              <option value="7">07</option>
                              <option value="8">08</option>
                              <option value="9">09</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                          <div className="form-group">
                            <select className="form-select" aria-label="Date">
                              <option selected>Date</option>
                              <option value="1">01</option>
                              <option value="2">02</option>
                              <option value="3">03</option>
                            </select>

                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="">Pay Sources</label>
                        <select className="form-select" aria-label="gender" value={paymentType}>
                          <option selected="">Pay Sources</option>
                          <option value="1">PayPal</option>
                          <option value="2">ApplePay</option>
                          <option value="3">GooglePay</option>
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
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-plan3" role="tabpanel" aria-labelledby="v-pills--plan3">
                <h4>Plan C</h4>
              </div>
              <div className="tab-pane fade" id="v-pills-plan4" role="tabpanel" aria-labelledby="v-pills--plan4">
                <h4>Private Plan</h4>
              </div>
              <div className="tab-pane fade" id="v-pills-plan5" role="tabpanel" aria-labelledby="v-pills--plan5">
                <h4>Public Plan</h4>
              </div>
              <div className="tab-pane fade" id="v-pills-plan6" role="tabpanel" aria-labelledby="v-pills--plan6">
                <h4>Influencer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MySubscriptions