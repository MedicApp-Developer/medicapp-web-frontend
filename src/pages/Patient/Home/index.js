import React, { useEffect, useState } from 'react'
import AppLayout from '../../../layout/AppLayout';
import APP_STORE_IMAGE from '../../../assets/images/app-store.png';
import GOOGLE_APP_IMAGE from '../../../assets/images/google-play.png';
import APP_IMAGE from '../../../assets/images/app.png'
import { Link } from 'react-router-dom';
import FindSpecialist from './components/FindSpecialist';
import SearchHospitalOrDoctor from './components/SearchHospitalOrDoctor';

function Home() {

    const href = "";

    return (
        <AppLayout>
                  <section class="hero-section">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-12 col-xl-3">
                                <h1>Book Appointments And Get Rewarded
                                </h1>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section class="search-section">
                        <div class="container">
                            <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-10">
                                <SearchHospitalOrDoctor />
                            </div>
                            </div>
                        </div>
                    </section>
                    <FindSpecialist />
                    <section class="app-section">
                        <div class="container">
                            <div class="row align-items-center">
                            <div class="col-md-8 col-lg-6 order-2 order-md-1">
                                <h2>Book on Mobile</h2>
                                <p>Download the App and browse through hundreds of our trusted clinics. With a few taps, you can book your appointment online hassle-free!</p>
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

export default Home;

