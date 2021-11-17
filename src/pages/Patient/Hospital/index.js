import React from 'react'
import AppLayout from '../../../layout/AppLayout'
import PLACEHOLDER_LARGE from '../../../assets/images/placeholder-lg.png';
import PLACEHOLDER_SMALL from '../../../assets/images/placeholder-sm.png';
import MEDOR_LOGO from '../../../assets/images/medeor_logo.png';
import DENTAL_IMAGE from '../../../assets/images/dental.png';

function Hospital() {
    return (
        <AppLayout>
            <section class="search-block pt-4">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group position-relative d-sm-flex">
                                <span class="icon-search"></span>
                                <input type="text" class="form-control mr-3 mb-3" placeholder="Enter hospital" />
                                <button class="btn btn-primary px-3 mb-3" type="submit"><span class="icon-search"></span> Search</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:viod(0)">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Pharmacy</li>
                            </ol>
                        </nav>
                    </div>
                    </div>
                </div>
            </section>
            <section class="user-dashboard">
                <div class="container">
                    <div class="row align-items-start add-list hospital-info">
                    <div class="col-12">
                        <h4>Medeor Hospital</h4>
                        <p class="rating mb-1">
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </p>
                        <p><span class="icon-map"></span> Dubai, United Arab Emirates <a href="#">Get Direction</a></p>
                        <h6>Open now </h6>
                    </div>
                    </div>
                    <div class="row mt-2">
                    <div class="col-md-8 mb-3">
                        <img class="img-fluid h-100 w-100" src={PLACEHOLDER_LARGE} alt="placeholder" />
                    </div>
                    <div class="col-md-4">
                        <img class="img-fluid w-100 mb-3" src={PLACEHOLDER_SMALL} alt="placeholder" />
                        <img class="img-fluid w-100 mb-3" src={PLACEHOLDER_SMALL} alt="placeholder" />
                    </div>
                    </div>
                    <div class="row mt-4 pb-5">
                    <div class="col-md-12 hospital-tabs">
                        <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="pills-overview-tab" data-toggle="pill" href="#pills-overview" role="tab" aria-controls="pills-overview" aria-selected="true">Overview</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-doctors-tab" data-toggle="pill" href="#pills-doctors" role="tab" aria-controls="pills-doctors" aria-selected="false">Doctors</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-services-tab" data-toggle="pill" href="#pills-services" role="tab" aria-controls="pills-services" aria-selected="false">Services</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-PCR-tab" data-toggle="pill" href="#pills-PCR" role="tab" aria-controls="pills-PCR" aria-selected="false">PCR-RT</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">
                                <h4>About the Hospital</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div class="tab-pane fade" id="pills-doctors" role="tabpanel" aria-labelledby="pills-doctors-tab">
                                <div class="row mt-4">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>Date</option>
                                        </select>
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-md-6">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-md-7">
                                            <div class="media mb-0">
                                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                                            <div class="media-body">
                                                <h5 class="mt-0">Dr. Albert Smith</h5>
                                                <p class="rating mb-1">
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </p>
                                                <p class="mt-2 mb-2"><i class="icon-phone"></i> +971 4 1234567 </p>
                                                <p class="mt-2 mb-2"><i class="icon-hospital"></i> Medeor Hospital</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 text-center text-md-left">
                                            <a href="javascript:void(0)" class="btn btn-primary px-4">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-md-7">
                                            <div class="media mb-0">
                                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                                            <div class="media-body">
                                                <h5 class="mt-0">Dr. Albert Smith</h5>
                                                <p class="rating mb-1">
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </p>
                                                <p class="mt-2 mb-2"><i class="icon-phone"></i> +971 4 1234567 </p>
                                                <p class="mt-2 mb-2"><i class="icon-hospital"></i> Medeor Hospital</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 text-center text-md-left">
                                            <a href="javascript:void(0)" class="btn btn-primary px-4">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-md-7">
                                            <div class="media mb-0">
                                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                                            <div class="media-body">
                                                <h5 class="mt-0">Dr. Albert Smith</h5>
                                                <p class="rating mb-1">
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </p>
                                                <p class="mt-2 mb-2"><i class="icon-phone"></i> +971 4 1234567 </p>
                                                <p class="mt-2 mb-2"><i class="icon-hospital"></i> Medeor Hospital</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 text-center text-md-left">
                                            <a href="javascript:void(0)" class="btn btn-primary px-4">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-md-7">
                                            <div class="media mb-0">
                                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                                            <div class="media-body">
                                                <h5 class="mt-0">Dr. Albert Smith</h5>
                                                <p class="rating mb-1">
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="text-warning fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </p>
                                                <p class="mt-2 mb-2"><i class="icon-phone"></i> +971 4 1234567 </p>
                                                <p class="mt-2 mb-2"><i class="icon-hospital"></i> Medeor Hospital</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 text-center text-md-right">
                                            <a href="javascript:void(0)" class="btn btn-primary px-4">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-services" role="tabpanel" aria-labelledby="pills-services-tab">
                                <div class="row">
                                <div class="col-md-4">
                                    <div class="media">
                                        <img src={MEDOR_LOGO} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">Dental Care</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <img src={DENTAL_IMAGE} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">Dental Care</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <img src={DENTAL_IMAGE} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">Dental Care</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <img src={DENTAL_IMAGE} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">Dental Care</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <img src={DENTAL_IMAGE} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">Dental Care</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <img src={DENTAL_IMAGE} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">Dental Care</h5>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-PCR" role="tabpanel" aria-labelledby="pills-PCR-tab">
                                <div class="row align-items-center mb-4">
                                <div class="col-6 col-lg-3">
                                    <div class="media mb-0">
                                        <img src={DENTAL_IMAGE} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">PCR</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <a href="javascript:void(0)" class="btn btn-primary px-4">Book Appointment</a>
                                </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                <div class="col-6 col-lg-3">
                                    <div class="media mb-0">
                                        <img src={DENTAL_IMAGE} class="mr-3" alt="dental" />
                                        <div class="media-body">
                                            <h5 class="mt-0">PCR</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <a href="javascript:void(0)" class="btn btn-primary px-4">Book Appointment</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Hospital
