import React, { useState } from 'react'
import EMPTY_IMAGE_PLACEHOLDER from '../../../../assets/images/empty_profile.png'
import { selectDoctor } from '../../../../store/actions/doctorActions';
import BookAppointment from '../../Doctor/components/BookAppointment';

function HospitalDoctors({ doctors }) {

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <div class="tab-pane fade" id="pills-doctors" role="tabpanel" aria-labelledby="pills-doctors-tab">
                                <div class="row mt-4">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>Date</option>
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
                                                <a href="javascript:void(0)" class="btn btn-primary px-4" data-toggle="modal" data-target="#patientbookAppointment" onClick={() => setSelectedDoctor(doctor._id)}>Book Appointment</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <BookAppointment doctorId={selectedDoctor} hospitalDetailPage={true} />
                        </div>
    )
}

export default HospitalDoctors
