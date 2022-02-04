import React from 'react'
import { useTranslation } from "react-i18next"

function SearchHospital({ searchText, setSearchText, onSearchHospital, clearHospitalSearch }) {
    const { t } = useTranslation()

    const onSearchValueChange = (e) => {
        if (searchText !== "" && e.target.value === "") {
            clearHospitalSearch()
        }
        setSearchText(e.target.value)
    }

    return (
        <section class="search-block pt-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <form onSubmit={onSearchHospital}>
                            <div class="form-group position-relative d-sm-flex">
                                <span class="icon-search"></span>
                                <input value={searchText} onChange={onSearchValueChange} type="text" class="form-control mr-3 mb-3" placeholder={t('enter_area')} />
                                <button class="btn btn-primary px-3 mb-3" type="submit"><span class="icon-search"></span> {t('search')} </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchHospital
