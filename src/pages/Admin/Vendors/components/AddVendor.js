import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { createVendor, updateVendor } from '../../../../store/actions/vendorActions'
import { connect } from 'react-redux'
import TextInput from '../../../../components/forms/TextInput'
import TextArea from '../../../../components/forms/TextArea'

function AddVendors({ createVendor, selectedVendor, updateVendor }) {
	return (
		<Formik
			initialValues={{
				firstName: selectedVendor?.firstName || "",
				email: selectedVendor?.email || "",
				lastName: selectedVendor?.lastName || "",
				phoneNo: selectedVendor?.phoneNo || "",
				about: selectedVendor?.about || "",
				address: selectedVendor?.address || "",
				branch_name: selectedVendor?.branch_name || "",
			}}
			validationSchema={Yup.object({
				firstName: Yup.string().required('Required'),
				email: Yup.string().required('Required'),
				lastName: Yup.string().required('Required'),
				phoneNo: Yup.string().required('Required'),
				address: Yup.string().required('Required'),
				branch_name: Yup.string().required('Required'),
			})}
			onSubmit={(values, { resetForm }) => {
				if (selectedVendor === null) {
					createVendor(values)
				} else {
					updateVendor(selectedVendor._id, values)
				}
				resetForm()
			}}
			enableReinitialize={true}
		>
			<div className="modal fade" id="addVendor" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">
						<div className="modal-body">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span className="icon-close"></span>
							</button>
							<h4 className="text-center">{selectedVendor?.firstName ? "Update" : "Add"} Vendor</h4>
							<Form>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<TextInput type="text" name="firstName" placeholder="First Name" />
										</div>
										<div className="form-group">
											<TextInput type="text" name="lastName" placeholder="Last Name" />
										</div>
										<div className="form-group">
											<TextInput type="text" name="branch_name" placeholder="Branch Name" />
										</div>
										<div className="form-group">
											<TextInput type="email" name="email" placeholder="Email" />
										</div>
										<div className="form-group">
											<TextInput type="text" name="address" placeholder="Address" />
										</div>
										<div className="form-group">
											<TextInput type="text" name="phoneNo" placeholder="Mobile" />
										</div>
										<div className="form-group">
											<TextArea
												name="about"
												rows="5"
												placeholder="About Vendor"
											/>
										</div>
									</div>
								</div>
								<div className="form-group text-center mb-0 mt-3">
									<button type="submit" className="btn btn-primary">{selectedVendor?.firstName ? "Update" : "Save"}</button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</Formik>
	)
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
	createVendor,
	updateVendor
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVendors)
