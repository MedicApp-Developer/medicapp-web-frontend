import React, { useContext, useEffect } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import PLACEHOLDER_DOCTOR_IMAGE from '../../../assets/images/doctor_placeholder.png'
import AddDoctor from './components/AddDoctor'
import SetDoctorSchedule from './components/SetDoctorSchedule'
import { useHistory } from 'react-router-dom'
import { DOCTOR_INFO_ROUTE } from '../../../constants/Redirects'
import { getDoctors, deleteDoctor, setPageNumber, searchDoctor } from '../../../store/actions/doctorActions'
import { connect } from 'react-redux'
import { getPagesArray } from '../../../Utills/functions'
import classNames from 'classnames'

function Doctors({ getDoctors, doctors, deleteDoctor, setPageNumber, searchDoctor }) {
    const history = useHistory()
    const { pageNumber, numberOfPages, doctors: allDoctors, searchedDoctors, searchedText } = doctors && doctors

    useEffect(() => {
        if (searchedText !== "") {
            searchDoctor(pageNumber, searchedText)
        } else {
            getDoctors(pageNumber || 0)
        }
    }, [getDoctors, pageNumber, searchDoctor, searchedText])

    const onDoctorSelect = (id) => {
        history.push(DOCTOR_INFO_ROUTE + `/${id}`)
    }

    const deleteDoctorHandler = (doctor) => {
        deleteDoctor(doctor._id)
    }

    const pages = getPagesArray(numberOfPages)

    const doctorsList = searchedDoctors.length > 0 ? searchedDoctors : allDoctors

    return (
        <div>
            <DashboardLayout>
                <div className="row align-items-center add-list">
                    <div className="col-6">
                        <h4>Doctors List</h4>
                    </div>
                    <div className="col-6 text-right">
                        <a href={href} data-toggle="modal" data-target="#addDoctor" className="btn btn-primary px-3">+ ADD DOCTOR</a>
                    </div>
                </div>
                <div className="row list-block">
                    {doctorsList?.map(doctor => (
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="pointer" src={doctor?.image ? doctor?.image : PLACEHOLDER_DOCTOR_IMAGE} onClick={() => { onDoctorSelect(doctor._id) }} alt="doctor" />
                                        <div className="media-body">
                                            <h5 className="mt-0">Dr. {doctor.firstName + " " + doctor.lastName}</h5>
                                            <p>{doctor.specialityId?.map(item => item['name_en'] + ", ")}</p>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <a href={`mailto:${doctor.email}`}><span className="icon-email"></span></a>
                                        <a href={`tel:${doctor.mobile}`}><span className="icon-phone"></span></a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon-dots"></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteDoctorHandler(doctor) }}>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div className="row">
                    <div className="col-md-12">
                        {doctorsList?.length > 0 ? (
                            <nav>
                                <ul className="pagination justify-content-center align-items-center my-md-2">
                                    <li className="page-item" style={{ pointerEvents: +pageNumber <= 0 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber - 1) }}>Prev</a></li>
                                    {pages.map((pageIndex) => (
                                        <li className={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a className="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                                    ))}
                                    <li className="page-item" style={{ pointerEvents: +pageNumber === +numberOfPages - 1 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber + 1) }}>Next</a></li>
                                </ul>
                            </nav>
                        ) : (
                            <p>No doctors Found</p>
                        )}

                    </div>
                </div>
                {/* Add Doctor Modal */}
                <AddDoctor />
                {/* Set Doctor Schedule */}
            </DashboardLayout>
        </div>
    )
}

const mapStateToProps = (state) => ({
    doctors: state.doctors
})

const mapDispatchToProps = {
    getDoctors,
    deleteDoctor,
    setPageNumber,
    searchDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors)
