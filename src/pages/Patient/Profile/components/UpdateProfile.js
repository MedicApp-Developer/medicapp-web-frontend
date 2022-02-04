import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../../../../components/forms/TextInput'
import { updatePatientVitals } from '../../../../store/actions/patientActions'
import PatientApi from '../../../../api/Patients'
import { connect } from 'react-redux'
import { RootContext } from '../../../../contextApi'
import { useTranslation } from "react-i18next"

function UpdateProfile({ patient }) {
	const { t } = useTranslation()

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
				bloodType: Yup.string().required(t('required')),
				allergies: Yup.string().required(t('required')),
				height: Yup.string().required(t('required')),
				weight: Yup.string().required(t('required')),
				heartRate: Yup.string().required(t('required')),
				temprature: Yup.string().required(t('required')),
				glucose: Yup.string().required(t('required'))
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
							<h4 class="text-center">{t("update_vitals")}</h4>
							<Form>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="bloodType" placeholder={t("blood_type")} />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="allergies" placeholder={t("allergies")} />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="height" placeholder={t("height")} />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="weight" placeholder={t("weight")} />
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="heartRate" placeholder={t("heart_rate")} />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="temprature" placeholder={t("body_temperature")} />
										</div>

									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<TextInput type="text" name="glucose" placeholder={t("glucose")} />
										</div>
									</div>
								</div>
								<div class="form-group text-center mb-0">
									<button type="submit" class="btn btn-primary">{t("confirm")}</button>
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
