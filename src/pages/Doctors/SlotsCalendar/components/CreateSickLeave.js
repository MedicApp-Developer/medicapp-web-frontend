import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import DoctorApi from '../../../../api/Doctors'
import { RootContext } from '../../../../contextApi'
import * as Yup from 'yup'
import TextInput from '../../../../components/forms/TextInput'
import TextArea from '../../../../components/forms/TextArea'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'

function CreateSickLeave({ patientId }) {
	const { user } = useContext(RootContext)
	const [from, setFrom] = useState(new Date())
	const [to, setTo] = useState(new Date())
	const [fromError, setFromError] = useState(false)
	const [toError, setToError] = useState(false)

	return (
		<Formik
			initialValues={{
				description: ""
			}}
			validationSchema={Yup.object({
				description: Yup.string().required('Required'),
			})}
			onSubmit={(values, { resetForm }) => {
				const leave = {
					doctorId: user.referenceId,
					patientId,
					to,
					from,
					description: values.description
				}
				DoctorApi.createSickLeave(leave).then(res => {
					toast.success("Sick Leave Approval")
					resetForm()
				}).catch(err => {
					toast.error("Problem while creating sick leave")
				})
			}}
			enableReinitialize={true}
		>
			<div className="modal fade" id="sickLeave" tabindex="-1" aria-labelledby="sickLeaveLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '90%' }}>
					<div className="modal-content">
						<div className="modal-body">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span className="icon-close"></span>
							</button>
							<h4 className="text-center">Approve Sick Leave</h4>
							<Form>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<DatePicker
												id="from"
												className="form-control"
												placeholderText="From Date"
												selected={from}
												onChange={(date) => setFrom(date)}
												minDate={new Date()}
												dateFormat="MMMM d, yyyy h:mm aa"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<DatePicker
												id="to"
												className="form-control"
												placeholderText="To Date"
												selected={to}
												onChange={(date) => setTo(date)}
												minDate={new Date()}
												dateFormat="MMMM d, yyyy h:mm aa"
											/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<TextArea name="description" rows="5" placeholder="Comments" />
										</div>
									</div>
								</div>
								<div className="form-group text-center">
									<button type='submit' className='btn btn-primary' >Approve</button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</Formik>
	)
}

export default CreateSickLeave
