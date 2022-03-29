import React, { useEffect } from 'react'
import { getPaginatedSpecialities, setPageNumber } from '../../../../store/actions/specialitiesActions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPagesArray } from '../../../../Utills/functions'
import classNames from 'classnames'
import { specialityFilter } from '../../../../store/actions/patient/searchedDoctorsActions'
import { useTranslation } from "react-i18next"

function FindSpecialist({ specialityFilter, getPaginatedSpecialities, specialities, setPageNumber }) {

    const { pageNumber, numberOfPages, paginatedSpecialities: allSpecialities } = specialities && specialities
    const { t, i18n } = useTranslation()

    const history = useHistory()
    const href = ""

    useEffect(() => {
        getPaginatedSpecialities(pageNumber || 0)
    }, [getPaginatedSpecialities, pageNumber])

    const searchDoctor = (speciality) => {
        specialityFilter([speciality._id])
        history.push("/doctor")
    }

    const pages = getPagesArray(numberOfPages)

    return (
        <section class="find-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center">{t("find_specialist")}</h2>
                        <div class="container">
                            <div class="row">
                                {allSpecialities?.map((speciality, key) => (
                                    <div class="col-md-4 mb-3">
                                        <div class="item" key={key} style={{ cursor: 'pointer' }} onClick={searchDoctor.bind(this, speciality)}>
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={speciality?.logo} alt="dental" />
                                                    <h5>{i18n.language === "ar" ? speciality.name_ar : speciality.name_en}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pagination */}
                <div className="row">
                    <div className="col-md-12">
                        {allSpecialities?.length > 0 ? (
                            <nav>
                                <ul className="pagination justify-content-center align-items-center my-md-2">
                                    <li className="page-item" style={{ padding: '15px', pointerEvents: +pageNumber <= 0 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber - 1) }}>{t('prev')}</a></li>
                                    {pages.map((pageIndex) => (
                                        <li style={{ padding: '2px' }} className={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a className="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                                    ))}
                                    <li className="page-item" style={{ padding: '15px', pointerEvents: +pageNumber === +numberOfPages - 1 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber + 1) }}>{t('next')}</a></li>
                                </ul>
                            </nav>
                        ) : (
                            <p>{t('no_doctors_found')}</p>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    specialities: state.specialities
})

const mapDispatchToProps = {
    getPaginatedSpecialities,
    setPageNumber,
    specialityFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FindSpecialist)

