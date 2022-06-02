import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { searchNurse, clearSearchResults, getNurses } from '../../../../store/actions/nurseActions'

function SearchNurse({ searchNurse, nurses, clearSearchResults, getNurses }) {
    const { pageNumber, searchedNurses } = nurses && nurses;

    const [searchedText, setSearchedText] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchNurse(0, searchedText);
    }

    const onSearchInputChange = (e) => {
        setSearchedText(e.target.value);
        if(searchedText !== "" && e.target.value === "" ){
            clearSearchResults();
            getNurses();
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
    nurses: state.nurses
});

const mapDispatchToProps = {
    searchNurse,
    clearSearchResults,
    getNurses
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchNurse)
