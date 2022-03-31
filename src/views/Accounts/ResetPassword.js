import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import LoginForm from '../../components/Forms/Login'
import RegisterForm from '../../components/Forms/Register'

const ResetPassword = () => {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')

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
            <LoginForm />
            <RegisterForm />
            <section className="account-section group-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 viewportBox">
                            <div className="card p-3">
                                <h3>Enter email to change your password</h3>
                                <form id="resetPasswordForm" className="cmxform" onSubmit={onSubmit}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your registered email"
                                            aria-label="Enter your registered email"
                                            aria-describedby="basic-addon1"
                                            required
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        //   onClick={onSubmit}
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

export default ResetPassword