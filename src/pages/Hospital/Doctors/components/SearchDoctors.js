import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { searchDoctor, clearSearchResults, getDoctors } from '../../../../store/actions/doctorActions'

function SearchDoctors({ searchDoctor, doctors, clearSearchResults, getDoctors }) {
    const { pageNumber, searchedDoctors } = doctors && doctors;

    const [searchedText, setSearchedText] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchDoctor(0, searchedText);
    }

    const onSearchInputChange = (e) => {
        setSearchedText(e.target.value);
        if(searchedText !== "" && e.target.value === "" ){
            clearSearchResults();
            getDoctors();
        }
    }

    return (
        <form class="form-inline search-form d-none d-lg-block" onSubmit={onFormSubmit}>
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" value={searchedText} onChange={onSearchInputChange} />
            <span class="icon-search"></span>
            <button type="submit" disabled={searchedText === ""} className="btn btn-primary" style={{ padding: "12px 15px", marginLeft: '10px' }}>Search</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    doctors: state.doctors
});

const mapDispatchToProps = {
    searchDoctor,
    clearSearchResults,
    getDoctors
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctors)
