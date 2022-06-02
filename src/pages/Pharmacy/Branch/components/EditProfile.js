import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'

function EditProfile() {
    return (
        <>
            <div class="modal fade" id="editProfile" tabindex="-1" aria-labelledby="editProfileLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="icon-close"></span>
                        </button>
                        <small>Date</small>
                        <h5 class="mb-3"><strong>20 Aug 2021</strong></h5>
                        <div class="row">
                            <div class="col-6 col-sm-4 mb-3">
                                <h6><strong>Prescription</strong></h6>
                                <ul>
                                <li>Medicine</li>
                                <li>Medicine</li>
                                <li>Medicine</li>
                                <li>Medicine</li>
                                </ul>
                            </div>
                            <div class="col-6 col-sm-4 mb-3">
                                <h6><strong>Dosage</strong></h6>
                                <ul>
                                <li>2 x a day</li>
                                <li>2 x a day</li>
                                <li>2 x a day</li>
                                <li>2 x a day</li>
                                </ul>
                            </div>
                            <div class="col-6 col-sm-4 mb-3">
                                <h6><strong>Days</strong></h6>
                                <ul>
                                <li>10 days</li>
                                <li>10 days</li>
                                <li>10 days</li>
                                <li>10 days</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-12 col-sm-6">
                                <div class="media">
                                <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-0">Dr. Travis Martin</h5>
                                    <p>Dentist</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="media">
                                <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-0">Dr. Travis Martin</h5>
                                    <p>Dentist</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-12 text-center mt-4">
                                <button type="submit" class="btn btn-primary">Confirm</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile
