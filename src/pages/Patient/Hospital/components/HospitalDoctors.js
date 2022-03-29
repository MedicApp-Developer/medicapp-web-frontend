import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EMPTY_IMAGE_PLACEHOLDER from '../../../../assets/images/empty_profile.png'
import { useTranslation } from "react-i18next"

function HospitalDoctors({ doctors }) {
    const { t } = useTranslation()

    return (
        <div class="tab-pane fade" id="pills-doctors" role="tabpanel" aria-labelledby="pills-doctors-tab">
            <div class="row mt-4">
                <div class="col-md-3">
                    <div class="form-group">
                        <select class="form-control">
                            <option> {t("date")}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                {doctors.length > 0 && doctors.map(doctor => (
                    <div class="col-md-6">
                        <div class="row align-items-center mb-3">
                            <div class="col-md-7">
                                <div class="media mb-0">
                                    <img src={doctor.image ? doctor.image : EMPTY_IMAGE_PLACEHOLDER} class="mr-3 py-4" alt="medeor_logo" />
                                    <div class="media-body">
                                        <h5 class="mt-0">Dr. {doctor?.firstName + " " + doctor?.lastName}</h5>
                                        <p class="rating mb-1">
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </p>
                                        <p class="mt-2 mb-2"><i class="icon-phone"></i> {doctor?.mobile} </p>
                                        <p class="mt-2 mb-2"><i class="icon-hospital"></i> {doctor?.hospitalId.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5 text-center text-md-left">
                                <Link to="/book-appointment" class="btn btn-primary px-4" onClick={() => { localStorage.setItem("SELECTED_DOCTOR_OR_HOSPITAL", JSON.stringify(doctor)); localStorage.setItem("hospitalDetailPage", true) }}>{t("book_appointment")}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HospitalDoctors
