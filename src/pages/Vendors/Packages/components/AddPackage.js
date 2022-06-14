import React, { useContext, useEffect, useState } from 'react'
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
import ImageUpload from 'image-upload-react';
import { toast } from 'react-toastify' 

function AddVendors({ categories, createPackage, selectedPackage, updatePackage, vendors, getVendors }) {

	const [imageSrc, setImageSrc] = useState(null);
	const [image, setImage] = useState(null);
	const { vendors: allVendors } = vendors
	const { user } = useContext(RootContext);

	useEffect(() => {
		if (allVendors.length === 0) {
			getVendors();
		}
	}, [getVendors, allVendors]);

	const handleImageSelect = (e) => {
		setImage(e.target.files[0]);
		setImageSrc(URL.createObjectURL(e.target.files[0]))
	}

	return (
		<Formik
			initialValues={{
				type: selectedPackage?.type || "",
				points: selectedPackage?.points || "",
				buyQuantity: selectedPackage?.buyQuantity || "",
				getQuantity: selectedPackage?.getQuantity || "",
				off: selectedPackage?.off || "",
				category: selectedPackage?.category_id._id || "",
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
				let formData = null;
				if (selectedPackage === null) {
					if (imageSrc && image) {
						formData = new FormData();
						formData.append('image', image);
						formData.append('type', values.type);
						formData.append('category_id', values.category);
						formData.append('points', values.points);
						formData.append('vendorId', user.referenceId);
						if (values?.type === BUY_SOME_GET_SOME) {
							formData.append('buyQuantity', values.buyQuantity);
							formData.append('getQuantity', values.getQuantity);
						} else {
							formData.append('off', values.off);
						}

						formData.append('termsAndConditions', values.termsAndConditions);
						formData.append('about', values.about);

						setImage(null);
						setImageSrc(null);
					} else {
						toast.error("Please select package image");
					}
				} else {
					formData = new FormData();
					imageSrc && image && formData.append('image', image);
					formData.append('type', values.type);
					formData.append('category_id', values.category);
					formData.append('points', values.points);
					formData.append('vendorId', user.referenceId);
					if (values?.type === BUY_SOME_GET_SOME) {
						formData.append('buyQuantity', values.buyQuantity);
						formData.append('getQuantity', values.getQuantity);
					} else {
						formData.append('off', values.off);
					}

					formData.append('termsAndConditions', values.termsAndConditions);
					formData.append('about', values.about);

					setImage(null);
					setImageSrc(null);
				}

				if (selectedPackage === null) {
					createPackage(formData)
				} else {
					updatePackage(selectedPackage._id, formData)
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
													{categories.map(item => (
														<option key={item._id} value={item._id}>{item.name_en}</option>
													))}
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
													columns="10"
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
											<div className='form-group'>
												<div className="row mt-12">
													{!imageSrc && (
														<>
															{selectedPackage?.images?.length > 0 && selectedPackage?.images?.map(img => (
																<div className="col-md-12" style={{ marginBottom: "1.5rem" }}>
																	<img className="img-fluid" style={{ width: "100%" }} src={img} alt="hospital" />
																</div>
															))}
														</>
													)}
													<div className="col-md-12">
														<ImageUpload
															handleImageSelect={handleImageSelect}
															imageSrc={imageSrc}
															setImageSrc={setImageSrc}
															style={{
																width: '100%',
																height: '10rem',
																background: '#417EBF',
																textAlign: 'center',
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																flexDirection: 'column',
																marginTop: "0",
																cursor: 'pointer',
															}}
														/>
													</div>
												</div>
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

		</Formik >
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
