import React, { useState } from 'react'
import { connect } from 'react-redux';
import AppLayout from '../../../layout/AppLayout';
import GenderFilters from './components/filters/GenderFilters';
import HospitalTypeFilters from './components/filters/HospitalTypeFilters';
import LanguageFilters from './components/filters/LanguageFilters';
import NationalityFilters from './components/filters/NationalityFilters';
import SpecialityFilters from './components/filters/SpecialityFilters';
import SearchedDoctors from './components/SearchedDoctors';

function Doctor({ searchedDoctors }) {

    const { searchedDoctors: allSearchedDoctors } = searchedDoctors && searchedDoctors;
    const [checkedSpecialities, setCheckedSpecialities] = useState([]);
    const [hospitalTypes, setHospitalTypes] = useState([]);
    const [checkedLanguages, setCheckedLanguages] = useState([]);
    const [checkedNationalities, setCheckedNationalities] = useState([]);
    const [checkedGenders, setCheckedGenders] = useState([]);

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
                            {/* Hospital Types Filters */}
                            <HospitalTypeFilters hospitalTypes={hospitalTypes} setHospitalTypes={setHospitalTypes} />
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
                            {/* Specialities Filters */}
                            <SpecialityFilters checkedSpecialities={checkedSpecialities} setCheckedSpecialities={setCheckedSpecialities} />
                            
                            {/* Language Filters Here */}
                            <LanguageFilters checkedLanguages={checkedLanguages} setCheckedLanguages={setCheckedLanguages} />
                            
                            {/*  */}
                            <NationalityFilters checkedNationalities={checkedNationalities} setCheckedNationalities={setCheckedNationalities} />

                            {/* Gender Filters */}
                            <GenderFilters checkedGenders={checkedGenders} setCheckedGenders={setCheckedGenders} />
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

