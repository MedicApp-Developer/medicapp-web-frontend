import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../../../../components/forms/TextInput'
import { updatePatientVitals } from '../../../../store/actions/patientActions'
import PatientApi from '../../../../api/Patients'
import { connect } from 'react-redux'
import { RootContext } from '../../../../contextApi'

function UpdateProfile({ patient }) {
	console.log("patient => ", patient)
	return (
		<Formik
			initialValues={{
				bloodType: patient?.bloodType,
				allergies: patient?.allergies?.join(","),
				height: patient?.height,
				weight: patient?.weight,
				heartRate: patient?.heartRate,
				temprature: patient?.temprature,
				glucose: patient?.glucose
			}}
			validationSchema={Yup.object({
				bloodType: Yup.string().required('Required'),
				allergies: Yup.string().required('Required'),
				height: Yup.string().required('Required'),
				weight: Yup.string().required('Required'),
				heartRate: Yup.string().required('Required'),
				temprature: Yup.string().required('Required'),
				glucose: Yup.string().required('Required')
			})}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				const newPatient = JSON.parse(JSON.stringify(values))
				newPatient.allergies = values.allergies.split(',')
				PatientApi.updatePatient(patient._id, values).then(res => {
					setTimeout(() => {
						window.location.reload()
					}, 500)
				})
			}}
			enableReinitialize={true}
		>
			<div class="modal fade" id="updateVitals" tabindex="-1" aria-labelledby="addPatientLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span class="icon-close"></span>
							</button>
							<h4 class="text-center">Update Vitals</h4>
							<Form>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="bloodType" placeholder="Blood Type" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="allergies" placeholder="Allergies" />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="height" placeholder="Height" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="weight" placeholder="Weight" />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="heartRate" placeholder="Heart Rate" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="temprature" placeholder="Temprature" />
										</div>

									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="glucose" placeholder="Glucose" />
										</div>
									</div>
								</div>
								<div class="form-group text-center mb-0">
									<button type="submit" class="btn btn-primary">Confirm</button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>

		</Formik>
	)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
	updatePatientVitals
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)
