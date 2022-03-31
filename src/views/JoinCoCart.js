import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

import LoggedInHeader from '../components/LoggedInHeader'

const JoinCoCart = () => {
  const navigation = useNavigate()
  const [uniqueId, setUniqueId] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      uniqueId: uniqueId
    }
    api.members.JOIN(payload)
      .then(
        (response) => {
          console.log(response.data.data)
          navigation('/cocarts')
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
      <section className="account-section group-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 viewportBox">
              <div className="card p-3">
                <h3>Enter CoCart Unique Invitation Code</h3>
                <form id="invitationForm" className="cmxform" onSubmit={onSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-code"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Unique Code"
                      aria-label="Unique Code"
                      aria-describedby="basic-addon1"
                      required
                      value={uniqueId}
                      onChange={(event) => setUniqueId(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JoinCoCart