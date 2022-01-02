import React from 'react'
import Form from '../components/Form'

const Registration = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1">
                    <div className='row'>
                        <div className="col-sm-6 mt-5">
                            <h4 className='mb-3'>UPSC PATHSHALA</h4>
                            <h1 className='mb-5'>Best Online Coaching for UPSC Preparation</h1>
                            <img src="https://picsum.photos/600/300" alt="" className='img-fluid d-none d-sm-block' />
                        </div>
                        <div className="col-sm-6">
                            <Form />
                            <img src="https://picsum.photos/600/300" alt="" className='img-fluid d-block d-sm-none mt-5' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration
