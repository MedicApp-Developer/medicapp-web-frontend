import React from 'react'
import AppLayout from '../../../../layout/AppLayout'
import APPOINTMENT_IMAGE from '../../../../assets/images/appoint-doctor.png'

function BookAppointment() {

    const href = "";

    return (
        <AppLayout>
            <section class="search-block pt-4">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="row align-items-center mb-4">
                                <div class="col-md-7">
                                <div class="form-group mb-3">
                                    <span class="icon-search ml-3"></span>
                                    <input type="text" class="form-control mr-3" placeholder="Enter specialist" />
                                </div>
                                </div>
                                <div class="col-md-3">
                                <div class="form-group mb-3">
                                    <select class="form-control">
                                        <option>Date</option>
                                    </select>
                                </div>
                                </div>
                                <div class="col-md-2">
                                <button class="btn btn-primary px-3 mb-3" type="submit"><span class="icon-search"></span> Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href={href}>Home</a></li>
                                <li class="breadcrumb-item"><a href={href}>Hospital</a></li>
                                <li class="breadcrumb-item"><a href={href}>Medeot Hospital</a></li>
                                <li class="breadcrumb-item active" aria-current="page"> Doctor</li>
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
                        <img class="img-fluid" src={APPOINTMENT_IMAGE} alt="doctor" />
                    </div>
                    <div class="col-md-8 mt-4 mt-md-0">
                        <h4 class="mb-0"><strong>Dr. Nathan Smith</strong> 
                            <button type="button" class="btn btn-primary float-right px-4" data-toggle="modal" data-target="#bookAppointment">Book Appointment</button>
                        </h4>
                        <small>ENT</small>
                        <p class="rating mb-1">
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </p>
                        <p class="mt-2 mb-2"><i class="icon-hospital"></i> Medeor Hospital</p>
                        <p>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h5><strong>Speciality</strong></h5>
                        <p class="mb-1">ENT Diagnostics</p>
                        <p>Rhinology</p>
                        <h5><strong>Experience</strong></h5>
                        <p>20 Years+</p>
                    </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default BookAppointment
