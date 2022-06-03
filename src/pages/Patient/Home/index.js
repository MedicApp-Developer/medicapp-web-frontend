import React, { useEffect, useState, useContext } from 'react'
import AppLayout from '../../../layout/AppLayout'
import APP_STORE_IMAGE from '../../../assets/images/app-store.png'
import GOOGLE_APP_IMAGE from '../../../assets/images/google-play.png'
import APP_IMAGE from '../../../assets/images/mobile-pic.png'
import { Link } from 'react-router-dom'
import FindSpecialist from './components/FindSpecialist'
import SearchHospitalOrDoctor from './components/SearchHospitalOrDoctor'
import { useTranslation } from "react-i18next"

function Home() {

   

    const href = ""
    const { t } = useTranslation()

    return (
        <AppLayout>
            <section class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-xl-5">
                            <h1>{t('book_appointments')}</h1>
                            <h2 style={{ marginTop: '-15px' }}>{t('and_get_rewarded')}</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="search-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10">
                            <SearchHospitalOrDoctor />
                        </div>
                    </div>
                </div>
            </section>
            <FindSpecialist />
            <section class="app-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8 col-lg-6 order-2 order-md-1">
                            <h2>{t("book_on_mobile")}</h2>
                            <p>{t('book_on_mobile_text')}</p>
                            <h4>{t('download_the_app')}</h4>
                            <a href={"https://apps.apple.com/us/app/medicapp-find-clinics-in-uae/id1601095044"} target="_blank"><img class="img-fluid mr-3 app-icon" src={APP_STORE_IMAGE} alt="app" /></a>
                            <a href={"https://play.google.com/store/apps/details?id=com.medicappae.app"} target="_blank"><img class="img-fluid app-icon" src={GOOGLE_APP_IMAGE} alt="play" /></a>
                        </div>
                        <div class="col-md-4 col-lg-6 text-center order-1 order-md-2">
                            <img class="img-fluid mb-5 mb-md-0" src={APP_IMAGE} alt="app" />
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Home

