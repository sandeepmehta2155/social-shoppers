import { useNavigate } from 'react-router-dom'

const PageNotFound = (props) => {
    const navigate = useNavigate()


    return (
        <div className="container mt-5 mb-5">
            <div className='d-flex align-items-center justify-content-center'>
                <h1>Page Not Found</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <button className='btn btn-primary' onClick={() => navigate("/")}>Go to Home</button>
            </div>
        </div>
    )
}

export default PageNotFound
