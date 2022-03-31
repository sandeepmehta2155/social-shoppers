import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios'

import api from '../../api';

const MyProfile = () => {
  let refresh = false;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [dob, setDOB] = useState('');
  const [avatar, setAvatar] = useState('');
  const [user, setUser] = useState({})

  const bindUser = (res) => {
    setUser(res)
    setFirstName(res.firstName)
    setLastName(res.lastName)
    setEmail(res.email)
    setPhoneNumber(res.phoneNumber)
    setGender(res.gender)
    setAvatar(res.avatar)
    setZipcode(res.zipcode)
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
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      phoneNumber: phoneNumber,
      zipcode: zipcode,
      dob: dob,
      avatar: avatar
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
          toast.success(response.data.message)
        }
      )
      .catch(
        (error) => {
          toast.error(error.response.data.message)
          console.log(error)
        }
      )
  }
  const uploadAvatar = (e) => {
    console.log(e)
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'trucky')
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/storage96/image/upload/`
    const uploadObject = {
      url: cloudinaryURL,
      method: 'POST',
      data: formData,
      headers: {
        Authorization: ''
      }
    }
    axios(uploadObject)
      .then(
        (response) => {
          setAvatar(response.data.secure_url)
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
      <div className="card-panel">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h2 className="mb-3">My Profile</h2>
        <form className="cmxform" id="profileForm" onSubmit={onSubmit}>
          <div className="row flex-column-reverse flex-sm-column-reverse flex-md-row">
            <div className="col-md-8">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user"></i></span>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="First Name"
                      required
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text " id="addon-wrapping "><i className="fas fa-user "></i></span>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                      required
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3 ">
                <div className="col-md-6 ">
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text " id="addon-wrapping "><i className="fas fa-envelope "></i></span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="me@email.com"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div id="datepicker" className="input-group date" data-date-format="mm-dd-yyyy">
                    <span className="input-group-addon input-group-text"><i className="fas fa-calendar"></i></span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="mm/dd/yyyy"
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text " id="addon-wrapping "><i className="fas fa-map-marker-alt"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      value={zipcode}
                      placeholder="Zip Code - ex: 01001"
                      required
                      onChange={(event) => setZipcode(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    aria-label="gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Woman">Woman</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Man">Man</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-phone-alt"></i></span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone - ex 212-555-1212"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="profile-photo" type="button">
                <figure><img src={require("../../assets/images/user.png")} alt=" " /></figure>
              </div>
              {/* <div className="mb-3">
                <label for="formFile" className="form-label">Choose a photo for profile</label>
                <input className="form-control form-control-lg" id="formFile" type="file" />
              </div> */}
              <div className="mb-3">
                <div className="file-upload-wrapper" data-text="Choose an avatar or image">
                  <input
                    name="file-upload-field"
                    type="file"
                    className="file-upload-field"
                    accept="image/*"
                    onChange={(event) => uploadAvatar(event)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <div className="d-flex justify-content-start">
                <button
                  className="btn btn-primary me-3"
                  type="submit"
                  onClick={(event) => onSubmit(event)}
                >
                  Continue
                </button>
                <button className="btn btn-outline-primary" type="button">View Profile Data</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default MyProfile