import React from 'react'
import { connect } from 'react-redux';
import AppLayout from '../../../layout/AppLayout';
import SearchedDoctors from './components/SearchedDoctors';

function Doctor({ searchedDoctors }) {

    const { searchedDoctors: allSearchedDoctors } = searchedDoctors && searchedDoctors;

    return (
        <AppLayout>
            <section class="search-block pt-4">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group position-relative d-sm-flex">
                                <span class="icon-search"></span>
                                <input type="text" class="form-control mr-3 mb-3" placeholder="Enter specialist" />
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
                                        <input type="checkbox" class="form-check-input" id="health" />
                                        <label class="form-check-label" for="health">Allied Health</label>
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="dentist" />
                                        <label class="form-check-label" for="dentist">Dentist</label>
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="Physician" />
                                        <label class="form-check-label" for="Physician">Physician </label>
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
                                    <input type="checkbox" class="form-check-input" id="Dental" />
                                    <label class="form-check-label" for="Dental">Dental Care</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Dermatology" />
                                    <label class="form-check-label" for="Dermatology">Dermatology</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Family Medicine" />
                                    <label class="form-check-label" for="Family Medicine">Family Medicine</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="General Surgery" />
                                    <label class="form-check-label" for="General Surgery">General Surgery</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                Language <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse show" id="collapseExample2">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Arabic" />
                                    <label class="form-check-label" for="Arabic">Arabic</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="English" />
                                    <label class="form-check-label" for="English">English</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                                Nationality <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse show" id="collapseExample3">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="UAE" />
                                    <label class="form-check-label" for="UAE">UAE</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="USA" />
                                    <label class="form-check-label" for="USA">USA</label>
                                </div>
                                </div>
                            </div>
                            <div class="custom-checkbox">
                                <a data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                                Gender <i class="fa fa-angle-down float-right"></i>
                                </a>
                                <div class="collapse show" id="collapseExample4">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Male" />
                                    <label class="form-check-label" for="Male">Male</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Female" />
                                    <label class="form-check-label" for="Female">Female</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="Other" />
                                    <label class="form-check-label" for="Other">Other</label>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-7">
                        <div class="d-flex justify-content-between align-items-center mb-4 mt-4 mt-md-0">
                            <h5 class="text-primary mb-0">{allSearchedDoctors.length > 0 ? allSearchedDoctors.length : 0} Doctors</h5>
                            <select class="form-control">
                                <option>Sort by: Recomendation</option>
                            </select>
                        </div>
                        {/* Searched Doctors */}
                        <SearchedDoctors allSearchedDoctors={allSearchedDoctors} />
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

const mapStateToProps = (state) => ({
    searchedDoctors: state.searchedDoctors
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);

