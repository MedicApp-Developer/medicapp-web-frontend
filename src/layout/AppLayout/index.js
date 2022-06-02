import React, { useState, useContext } from 'react'
import { RootContext } from '../../contextApi/index'
import { Link, useHistory } from 'react-router-dom'
import { DOCTOR_PROFILE_ROUTE, HOSPITAL_PROFILE_ROUTE, LAB_PROFILE_ROUTE, LOGIN_ROUTE, NURSE_PROFILE_ROUTE, PHARMACY_PROFILE_ROUTE } from '../../constants/Redirects'
import { DOCTOR, HOSPITAL, LABORTORY, NURSE, PHARMACY } from '../../constants/Roles'
import { DOCTORS_NAV, NURSE_NAV, LABORATORY_NAV } from '../../constants/navs'
import SearchDoctors from '../../pages/Hospital/Doctors/components/SearchDoctors'
import HashLoader from "react-spinners/HashLoader"
import { usePromiseTracker } from "react-promise-tracker"
import SearchNurse from '../../pages/Hospital/Nurse/components/SearchNurse'
import SearchLab from '../../pages/Hospital/Laboratory/components/SearchLab'
import TopNav from '../TopNav'
import MEDICAPP_LOGO from '../../assets/images/logo.png'
import { PatientRoutes } from '../../constants/routes/PatientRoutes'
import Footer from './Footer'
import { connect } from 'react-redux'
import { clearDoctorsFiltersOnly } from '../../store/actions/patient/searchedDoctorsActions'
import { clearHospitalsFiltersOnly } from '../../store/actions/patient/searchedHospitalsActions'
import i18next from 'i18next'

function AppLayout({ children, clearDoctorsFiltersOnly, clearHospitalsFiltersOnly }) {

    const history = useHistory()
    const { promiseInProgress } = usePromiseTracker()

    const onLogout = () => {
        localStorage.clear()
        history.push(LOGIN_ROUTE)
    }

    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light navabr-home mb-0">
                    <div class="container">
                        <Link to={PatientRoutes[0].route} class="navbar-brand" onClick={() => { clearDoctorsFiltersOnly(); clearHospitalsFiltersOnly() }} href="#"><img src={MEDICAPP_LOGO} alt="logo" /></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* Top Nav */}
                        <TopNav />
                    </div>
                </nav>
                <div className='language-change-buttons'>
                    <button className='btn' onClick={() => { i18next.changeLanguage("en") }}>English</button>
                    <button className='btn' onClick={() => { i18next.changeLanguage("ar") }}>العربية</button>
                </div>
            </header>
            <div style={promiseInProgress ? { opacity: '0.2' } : {}}>
                {children}
            </div>
            <Footer />
            {promiseInProgress && (
                <div className="centered-loader">
                    <HashLoader color="#417EBF" loading={true} size={50} />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    clearDoctorsFiltersOnly,
    clearHospitalsFiltersOnly
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)

