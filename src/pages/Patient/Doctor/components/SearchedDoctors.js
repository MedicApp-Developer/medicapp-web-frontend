import React, { useState } from 'react'
import { connect } from 'react-redux';
import MEDOR_LOGO from '../../../../assets/images/medeor_logo.png';
import { useHistory } from 'react-router';
import EMPTY_IMAGE_PLACEHOLDER from '../../../../assets/images/empty_profile.png'
import BookAppointment from './BookAppointment';

function SearchedDoctors({ allSearchedDoctors }) {

    const history = useHistory();
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);

    return (
        <>
        {allSearchedDoctors?.length > 0 && allSearchedDoctors.map(doctor => (
            <div class="media mb-2">
                <img src={allSearchedDoctors.length > 0 ? doctor.image ? doctor.image : EMPTY_IMAGE_PLACEHOLDER : EMPTY_IMAGE_PLACEHOLDER} class="mr-3 py-4" alt="medeor_logo" style={{ cursor: "pointer" }} onClick={(e) => history.push(`/patient/doctor/${doctor._id}`)} />
                    <div class="media-body">
                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                            <h5 class="mt-0">Dr. {doctor.firstName + " " + doctor.lastName}</h5>
                                <span>
                                    <a href="javascript:void(0)" class="btn btn-primary px-3 py-1 mt-2" data-toggle="modal" data-target="#patientbookAppointment" onClick={() => { setSelectedDoctorId(doctor._id) }}>Book Appointment</a>
                                </span>
                        </div>
                            <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </p>
                            {/* <p class="my-1"><i class="icon-phone"></i> {doctor.mobile} </p> */}
                            <p class="my-1"><i class="icon-map"></i> {doctor?.hospitalId?.address}</p>
                    </div>
            </div>
        ))}
        <BookAppointment doctorId={selectedDoctorId} />
        </>
    )
}

export default SearchedDoctors;

