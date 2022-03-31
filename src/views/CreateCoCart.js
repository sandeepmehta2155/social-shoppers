import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api';

import LoggedInHeader from '../components/LoggedInHeader'

const CreateCoCart = () => {
  const navigation = useNavigate();
  let refresh = false;

  const [users, setUsers] = useState([])
  const [label, setLabel] = useState('');
  const [rank, setRank] = useState('');
  const [contactType, setContactType] = useState('')
  const [type, setType] = useState('')
  const [members, setMembers] = useState([]);
  const [addProductPermission, setAddProductPermission] = useState(null);
  const [deleteProductPermission, setDeleteProductPermission] = useState(null);
  const [voteProductPermission, setVoteProductPermission] = useState(null);

  useEffect(() => {
    api.users.LIST()
      .then(response => {
        setUsers(response.data.data)
      })
  }, [!refresh])

  const addMember = (value) => {
    const addedMembers = [...members]
    addedMembers.push(value)
    setMembers(addedMembers)
  }

  const onSubmit = () => {
    const permissions = []
    if (voteProductPermission) permissions.push('Vote Like/Dislike Products')
    if (addProductPermission) permissions.push('Add Products')
    if (deleteProductPermission) permissions.push('Delete Products')

    const payload = {
      label: label,
      rank: rank,
      invitedMembers: members,
      permissions: permissions,
      type: type
    }
    // console.log(payload)
    api.coCarts.CREATE(payload)
      .then(response => {
        console.log(response.data.data)
        navigation('/cocarts')
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  return (
    <>
      <section className="account-section">
        <div className="container">
          <div className="steps step1">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="step-num"><span>Step 1</span></div>
              </div>
              <div className="col-md-9">
                <div className="card step-box">
                  <div className="step-title"><span>Create a Cocart</span></div>
                  <div className="step-body">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon4"><i className="fas fa-users"></i></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Give your CoCart a label"
                        aria-label="Give your CoCart a label"
                        aria-describedby="basic-addon4"
                        onChange={event => {
                          setLabel(event.target.value)
                        }}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon2"><i className="fas fa-user"></i></span>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Sort Your CoCart"
                        aria-label="Rank Your CoCart"
                        aria-describedby="basic-addon2"
                        onChange={event => {
                          setRank(event.target.value)
                        }}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon2"><i className="fas fa-user"></i></span>
                      <select
                        className="form-select"
                        aria-label="Select Cart Type"
                        onChange={event => {
                          setType(event.target.value)
                        }}
                      >
                        <option value="">Select Cart Type</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                      </select>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="steps step2">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="step-num"><span>Step 2</span></div>
              </div>
              <div className="col-md-9">
                <div className="card step-box">
                  <div className="step-title"><span>Invite Friends and Family</span></div>
                  <div className="step-body">
                    <div className="mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={event => {
                          setContactType(event.target.value)
                        }}
                      >
                        <option value="">Select Invitees from My Contacts</option>
                        <option value="1">Individually</option>
                        <option value="2">Contact Group</option>
                      </select>
                    </div>
                    {
                      contactType ?
                        <div className="mb-3">
                          <select
                            className="select form-select"
                            data-mdb-filter="true"
                            data-mdb-option-size="45px"
                            multiple
                            // value={members}
                            onChange={e => setMembers([].slice.call(e.target.selectedOptions).map(item => item.value))}
                          >
                            {
                              users ?
                                users.map((user, index) =>
                                  <option
                                    key={'member-' + (index + 1)}
                                    value={user._id}
                                  >
                                    {user.name}
                                  </option>
                                )
                                :
                                <></>
                            }
                          </select>
                        </div>
                        :
                        <></>
                    }
                    <ul className="social">
                      <li><a href="#"><i className="fas fa-envelope"></i></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="steps step3">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="step-num"><span>Step 3</span></div>
              </div>
              <div className="col-md-9">
                <div className="card step-box">
                  <div className="step-title"><span>Options an Invited Member can have:</span></div>
                  <div className="step-body">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault3"
                        onChange={event => {
                          setVoteProductPermission(event.target.value)
                        }}
                      />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Vote Like/Dislike Products</label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault1"
                        onChange={event => {
                          setAddProductPermission(event.target.value)
                        }}
                      />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Add Products</label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault2"
                        onChange={event => {
                          setDeleteProductPermission(event.target.value)
                        }}
                      />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Delete Products</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="steps step4">
            <div className="row align-items-center">
              <div className="col-md-3">
                {/* <!-- <div className="step-num"><span>Step 4</span></div> --> */}
              </div>
              <div className="col-md-9">
                {/* <div className="card step-box">
                  <div className="step-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group search-group"><input type="text" name="" id="" className="form-control" placeholder="Search our Affiliates for your product"><button type="submit"><i className="fas fa-search"></i></button></div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1"><i className="fas fa-globe"></i></span>
                          <input type="url" className="form-control" placeholder="Paste the URL of the prduct you want to add to the CoCart" aria-label="Paste the URL of the prduct you want to add to the CoCart" aria-describedby="basic-addon1">
                        </div>
                      </div>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                      <button className="btn btn-outline-primary" type="button">Skip</button>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="d-flex justify-content-start">
                      <button className="btn btn-primary me-3" onClick={onSubmit}>Finish</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateCoCart