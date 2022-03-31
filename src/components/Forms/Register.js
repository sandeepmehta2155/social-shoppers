import React, { useState, useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import API from '../../api';

import signUpImage from '../../assets/images/register.svg'

const RegisterForm = () => {
  const navigation = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const closeRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: name,
      email: email,
      password: password
    }
    API.users.CREATE(payload)
      .then(response => {
        const res = response.data.data
        API.configurations.SET_CURRENT_USER(res)
        closeRef.current.click()
        navigation('/')
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <>

      <div className="modal contact-modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" ref={closeRef} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5">
                  <img src={signUpImage} alt="Sign Up Form Image" />
                </div>
                <div className="col-md-7">
                  <h3>Register</h3>
                  <form onSubmit={onSubmit}>
                    <div className="input-group mb-4">
                      <span className="input-group-text" id="basic-addon3"><i className="fas fa-user"></i></span>
                      <input
                        type="text"
                        name="sName"
                        className="form-control"
                        placeholder="Full Name"
                        aria-label="name"
                        aria-describedby="basic-addon3"
                        required
                        onChange={event => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-text" id="basic-addon4"><i className="fas fa-envelope"></i></span>
                      <input
                        type="email"
                        name="sEmail"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon4"
                        required
                        onChange={event => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-text" id="basic-addon5"><i className="fas fa-lock"></i></span>
                      <input
                        type="password"
                        name="sPassword"
                        className="form-control"
                        placeholder="Password"
                        aria-label="password"
                        aria-describedby="basic-addon"
                        required
                        onChange={event => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label">
                          I agree to accept policy.
                        </label>
                      </div>
                    </div>
                    <div className="form-group"><button className="btn btn-primary" type="submit">Sign Up</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterForm
