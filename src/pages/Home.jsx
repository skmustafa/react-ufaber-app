import React from 'react'

const Home = () => {

    document.querySelector('body').classList.remove('bg-brand')

    return (
        <>
            <div className='container mt-5'>
                <div className="row mb-4">
                    <div className="col-12 col-sm-8 offset-sm-2">
                        <h4 className='mb-2 text-center fw-normal'><span className="fw-bold">UPSC</span> PATHSHALA</h4>
                        <div className="card next mt-4">
                            <div className="card-header text-center nextHeader fw-bold">
                                <div>Thank you for taking the first step towards</div>
                                <div>UPSC Preparation</div>
                            </div>
                            <div className="card-body">
                                <div className="row mt-3">
                                    <div className="col-sm-3 text-center">
                                        <img src="https://picsum.photos/200/200" alt="" className='img-fluid' />
                                    </div>
                                    <div className="col-sm-9">
                                        <h5>What's next?</h5>
                                        <div>
                                            <div className='mb-2'>
                                                <i className="fas fa-phone-alt pe-3"></i>
                                                You will get a call within 12 hours.
                                            </div>
                                            <div className='mb-2'>
                                                <i className="fas fa-video  pe-3"></i>
                                                Dont miss this call.Ask for the free Demo.
                                            </div>
                                            <div className='mb-2'>
                                                <i className="fas fa-book-alt pe-3"></i>
                                                Attend the Demo and experience our teaching methods.
                                            </div>
                                            <div className='mb-2'>
                                                <i className="fas fa-percent  pe-3"></i>
                                                Ask if you are eligible for any scholarship or discounts.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2 mt-1">
                    <h4 className="text-center">Our Star Students</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-sm-6 offset-sm-3">
                        <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nesciunt vitae accusamus hic exercitationem. Minus fugiat rerum alias iusto? Quia.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card profileCard">
                                        <div className="card-body p-2">
                                            <div className="row">
                                                <div className="col offset-1">
                                                    <div className="row p-3">
                                                        <div className="col-sm-2">
                                                            <img src="https://picsum.photos/100/100" alt="" className='img-fluid userImg' />
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <h5 className="lead">Akshay Agarwal</h5>
                                                            <h4 className="fw-bolder fsSize">AIR 43 in UPSC CSE 2019</h4>

                                                        </div>
                                                    </div>
                                                    <div className="row p-4">
                                                        <p className='p-2'>"UPSC Pathsala's coverage of current affairs was
                                                            something that i found very helpful.it covered
                                                            everything in General Studies syllabus"</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="card profileCard2">
                                        <div className="card-body p-2">
                                            <div className="row">
                                                <div className="col offset-1">
                                                    <div className="row p-3">
                                                        <div className="col-sm-2">
                                                            <img src="https://picsum.photos/100/100" alt="" className='img-fluid userImg' />
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <h5 className="lead text-white">Akshay Agarwal</h5>
                                                            <h4 className="fw-bolder fsSize">AIR 43 in UPSC CSE 2019</h4>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <p className='text-white p-3'>"UPSC Pathsala's coverage of current affairs was
                                                            something that i found very helpful.it covered
                                                            everything in General Studies syllabus"</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className='text-center'>
                            <p className="text-muted">Our students vouch for us.Hear them speak.</p>
                            <iframe className='mt-2 mb-5' width="100%" height="300" src="https://www.youtube.com/embed/fJEbVCrEMSE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-brand py-5 mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-5 text-center offset-sm-1">
                            <img src="https://picsum.photos/200/200" alt="" className='img-fluid' />
                        </div>
                        <div className="col-12 col-sm-5 text-end">
                            <h4 className="mb-2">Our Newest Features</h4>
                            <p className="mt-4 text-muted">Monthly Current Affairs Magazine - Edition Dec 2020.</p>
                            <button className='btn btn-primary mb-3'>
                                <i className='fas fa-download'></i> Download for FREE here
                            </button>
                            <p className='mt-4'>
                                You will get this monthly magazine <br />
                                when you enroll with us
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row mb-3">
                    <div className="col-6 text-end">
                        <div className='btn btn-outline-dark btn-lg'>
                            Personal Mentorship
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='btn btn-outline-dark btn-lg'>
                        Daily Live Classes
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6 text-end">
                        <div className='btn btn-outline-dark btn-lg'>
                                    Lorem themk  Mock Quizzes
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='btn btn-outline-dark btn-lg'>
                           interview Preparationss
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6 text-end">
                        <div className='btn btn-outline-dark btn-lg'>
                            10000+ hours of video content
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='btn btn-outline-dark btn-lg'>
                           lorem  Hakelp inp filling DAF
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-end">
                        <a href="https://ufaber.com/" className='btn btn-warning btn-lg text-white'>
                            <i className='fas fa-globe pe-2'></i> Website
                        </a>
                    </div>
                    <div className="col-6">
                        <a href="https://youtube.com/" className='btn btn-danger btn-lg'>
                            <i className='fab fa-youtube pe-2'></i> Youtube
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
