import React, { useEffect, useState, useContext } from 'react'
import AppLayout from '../../../layout/AppLayout'
import { RootContext } from '../../../contextApi'
import SearchedHospitals from './components/SearchedHospitals'
import SearchHospital from './components/SearchHospital'
import HospitalTypeFilters from '../Doctor/components/filters/HospitalTypeFilters'
import CategoriesFilter from './components/filters/CategoriesFilters'
import InsuranceFilters from './components/filters/InsuranceFilters'
import AddonsFilter from './components/filters/AddonsFilters'
import { connect } from 'react-redux'
import { filterHospitals, insurancesFilter, categoriesFilter, hospitalTypesFilter, addonsFilter, clearHospitalSearch, searchHospitalByText } from '../../../store/actions/patient/searchedHospitalsActions'
import { useTranslation } from "react-i18next"

function Hospital({ searchHospitalByText, clearHospitalSearch, searchedHospitals, filterHospitals, insurancesFilter, categoriesFilter, hospitalTypesFilter, addonsFilter }) {
    const { searchedHospitals: allSearchedHospitals, filters: { checkedInsurances, checkedCategories, hospitalTypes, checkedAddons } } = searchedHospitals && searchedHospitals
    const [searchText, setSearchText] = useState("")
    const { user } = useContext(RootContext)
    const { t } = useTranslation()

    useEffect(() => {
        if (localStorage.getItem('hospitalSearchText')) {
            // We have searched at the time of clicking the search button on previous screen
            setSearchText(localStorage.getItem('hospitalSearchText'))

            localStorage.removeItem('hospitalSearchText')
        } else if (
            checkedInsurances.length === 0 &&
            checkedCategories.length === 0 &&
            checkedAddons.length === 0 &&
            hospitalTypes.length === 0 &&
            allSearchedHospitals.length === 0
        ) {
            clearHospitalSearch()
        } else {
            filterOutHospitals({
                checkedInsurances,
                checkedCategories,
                checkedAddons,
                hospitalTypes
            })
        }
    }, [])

    const onInsuranceCheckboxChanged = (spec) => {
        if (checkedInsurances.filter(item => item === spec).length > 0) {
            insurancesFilter(checkedInsurances.filter(item => item !== spec))
            filterOutHospitals({
                checkedInsurances: checkedInsurances.filter(item => item !== spec),
                checkedCategories,
                hospitalTypes,
                checkedAddons
            })
        } else {
            insurancesFilter([...checkedInsurances, spec])
            filterOutHospitals({
                checkedInsurances: [...checkedInsurances, spec],
                checkedCategories,
                hospitalTypes,
                checkedAddons
            })
        }
    }

    const onCategoriesCheckboxChanged = (spec) => {
        if (checkedCategories.filter(item => item === spec._id).length > 0) {
            categoriesFilter(checkedCategories.filter(item => item !== spec._id))
            filterOutHospitals({
                checkedCategories: checkedCategories.filter(item => item !== spec._id),
                checkedInsurances,
                hospitalTypes,
                checkedAddons
            })
        } else {
            categoriesFilter([...checkedCategories, spec._id])
            filterOutHospitals({
                checkedCategories: [...checkedCategories, spec._id],
                checkedInsurances,
                hospitalTypes,
                checkedAddons
            })
        }
    }

    const onAddonsCheckboxChanged = (spec) => {
        if (checkedAddons.filter(item => item === spec._id).length > 0) {
            addonsFilter(checkedAddons.filter(item => item !== spec._id))
            filterOutHospitals({
                checkedAddons: checkedAddons.filter(item => item !== spec._id),
                checkedInsurances,
                hospitalTypes,
                checkedCategories
            })
        } else {
            addonsFilter([...checkedAddons, spec._id])
            filterOutHospitals({
                checkedAddons: [...checkedAddons, spec._id],
                checkedInsurances,
                hospitalTypes,
                checkedCategories
            })
        }
    }

    const onHospitalCheckboxChange = (spec) => {
        if (hospitalTypes.filter(item => item === spec).length > 0) {
            hospitalTypesFilter(hospitalTypes.filter(item => item !== spec))
            filterOutHospitals({
                checkedInsurances,
                checkedCategories,
                hospitalTypes: hospitalTypes.filter(item => item !== spec),
                checkedAddons
            })
        } else {
            hospitalTypesFilter([...hospitalTypes, spec])
            filterOutHospitals({
                checkedInsurances,
                checkedCategories,
                hospitalTypes: [...hospitalTypes, spec],
                checkedAddons
            })
        }
    }

    const filterOutHospitals = (filters) => {
        filterHospitals(filters)
        setSearchText("")
    }

    const onSearchHospital = (e) => {
        // Search Hospital by text
        e.preventDefault()
        if (searchText !== "") {
            searchHospitalByText(searchText)
        }
    }

    return (
        <AppLayout>

            <SearchHospital searchText={searchText} setSearchText={setSearchText} clearHospitalSearch={clearHospitalSearch} onSearchHospital={onSearchHospital} />

            <section class="user-dashboard search-filter-section">
                <div class="container">
                    <div class="row pb-5">
                        <div class="col-md-3 search-filter">
                            <div class="d-flex justify-content-between">
                                <h5 class="mb-2">{t('filters')} </h5>
                                <p class="text-gray mb-2" style={{ cursor: "pointer" }} onClick={clearHospitalSearch}>{t('reset_filters')}</p>
                            </div>
                            <hr class="mt-0" />
                            <form>

                                <HospitalTypeFilters onHospitalCheckboxChange={onHospitalCheckboxChange} hospitalTypes={hospitalTypes} />

                                <InsuranceFilters checkedInsurances={checkedInsurances} onInsuranceCheckboxChanged={onInsuranceCheckboxChanged} />

                                <CategoriesFilter checkedCategories={checkedCategories} onCategoriesCheckboxChanged={onCategoriesCheckboxChanged} />

                                <AddonsFilter checkedAddons={checkedAddons} onAddonsCheckboxChanged={onAddonsCheckboxChanged} />

                            </form>
                        </div>
                        <div class="col-md-9">
                            <div class="d-flex justify-content-between align-items-center mb-4 mt-4 mt-md-0">
                                <h5 class="text-primary mb-0">{allSearchedHospitals.length} {t("hospitals")}</h5>
                                {/* <select class="form-control">
                                    <option>{t("sort_by")}: {t("recomendation")}</option>
                                </select> */}
                            </div>
                            {/* Searched Hospitals */}
                            {allSearchedHospitals.length > 0 && allSearchedHospitals?.map(hospital => {
                                return <SearchedHospitals hospital={hospital} />
                            }
                            )}
                        </div>
                        {/* <div class="col-md-2 mt-4 mt-md-0">
                        <img class="img-fluid mt-2" src="https://via.placeholder.com/300x700?text=Add" alt="add" />
                    </div> */}
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

const mapStateToProps = (state) => ({
    searchedHospitals: state.searchedHospitals
})

const mapDispatchToProps = {
    filterHospitals,
    insurancesFilter,
    categoriesFilter,
    hospitalTypesFilter,
    addonsFilter,
    clearHospitalSearch,
    searchHospitalByText
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospital)