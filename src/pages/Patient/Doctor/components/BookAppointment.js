import React, { useEffect, useState } from 'react'
import AppLayout from '../../../../layout/AppLayout'
import APPOINTMENT_IMAGE from '../../../../assets/images/appoint-doctor.png'
import DoctorApi from '../../../../api/Doctors';
import { useParams } from 'react-router-dom';
import EMPTY_IMAGE_PLACEHOLDER from '../../../../assets/images/empty_profile.png'

function BookAppointment() {

    const { id } = useParams();

    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        DoctorApi.getSingleDoctor(id).then(doctor => {
            setDoctor(doctor.data.data);
        });
    }, []);

    const href = "";

    return (
        <AppLayout>
            <section class="search-block pt-4">
                <div class="container">
                    <div class="row">
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href={href}>Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page"> Doctor</li>
                                <li class="breadcrumb-item active" aria-current="page"> {"Dr. " + (Object.keys(doctor).length > 0 ? (doctor?.firstName + " " + doctor?.lastName) : "Loading...")}</li>
                            </ol>
                        </nav>
                    </div>
                    </div>
                </div>
            </section>
        
            <section class="user-dashboard pb-5">
                <div class="container">
                    <div class="row mt-4">
                    <div class="col-md-4">
                        <img class="img-fluid" src={Object.keys(doctor).length > 0 ? doctor.image ? doctor.image : EMPTY_IMAGE_PLACEHOLDER : EMPTY_IMAGE_PLACEHOLDER} alt="doctor" />
                    </div>
                    <div class="col-md-8 mt-4 mt-md-0">
                        <h4 class="mb-0"><strong>{"Dr. " + (Object.keys(doctor).length > 0 ? (doctor?.firstName + " " + doctor?.lastName) : "Loading...")}</strong> 
                            <button type="button" class="btn btn-primary float-right px-4" data-toggle="modal" data-target="#bookAppointment">Book Appointment</button>
                        </h4>
                        <small>{doctor?.specialityId?.name}</small>
                        <p class="rating mb-1">
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </p>
                        <p class="mt-2 mb-2"><i class="icon-hospital"></i> {doctor?.hospitalId?.name}</p>
                        <p>{doctor?.about}</p>
                        <h5><strong>Speciality</strong></h5>
                        <p class="mb-1">{doctor?.specialityId?.name}</p>
                        <h5><strong>Experience</strong></h5>
                        <p>{doctor?.experience}</p>
                    </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default BookAppointment
