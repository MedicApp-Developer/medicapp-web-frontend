import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import DoctorApi from '../../../../api/Doctors'
import { RootContext } from '../../../../contextApi'
import * as Yup from 'yup'
import TextInput from '../../../../components/forms/TextInput'
import TextArea from '../../../../components/forms/TextArea'

function CreateSickLeave({ patientId }) {
	const { user } = useContext(RootContext)
	return (
		<Formik
			initialValues={{
				days: "",
				description: ""
			}}
			validationSchema={Yup.object({
				days: Yup.string().required('Required'),
				description: Yup.string().required('Required'),
			})}
			onSubmit={(values, { resetForm }) => {
				const leave = {
					doctorId: user.referenceId,
					patientId,
					days: values.days,
					description: values.description
				}
				DoctorApi.createSickLeave(leave).then(res => {
					toast.success("Sick Leave Approval")
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
											<TextInput type="text" name="days" placeholder="Days Of Sick Leaves" />
										</div>
									</div>
									<div className="col-md-6">
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
