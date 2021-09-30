import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { searchLab, clearSearchResults, getLabs } from '../../../../store/actions/labActions'

function SearchLab({ searchLab, labs, clearSearchResults, getLabs }) {
    const { pageNumber, searchedLabs } = labs && labs;

    const [searchedText, setSearchedText] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchLab(0, searchedText);
    }

    const onSearchInputChange = (e) => {
        setSearchedText(e.target.value);
        if(searchedText !== "" && e.target.value === "" ){
            clearSearchResults();
            getLabs();
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
    labs: state.labs
});

const mapDispatchToProps = {
    searchLab,
    clearSearchResults,
    getLabs
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLab)
