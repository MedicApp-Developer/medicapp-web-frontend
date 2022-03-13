import React, { useContext, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { createPackage, updatePackage } from '../../../../store/actions/packageActions'
import { getVendors } from '../../../../store/actions/vendorActions'
import { connect } from 'react-redux'
import TextInput from '../../../../components/forms/TextInput'
import TextArea from '../../../../components/forms/TextArea'
import { BUY_SOME_GET_SOME, HOTEL, ON_PERCENTAGE, RESTAURANT, RETAIL, WELLNESS } from '../../../../constants/package'
import SelectInput from '../../../../components/forms/SelectInput'
import { RootContext } from '../../../../contextApi'

function AddVendors({ createPackage, selectedPackage, updatePackage, vendors, getVendors }) {

	const { vendors: allVendors } = vendors
	const { user } = useContext(RootContext);

	useEffect(() => {
		if (allVendors.length === 0) {
			getVendors();
		}
	}, [getVendors, allVendors]);

	return (
		<Formik
			initialValues={{
				type: selectedPackage?.type || "",
				points: selectedPackage?.points || "",
				buyQuantity: selectedPackage?.buyQuantity || "",
				getQuantity: selectedPackage?.getQuantity || "",
				off: selectedPackage?.off || "",
				category: selectedPackage?.category || "",
				about: selectedPackage?.about || "",
				termsAndConditions: selectedPackage?.termsAndConditions || ""
			}}
			validationSchema={Yup.object({
				type: Yup.string().required('Required'),
				points: Yup.number().required('Required'),
				category: Yup.string().required('Required'),
				buyQuantity: Yup.string().when('type', {
					is: BUY_SOME_GET_SOME,
					then: Yup.string().required('Field is required')
				}),
				getQuantity: Yup.string().when('type', {
					is: BUY_SOME_GET_SOME,
					then: Yup.string().required('Field is required')
				}),
				off: Yup.string().when('type', {
					is: ON_PERCENTAGE,
					then: Yup.string().required('Field is required')
				}),
			})}
			onSubmit={(values, { resetForm }) => {
				let tempValues = JSON.parse(JSON.stringify(values));
				tempValues.vendorId = user.referenceId;

				if (selectedPackage === null) {
					createPackage(tempValues)
				} else {
					updatePackage(selectedPackage._id, tempValues)
				}
				resetForm()
			}}
			enableReinitialize={true}
		>
			{({ values }) => (
				<div className="modal fade" id="addPackage" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered modal-lg">
						<div className="modal-content">
							<div className="modal-body">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span className="icon-close"></span>
								</button>
								<h4 className="text-center">{selectedPackage?.firstName ? "Update" : "Add"} Package</h4>
								<Form>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group">
												<SelectInput name="type">
													<option value="">Type</option>
													<option value={ON_PERCENTAGE}>On Percentage</option>
													<option value={BUY_SOME_GET_SOME}>Buy Some, Get Some</option>
												</SelectInput>
											</div>
											<div className="form-group">
												<SelectInput name="category">
													<option value="">Category</option>
													<option value={RESTAURANT}>RESTAURANT</option>
													<option value={RETAIL}>RETAIL</option>
													<option value={WELLNESS}>WELLNESS</option>
													<option value={HOTEL}>HOTEL</option>
												</SelectInput>
											</div>
											<div className="form-group">
												<TextInput type="text" name="points" placeholder="Points Required" />
											</div>
											{values?.type === BUY_SOME_GET_SOME ? (
												<>
													<div className="form-group">
														<TextInput type="text" name="buyQuantity" placeholder="Buy Quantity" />
													</div>
													<div className="form-group">
														<TextInput type="text" name="getQuantity" placeholder="Get Quantity" />
													</div>
												</>
											) : (
												<div className="form-group">
													<TextInput type="text" name="off" placeholder="Off" />
												</div>
											)}
											<div className="form-group">
												<TextArea
													name="termsAndConditions"
													rows="5"
													placeholder="Terms And Conditions"
												/>
											</div>
											<div className="form-group">
												<TextArea
													name="about"
													rows="5"
													placeholder="About Package"
												/>
											</div>
										</div>
									</div>
									<div className="form-group text-center mb-0 mt-3">
										<button type="submit" className="btn btn-primary">{selectedPackage?.firstName ? "Update" : "Save"}</button>
									</div>
								</Form>
							</div>
						</div>
					</div>
				</div>
			)}

		</Formik>
	)
}

const mapStateToProps = (state) => ({
	vendors: state.vendors
})

const mapDispatchToProps = {
	createPackage,
	updatePackage,
	getVendors
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVendors)
