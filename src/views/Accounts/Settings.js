import React, { useState, useEffect } from 'react';

import api from '../../api';

const MySettings = () => {
  let refresh = false;
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({})

  const bindUser = (res) => {
    setUser(res)
    setEmail(res.email)
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setUser(user)
    api.users.READ(user._id)
      .then(
        (response) => {
          const res = response.data.data
          bindUser(res)
        }
      )
  }, [!refresh])

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email: email
    }
    const data = {
      id: user._id,
      payload: payload
    }
    api.users.UPDATE(data)
      .then(
        (response) => {
          localStorage.setItem("currentUser", JSON.stringify(response.data.data))
          bindUser(response.data.data)
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }
  return (
    <>
      <div className="card-panel ">
        <h2 className="mb-3 ">My Settings</h2>
        <div className="row flex-column-reverse flex-sm-column-reverse flex-md-row">
          <div className="col-md-8 ">
            <div className="row mb-3 ">
              <div className="col-md-12 ">
                <div className="input-group flex-nowrap ">
                  <span className="input-group-text " id="addon-wrapping "><i className="fas fa-envelope "></i></span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="me@email.com"
                    aria-label="me@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-3 ">
                <button className="btn btn-primary " type="submit" onClick={onSubmit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MySettings