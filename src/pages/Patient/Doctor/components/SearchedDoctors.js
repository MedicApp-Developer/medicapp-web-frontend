import React from 'react'
import { connect } from 'react-redux';
import MEDOR_LOGO from '../../../../assets/images/medeor_logo.png';
import { useHistory } from 'react-router';

function SearchedDoctors({ allSearchedDoctors }) {

    const history = useHistory();

    return (
        <>
        {allSearchedDoctors?.length > 0 && allSearchedDoctors.map(doctor => (
            <div class="media mb-0">
                <img src={MEDOR_LOGO} class="mr-3 py-4" alt="medeor_logo" style={{ cursor: "pointer" }} onClick={(e) => history.push(`/patient/doctor/${doctor._id}`)} />
                    <div class="media-body">
                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                            <h5 class="mt-0">Dr. {doctor.firstName + " " + doctor.lastName}</h5>
                                <span>
                                    <a href="javascript:void(0)" class="btn btn-primary px-3 py-1 mt-2">Book Appointment</a>
                                </span>
                        </div>
                            <p class="rating mb-0">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </p>
                            <p class="my-1"><i class="icon-phone"></i> {doctor.mobile} </p>
                            <p class="my-1"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                    </div>
            </div>
        ))}
        </>
    )
}

export default SearchedDoctors;

