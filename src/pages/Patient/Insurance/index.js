import React from 'react'
import AppLayout from '../../../layout/AppLayout'
import MEDOR_LOGO from '../../../assets/images/medeor_logo.png';

function Insurance() {
    return (
        <AppLayout>
            <section class="search-block pt-4">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group position-relative d-sm-flex">
                                <span class="icon-search"></span>
                                <input type="text" class="form-control mr-3 mb-3" placeholder="Enter insurance company" />
                                <button class="btn btn-primary px-3 mb-3" type="submit"><span class="icon-search"></span> Search</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
            
            <section class="user-dashboard search-filter-section">
                <div class="container">
                    <div class="row pb-5">
                    <div class="col-md-3 search-filter">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-2">Filters</h5>
                            <p class="text-gray mb-2">Reset filters</p>
                        </div>
                        <hr class="mt-0" />
                        <form>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="Hospital" />
                                <label class="form-check-label" for="Hospital">Hospital</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="Clinic" />
                                <label class="form-check-label" for="Clinic">Clinic</label>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Category <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse show" id="collapseExample">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Health" />
                                    <label class="form-check-label" for="Health">Allied Health</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Dentist" />
                                    <label class="form-check-label" for="Dentist">Dentist</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Physician" />
                                    <label class="form-check-label" for="Physician">Physician</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                Speciality <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse show" id="collapseExample1">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Cardiology" />
                                    <label class="form-check-label" for="Cardiology">Cardiology</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Chiropractor" />
                                    <label class="form-check-label" for="Chiropractor">Chiropractor</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Psychology" />
                                    <label class="form-check-label" for="Psychology">Psychology</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Care" />
                                    <label class="form-check-label" for="Care">Dental Care</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Dermatology" />
                                    <label class="form-check-label" for="Dermatology">Dermatology</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Medicine" />
                                    <label class="form-check-label" for="Medicine">Family Medicine</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Surgery" />
                                    <label class="form-check-label" for="Surgery">General Surgery</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#Language" role="button" aria-expanded="false" aria-controls="Language">
                                Language <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse" id="Language">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Facility" />
                                    <label class="form-check-label" for="Facility">English</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Urdu" />
                                    <label class="form-check-label" for="Urdu">Urdu</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#Nationality" role="button" aria-expanded="false" aria-controls="Nationality">
                                Nationality <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse" id="Nationality">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Pakistani" />
                                    <label class="form-check-label" for="Pakistani">Pakistani</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#gender" role="button" aria-expanded="false" aria-controls="gender">
                                Gender <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse" id="gender">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Male" />
                                    <label class="form-check-label" for="Male">Male</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Female" />
                                    <label class="form-check-label" for="Female">Female</label>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-7">
                        <div class="d-flex justify-content-between align-items-center mb-4 mt-4 mt-md-0">
                            <h5 class="text-primary mb-0">1000 Insurance</h5>
                            <select class="form-control">
                                <option>Sort by: Near by</option>
                            </select>
                        </div>
                        <div class="media mb-3">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Aster Insurance</h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                </span>
                                </div>
                                <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </p>
                                <p class="my-1"><i class="icon-phone"></i> +971 4 1234567 </p>
                                <p class="my-1"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                        <div class="media mb-3">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Aster Insurance</h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                </span>
                                </div>
                                <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </p>
                                <p class="my-1"><i class="icon-phone"></i> +971 4 1234567 </p>
                                <p class="my-1"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                        <div class="media mb-3">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Aster Insurance</h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                </span>
                                </div>
                                <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </p>
                                <p class="my-1"><i class="icon-phone"></i> +971 4 1234567 </p>
                                <p class="my-1"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                        <div class="media mb-3">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Aster Insurance</h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                </span>
                                </div>
                                <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </p>
                                <p class="my-1"><i class="icon-phone"></i> +971 4 1234567 </p>
                                <p class="my-1"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                        <div class="media mb-3">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Aster Insurance</h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                </span>
                                </div>
                                <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </p>
                                <p class="my-1"><i class="icon-phone"></i> +971 4 1234567 </p>
                                <p class="my-1"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                        <div class="media mb-3">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Aster Insurance</h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                </span>
                                </div>
                                <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </p>
                                <p class="my-1"><i class="icon-phone"></i> +971 4 1234567 </p>
                                <p class="my-1"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 mt-4 mt-md-0">
                        <a href="javascript:void(0)" class="btn btn-primary px-3 mb-3">Insurance Company 
                        Registration</a>
                        <img class="img-fluid mt-2" src="https://via.placeholder.com/300x700?text=Add" alt="add" />
                    </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Insurance
