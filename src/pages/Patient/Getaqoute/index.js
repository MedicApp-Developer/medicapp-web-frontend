import React from 'react'
import CAR_IMAGE from '../../../assets/images/get-quote-bg.png';
import GET_QOUTE_IMAGE from '../../../assets/images/get-quote.png';
import AppLayout from '../../../layout/AppLayout';

function Getaqoute() {
    return (
        <AppLayout>
            <section class="hero-section" style={{ backgroundImage: `url(${CAR_IMAGE})` }}>
                <div class="container">
                    <div class="row">
                    <div class="col-md-12 col-lg-5 offset-md-7">
                        <h1>Lorem Ipsum 
                            Dolor
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a class="btn btn-light" href="javascript:void(0)" data-toggle="modal" data-target="#getQuote">GET A QUOTE</a>
                    </div>
                    </div>
                </div>
            </section>
    
            <section class="get-quote">
                <div class="container-fluid">
                    <div class="row align-items-center">
                    <div class="col-md-4 col-lg-6 pl-lg-0">
                        <img class="img-fluid mb-5 mb-md-0" src={GET_QOUTE_IMAGE} alt="app" />
                    </div>
                    <div class="col-md-8 col-lg-6 pr-md-5">
                        <h2><strong>Main Covers</strong></h2>
                        <h5 class="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Getaqoute
