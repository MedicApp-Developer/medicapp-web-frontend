import React, { useEffect, useState } from 'react'
import DoctorApi from '../../../api/Doctors';
import { href } from '../../../constants/extra';
import DashboardLayout from '../../../layout/DashboardLayout'
import PLACEHOLDER_DOCTOR_IMAGE from '../../../assets/images/doctor_placeholder.png'
import AddDoctor from './components/AddDoctor';
import { toast } from 'react-toastify';
import SetDoctorSchedule from './components/SetDoctorSchedule';
import { useHistory } from 'react-router-dom';
import { DOCTOR_INFO_ROUTE } from '../../../constants/Redirects';

function Doctors() {

    const [doctors, setDoctors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        DoctorApi.getAllDoctors().then(res => {
            setDoctors(res.data.data)
        });
    }, []);

    const deleteDoctor = (doctor) => {
        DoctorApi.deleteDoctor(doctor._id).then(res => {
            toast.success("Doctor deleted successfully");
        }).catch(err => {
            toast.error("Problem while deleting doctor");
        });
    }

    return (
        <div>
            <DashboardLayout>
                <div class="row align-items-center add-list">
                    <div class="col-6">
                        <h4>Doctors List</h4>
                    </div>
                    <div class="col-6 text-right">
                        <a href={href} data-toggle="modal" data-target="#addDoctor" class="btn btn-primary px-3">+ ADD DOCTOR</a>
                    </div>
                </div>
                <div class="row list-block">
                    { doctors?.map(doctor => (
                        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body pointer" onClick={() => { history.push(DOCTOR_INFO_ROUTE) }}>
                                    <div class="media">
                                    <img src={doctor?.image ? doctor?.image : PLACEHOLDER_DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                        <h5 class="mt-0">Dr. {doctor.firstName + " " + doctor.lastName}</h5>
                                        <p>Dentist</p>
                                    </div>
                                    </div>
                                    <div class="contact-info">
                                        <a href={href}><span class="icon-email"></span></a>
                                        <a href={href}><span class="icon-phone"></span></a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="icon-dots"></span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href={href} data-toggle="modal" data-target="#setSchedule">Set Schedule</a>
                                        <a class="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteDoctor(doctor)}}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div class="row">
                    <div class="col-md-12">
                            <nav>
                                <ul class="pagination justify-content-center align-items-center my-md-2">
                                    <li class="page-item"><a href="#">Prev</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                {/* Add Doctor Modal */}
                <AddDoctor />
                {/* Set Doctor Schedule */}
                <SetDoctorSchedule />
            </DashboardLayout>
        </div>
    )
}

export default Doctors
