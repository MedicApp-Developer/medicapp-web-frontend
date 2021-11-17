import React from 'react'
import AppLayout from '../../../layout/AppLayout';
import DENTAL_IMAGE from '../../../assets/images/dental.png';
import APP_STORE_IMAGE from '../../../assets/images/app-store.png';
import GOOGLE_APP_IMAGE from '../../../assets/images/google-play.png';
import APP_IMAGE from '../../../assets/images/app.png'
import { Link } from 'react-router-dom';

function Home() {

    const href = "";

    return (
        <AppLayout>
                  <section class="hero-section">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-12 col-xl-3">
                                <h1>Lorem Ipsum 
                                    Dolor
                                </h1>
                                <Link to="/select-registeration-type" class="btn btn-light" href={href}>Register</Link>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section class="search-section">
                        <div class="container">
                            <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-10">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Hospital</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Doctor</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <form>
                                        <div class="form-group position-relative">
                                            <input type="email" class="form-control" />
                                            <button class="btn btn-light" type="submit">Search</button>
                                            <span class="icon-search"></span>
                                        </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <form>
                                        <div class="form-group position-relative">
                                            <input type="email" class="form-control" />
                                            <button class="btn btn-light" type="submit">Search</button>
                                            <span class="icon-search"></span>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section class="find-section">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-12">
                                <h2 class="text-center">Find Specialist</h2>
                                <div class="carousel-wrap">
                                    <div class="owl-carousel">
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img class="img-fluid" src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img class="img-fluid" src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="item">
                                        <div class="card">
                                            <div class="card-body">
                                                <img class="img-fluid" src={DENTAL_IMAGE} alt="dental" />
                                                <h5>Dental Care</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section class="app-section">
                        <div class="container">
                            <div class="row align-items-center">
                            <div class="col-md-8 col-lg-6 order-2 order-md-1">
                                <h2>Book on Mobile</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h4>Download the app</h4>
                                <img class="img-fluid mr-3 app-icon" src={APP_STORE_IMAGE} alt="app" />
                                <img class="img-fluid app-icon" src={GOOGLE_APP_IMAGE} alt="play" />
                            </div>
                            <div class="col-md-4 col-lg-6 text-center order-1 order-md-2">
                                <img class="img-fluid mb-5 mb-md-0" src={APP_IMAGE} alt="app" />
                            </div>
                            </div>
                        </div>
                    </section>
        </AppLayout>
    )
}

export default Home
