import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import AppLayout from '../../../layout/AppLayout';
import GenderFilters from './components/filters/GenderFilters';
import HospitalTypeFilters from './components/filters/HospitalTypeFilters';
import LanguageFilters from './components/filters/LanguageFilters';
import NationalityFilters from './components/filters/NationalityFilters';
import SpecialityFilters from './components/filters/SpecialityFilters';
import SearchedDoctors from './components/SearchedDoctors';
import axios from '../../../axios';
import { searchDoctorsByText, clearDoctorSearch, filterDoctors, specialityFilter, hospitalTypesFilter, nationalityFilter, genderFilter, languageFilter } from '../../../store/actions/patient/searchedDoctorsActions';
import SearchDoctor from './components/filters/SearchDoctor';

function Doctor({ searchDoctorsByText, clearDoctorSearch, searchedDoctors, filterDoctors, specialityFilter, hospitalTypesFilter, nationalityFilter, genderFilter, languageFilter }) {

    const { searchedDoctors: allSearchedDoctors, filters: { checkedSpecialities, hospitalTypes, checkedGenders, checkedLanguages, checkedNationalities } } = searchedDoctors && searchedDoctors;
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        if(localStorage.getItem('doctorSearchText')){
            // We have searched at the time of clicking the search button on previous screen
            setSearchText(localStorage.getItem('doctorSearchText'))
            localStorage.removeItem('doctorSearchText');
        } else if (
            checkedSpecialities.length === 0 &&
            checkedGenders.length === 0 && 
            checkedLanguages.length === 0 && 
            checkedNationalities.length === 0 &&
            hospitalTypes.length === 0 && 
            allSearchedDoctors.length === 0
           ){
            clearDoctorSearch();
           }else {
               filterOutDoctors({
                   checkedGenders, 
                   checkedLanguages,
                   checkedNationalities,
                   checkedSpecialities,
                   hospitalTypes
               })
           }
    }, []);

    const onSpecialityCheckboxChanged = (spec) => {
        if(checkedSpecialities.filter(item => item === spec._id).length > 0){
            specialityFilter(checkedSpecialities.filter(item => item !== spec._id));
            filterOutDoctors({
                checkedSpecialities: checkedSpecialities.filter(item => item !== spec._id),
                hospitalTypes,
                checkedLanguages,
                checkedNationalities,
                checkedGenders
            });
        }else {
            specialityFilter([...checkedSpecialities, spec._id])
            filterOutDoctors({
                checkedSpecialities: [...checkedSpecialities, spec._id],
                hospitalTypes,
                checkedLanguages,
                checkedNationalities,
                checkedGenders
            });
        }
    }

    const onLanguageCheckboxChanged = (spec) => {
        if (checkedLanguages.filter(item => item === spec).length > 0) {
            languageFilter(checkedLanguages.filter(item => item !== spec));
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes,
                checkedLanguages: checkedLanguages.filter(item => item !== spec),
                checkedNationalities,
                checkedGenders
            });
        } else {
            languageFilter([...checkedLanguages, spec])
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes,
                checkedLanguages: [...checkedLanguages, spec],
                checkedNationalities,
                checkedGenders
            });
        }
    }

    const onCountryCheckboxChanged = (spec) => {
        if (checkedNationalities.filter(item => item === spec).length > 0) {
            nationalityFilter(checkedNationalities.filter(item => item !== spec))
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes,
                checkedLanguages,
                checkedNationalities: checkedNationalities.filter(item => item !== spec),
                checkedGenders
            });
        } else {
            nationalityFilter([...checkedNationalities, spec])
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes,
                checkedLanguages,
                checkedNationalities: [...checkedNationalities, spec],
                checkedGenders
            });
        }
    }

    const onGenderCheckboxChanged = (spec) => {
        if (checkedGenders.filter(item => item === spec).length > 0) {
            genderFilter(checkedGenders.filter(item => item !== spec))
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes,
                checkedLanguages,
                checkedNationalities,
                checkedGenders: checkedGenders.filter(item => item !== spec)
            });
        } else {
            genderFilter([...checkedGenders, spec])
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes,
                checkedLanguages,
                checkedNationalities,
                checkedGenders: [...checkedGenders, spec]
            });
        }
    }

    const onHospitalCheckboxChange = (spec) => {
        if (hospitalTypes.filter(item => item === spec).length > 0) {
            hospitalTypesFilter(hospitalTypes.filter(item => item !== spec))
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes: hospitalTypes.filter(item => item !== spec),
                checkedLanguages,
                checkedNationalities,
                checkedGenders
            });
        } else {
            hospitalTypesFilter([...hospitalTypes, spec])
            filterOutDoctors({
                checkedSpecialities,
                hospitalTypes: [...hospitalTypes, spec],
                checkedLanguages,
                checkedNationalities,
                checkedGenders
            });
        }
    }

    const filterOutDoctors = (filters) => {
        filterDoctors(filters);
        setSearchText("");
    }

    const onSearchDoctor = (e) => {
        // Search Doctor by text
        e.preventDefault();
        if(searchText !== ""){
            searchDoctorsByText(searchText);
        }
    }

    return (
        <AppLayout>
            
            {/* Search Doctor */}
            <SearchDoctor searchText={searchText} setSearchText={setSearchText} onSearchDoctor={onSearchDoctor} />

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
                            <HospitalTypeFilters onHospitalCheckboxChange={onHospitalCheckboxChange} />
                    
                            {/* Specialities Filters */}
                            <SpecialityFilters checkedSpecialities={checkedSpecialities} onSpecialityCheckboxChanged={onSpecialityCheckboxChanged} />
                            
                            {/* Language Filters Here */}
                            <LanguageFilters checkedLanguages={checkedLanguages} onLanguageCheckboxChanged={onLanguageCheckboxChanged} />
                            
                            {/*  */}
                            <NationalityFilters checkedNationalities={checkedNationalities} onCountryCheckboxChanged={onCountryCheckboxChanged} />

                            {/* Gender Filters */}
                            <GenderFilters checkedGenders={checkedGenders} onGenderCheckboxChanged={onGenderCheckboxChanged} />
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

const mapDispatchToProps = {
    filterDoctors,
    specialityFilter,
    genderFilter,
    hospitalTypesFilter,
    nationalityFilter,
    languageFilter,
    clearDoctorSearch,
    searchDoctorsByText
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);

