import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//eslint-disable-next-line
const regexMobile = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
//eslint-disable-next-line
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const Form = () => {

    const navigate = useNavigate()

    // values
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [designation, setDesignation] = useState('')

    // validators
    const [isInvalidName, setIsInvalidName] = useState(null)
    const [isInvalidMobile, setIsInvalidMobile] = useState(null)
    const [isInvalidEmail, setIsInvalidEmail] = useState(null)

    const handleNameChange = (e) => {
        setName(e.target.value)

        if (e.target.value.length < 4) {
            setIsInvalidName(true)
        } else {
            setIsInvalidName(false)
        }
    }
    const handleMobileChange = (e) => {
        setMobile(e.target.value)

        if (regexMobile.test(e.target.value)) {
            setIsInvalidMobile(false)
        } else {
            setIsInvalidMobile(true)
        }
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)

        if (regexEmail.test(e.target.value)) {
            setIsInvalidEmail(false)
        } else {
            setIsInvalidEmail(true)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/home')
    }
    const handleDesignationClick = (e) => {
        setDesignation(e.target.textContent)
    }
    const isFormInvalid = () => {
        return (
            (isInvalidName === null || isInvalidName === true) ||
            (isInvalidMobile === null || isInvalidMobile === true) ||
            (isInvalidEmail === null || isInvalidEmail === true)
        )
    }

    return (
        <div>
            <div className="card registerForm">
                <div className="card-body">
                    <div className='text-center mb-4'>
                        <h4 className="card-title">Book a Free Demo Class</h4>
                        <p className="card-text text-danger bold">Limited Seats only!</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-4">
                            <input type="text" className={'form-control ' + (isInvalidMobile ? 'is-invalid' : '')} id="floatingMobileNumber" placeholder="Enter Mobile Number" value={mobile} onChange={handleMobileChange} />
                            <label htmlFor="floatingMobileNumber">Mobile Number</label>
                            <div className='invalid-feedback' hidden={isInvalidMobile === false}>
                                Please enter a valid mobile number
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="text" className={'form-control ' + (isInvalidName ? 'is-invalid' : '')} id="floatingFullName" placeholder="Enter Full Name" onChange={handleNameChange} value={name} />
                            <label htmlFor="floatingFullName">Full Name</label>
                            <div className='invalid-feedback' hidden={isInvalidName === false}>
                                Please enter a valid name
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="email" className={'form-control ' + (isInvalidEmail ? 'is-invalid' : '')} id="floatingEmail" placeholder="Enter E-mail ID" onChange={handleEmailChange} value={email} />
                            <label htmlFor="floatingEmail">Email E-mail ID</label>
                            <div className='invalid-feedback' hidden={isInvalidEmail === false}>
                                Please enter a valid name
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label>What describes you best?</label>
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle w-100 text-start text-muted" type="button" id="dropdownOptions" data-bs-toggle="dropdown" aria-expanded="false">
                                    {designation || 'Select Options'}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownOptions">
                                    <li><button onClick={handleDesignationClick} type="button" className="dropdown-item">College Student</button></li>
                                    <li><button onClick={handleDesignationClick} type="button" className="dropdown-item">Working Professional</button></li>
                                    <li><button onClick={handleDesignationClick} type="button" className="dropdown-item">Full time aspirant</button></li>
                                    <li><button onClick={handleDesignationClick} type="button" className="dropdown-item">Other</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-grid mb-3'>
                            <button className='btn btn-primary p-2' disabled={ isFormInvalid() }>
                                Submit
                            </button>
                        </div>
                        <div>
                            <p className='text-muted text-center'>
                                By clicking Submit Button you explicitly solcit a call &
                                <br />
                                email from uFaber
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
