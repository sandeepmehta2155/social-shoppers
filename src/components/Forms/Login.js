import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import hello from 'hellojs';
import { ToastContainer, toast } from 'react-toastify';
import API from '../../api';

import mobileImage from '../../assets/images/mobile.svg'
import axios from 'axios';
import SocialButton from '../SocialButton'

const LoginForm = () => {
  const navigation = useNavigate()
  const [credential, setCredential] = useState('')
  const [password, setPassword] = useState('')
  const closeRef = useRef(null)

  useEffect(() => {
    hello.on('auth.login', function (auth) {
      // Call user information, for the given network
      hello(auth.network).api('me').then(function (r) {
        // Inject it into the container
        var label = document.getElementById('profile_' + auth.network);
        if (!label) {
          label = document.createElement('div');
          label.id = 'profile_' + auth.network;
          document.getElementById('profile').appendChild(label);
        }
        label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
      });
    });

    hello.init({
      facebook: 70551136725363,
      // facebook: 5155495941205871,
      google: '456854816924-rtstd411923r5umcgmpfdl8bh7t09l5e.apps.googleusercontent.com',
      // google: "697095907189-86llat8rckg9humatf50rmtklkuajsqm.apps.googleusercontent.com"
    }, { redirect_uri: '/' });

  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      credential: credential,
      password: password
    }
    API.users.LOGIN(payload)
      .then(response => {
        const res = response.data.data
        console.log("Res", res)
        API.configurations.SET_CURRENT_USER(res)
        closeRef.current.click()
        setCredential("")
        setPassword("")
        if (window.location.pathname === "/") {
          window.location.reload(false)
        } else {
          navigation('/')
        }
      })
      .catch(error => {
        toast.error("Email/Username or Password is incorrect", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }

  const googleLogin = (user) => {
    try {
      console.log("user", user)
      axios.post("/socials", { email: user?.email }).then(response => {
        API.configurations.SET_CURRENT_USER(response.data.data)
        closeRef.current.click()
        if (window.location.pathname === "/") {
          window.location.reload(false)
        } else {
          navigation('/')
        }
      })
      console.log("ggogle")
      // hello('google').login().then(resp => {
      //   const res = resp.data.data
      //   API.configurations.SET_CURRENT_USER(res)
      //   closeRef.current.click()
      //   navigation('/')
      // })
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const facebookLogin = (user) => {
    try {
      console.log("user", user)
      axios.post("/socials", { email: user?._profile?.email }).then(response => {
        API.configurations.SET_CURRENT_USER(response.data.data)
        closeRef.current.click()
        if (window.location.pathname === "/") {
          window.location.reload(false)
        } else {
          navigation('/')
        }
      })
      // axios.post("/socials/", { "credential": "iamnasir345@gmail.com" })
      // hello('facebook').login().then(loginResp => {
      //   console.log("loginResp", loginResp)
      //   hello('facebook').api("/me").then(resp => {
      // axios.post("/socials", { email: resp.email }).then(response => {
      //   API.configurations.SET_CURRENT_USER(response.data.data)
      //   closeRef.current.click()
      //   if (window.location.pathname === "/") {
      //     window.location.reload(false)
      //   } else {
      //     navigation('/')
      //   }
      // })
      // })
      // })
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <div className="modal contact-modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" ref={closeRef} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <figure className="d-flex justify-content-center">
                  <img className="login form image" src={mobileImage} alt="" />
                </figure>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <h4>
                    <img
                      className="modal-logo"
                      src={require("../../assets/images/logo.png")}
                      alt=""
                    /> Social Shopper
                  </h4>
                </div>
                <h3>Member Sign In</h3>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <form onSubmit={onSubmit}>
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope" /></span>
                    <input
                      type="email"
                      name="loginEmail"
                      className="form-control"
                      placeholder="me@email.com"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      required
                      value={credential}
                      onChange={event => {
                        setCredential(event.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon2"><i className="fas fa-lock" /></span>
                    <input
                      type="password"
                      name="loginPassword"
                      className="form-control"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon2"
                      required
                      value={password}
                      onChange={event => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-6">
                        <button className="btn btn-primary" type="submit">Sign In</button>
                      </div>
                      <div className="col-md-6">
                        <a href="/password/reset">Forgot password?</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="login-options">
              <ul className="login-options">
                <SocialButton
                  className='mr-0'
                  provider="facebook"
                  appId="70551136725363"
                  onLoginSuccess={() => facebookLogin}

                  onLoginFailure={(error) => alert(error)}
                >
                  <a href="#"><i className="fab fa-facebook" /></a>
                </SocialButton>

                <SocialButton
                  className='ml-0'
                  provider="google"
                  appId="456854816924-rtstd411923r5umcgmpfdl8bh7t09l5e.apps.googleusercontent.com"
                  onLoginSuccess={() => googleLogin}
                  onLoginFailure={() => googleLogin}
                >
                  <a href="#"><i className="fab fa-google" /></a>
                </SocialButton>
                <li>
                  {/* <a href="#"><i className="fab fa-facebook" /></a> */}
                </li>
                {/* <li onClick={googleLogin}><a href="#"><i className="fab fa-google" /></a></li> */}
              </ul>
              {/* <button className="fab fa-facebook" type="button" >facebook</button> */}
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default LoginForm
