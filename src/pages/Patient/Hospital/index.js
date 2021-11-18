import React from 'react'
import AppLayout from '../../../layout/AppLayout'
import PLACEHOLDER_LARGE from '../../../assets/images/placeholder-lg.png';
import PLACEHOLDER_SMALL from '../../../assets/images/placeholder-sm.png';
import MEDOR_LOGO from '../../../assets/images/medeor_logo.png';
import DENTAL_IMAGE from '../../../assets/images/dental.png';
import { useHistory } from 'react-router';

function Hospital() {

    const history = useHistory();

    return (
        <AppLayout>
            <section class="search-block pt-4">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group position-relative d-sm-flex">
                                <span class="icon-search"></span>
                                <input type="text" class="form-control mr-3 mb-3" placeholder="Enter an area" />
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
                                    <input type="checkbox" class="form-check-input" id="Company" />
                                    <label class="form-check-label" for="Company">Company Clinic</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Surgery" />
                                    <label class="form-check-label" for="Surgery">Day Surgery Center</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Dental" />
                                    <label class="form-check-label" for="Dental">Dental Genaral Clinic </label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Diagnostic" />
                                    <label class="form-check-label" for="Diagnostic">Diagnostic Center</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="General" />
                                    <label class="form-check-label" for="General">General Clinic</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Hospital" />
                                    <label class="form-check-label" for="Hospital">General Hospital</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="PolyClinic" />
                                    <label class="form-check-label" for="PolyClinic">PolyClinic</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Specialty" />
                                    <label class="form-check-label" for="Specialty">Specialty Hospital</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                Add-Ons <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse show" id="collapseExample1">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Facility" />
                                    <label class="form-check-label" for="Facility">24 Hour Facility</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Training" />
                                    <label class="form-check-label" for="Training">Clinical Training Services</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Testing" />
                                    <label class="form-check-label" for="Testing">COVID RT-PCR Testing</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="COVID" />
                                    <label class="form-check-label" for="COVID">COVID Swabbing</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Drive" />
                                    <label class="form-check-label" for="Drive">Drive Through</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Healthcare" />
                                    <label class="form-check-label" for="Healthcare">Home Healthcare</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Mobile" />
                                    <label class="form-check-label" for="Mobile">Mobile Unit</label>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-7">
                        <div class="d-flex justify-content-between align-items-center mb-4 mt-4 mt-md-0">
                            <h5 class="text-primary mb-0">1000 Hospitals</h5>
                            <select class="form-control">
                                <option>Sort by: Recomendation</option>
                            </select>
                        </div>
                        <div class="media mb-0">
                            <img src={MEDOR_LOGO} style={{ cursor: "pointer" }} onClick={() => { history.push("/patient/hospital/id") }} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Medeor Hospital  </h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">Since 2014</a>
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
                        <div class="media mb-0">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Medeor Hospital  </h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">Since 2014</a>
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
                        <div class="media mb-0">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Medeor Hospital  </h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">Since 2014</a>
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
                        <div class="media mb-0">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Medeor Hospital  </h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">Since 2014</a>
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
                        <div class="media mb-0">
                            <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" />
                            <div class="media-body">
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                <h5 class="mt-0">Medeor Hospital  </h5>
                                <span>
                                <a href="javascript:void(0)" class="btn btn-success px-3 py-1 mr-1">Verified</a>
                                <a href="javascript:void(0)" class="btn btn-primary px-3 py-1">Since 2014</a>
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
                        <img class="img-fluid mt-2" src="https://via.placeholder.com/300x700?text=Add" alt="add" />
                    </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Hospital
