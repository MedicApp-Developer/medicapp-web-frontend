import React from 'react'
import { useEffect, useContext, useState } from 'react';
import AppointmentApi from '../../../api/Appointment';
import { RootContext } from '../../../contextApi';
import DashboardLayout from '../../../layout/DashboardLayout'
import { getHospitalBookedAppointments, deleteDoctorAppointment, setPageNumber } from '../../../store/actions/doctorAppointmentActions'
import { connect } from 'react-redux';
import { getPagesArray } from '../../../Utills/functions';
import classNames from 'classnames'
import moment from 'moment'
import { href } from '../../../constants/extra'
import PATIENT_IMAGE from '../../../assets/images/patient.png'

function AppointmentApprovals({ doctorAppointments, getHospitalBookedAppointments, setPageNumber, deleteDoctorAppointment }) {

	const { user } = useContext(RootContext)

	const { pageNumber, numberOfPages, appointments } = doctorAppointments && doctorAppointments;

	useEffect(() => {
		getHospitalBookedAppointments(user.referenceId, pageNumber || 0);
	}, [getHospitalBookedAppointments, pageNumber, user.referenceId]);

	const onAppointmentDelete = (id) => {
		deleteDoctorAppointment(id);
	}

	const onApprove = async (appointment) => {
		await AppointmentApi.approvePatientAppointment(appointment._id, appointment.patientId._id);
		getHospitalBookedAppointments(user.referenceId, pageNumber || 0);
	}

	const pages = getPagesArray(numberOfPages);

	return (
		<DashboardLayout>
			<div class="row align-items-center add-list">
				<div class="col-12">
					<h4>Appointment Approvals</h4>
				</div>
			</div>
			<div class="row">
				{appointments?.map(appointment => (
					<div class="col-md-12 col-xl-12">
						<div class="card lab-result">
							<div class="card-body">
								<div class="row align-items-center">
									<div class="col-md-9 col-lg-9">
										<ul>
											<li>
												<small class="d-block">Time</small>
												{`${moment(appointment.from).format("DD-MM-YY")} - ( ${moment(appointment.from).format('HH.mm')} - ${moment(appointment.to).format('HH.mm')} )`}
											</li>
											<li class="media">
												{appointment.patientId === null ? "NOT BOOKED" : (
													<>
														<img class="avatar-sm" src={PATIENT_IMAGE} class="mr-3" alt="patient" />
														<div class="media-body">
															<h5 class="mt-0 mb-1">{appointment?.patientId?.firstName + " " + appointment?.patientId?.lastName}</h5>
															<p>Patient</p>
														</div>
													</>
												)}
											</li>
										</ul>
									</div>
									{appointment.patientId !== null && (
										<div class="col-sm-12 col-md-3 col-lg-3 text-center text-lg-right mt-3 mt-md-0 pr-4">
											<a href={href} data-toggle="modal" data-target="#startTreatment" class="btn btn-primary px-3 py-2" onClick={onApprove.bind(this, appointment)}>Approve</a>
										</div>
									)}
								</div>
								<div class="dropdown">
									<a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span class="icon-dots"></span>
									</a>
									<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a class="dropdown-item delete-item" href={null} style={{ cursor: 'pointer' }} onClick={onAppointmentDelete.bind(this, appointment._id)}>Decline</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div class="row">
				<div class="col-md-12">
					{appointments?.length > 0 ? (
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
						<p>No appointments yet</p>
					)}
				</div>
			</div>
		</DashboardLayout>
	)
}

const mapStateToProps = (state) => ({
	doctorAppointments: state.doctorAppointments
})

const mapDispatchToProps = {
	getHospitalBookedAppointments,
	deleteDoctorAppointment,
	setPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentApprovals);
