import React, { useState } from 'react'
import { href } from '../../../../constants/extra'
import VENDOR_IMAGE from '../../../../assets/images/doctor_placeholder.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import VendorApi from '../../../../api/Vendor';
import { toast } from 'react-toastify';
import ProfilePicture from '../../../Hospital/Profile/components/ProfilePicture';

function VendorAccount({ vendorId, vendor, profilePictureUpdated }) {

	//const [vendor, setVendor] = useState(currentVendor)

	const formik = useFormik({
		initialValues: {
			firstName: vendor?.firstName,
			lastName: vendor?.lastName,
			phoneNo: vendor?.phoneNo,
			email: vendor?.email,
			about: vendor?.about,
			password: ""
		},
		validationSchema: Yup.object({
			password: Yup.string().required('Required'),
			confirmPassword: Yup.string().required("Required").when("password", {
				is: val => (val && val.length > 0 ? true : false),
				then: Yup.string().oneOf(
					[Yup.ref("password")],
					"Both password need to be the same"
				)
			})
		}),
		onSubmit: async values => {
			const response = await VendorApi.updateVendor(vendorId, values);
			if (!response.error) {
				toast.success("Vendor profile updated");
				localStorage.clear();
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			} else {
				toast.error("Problem while updating the vendor");
			}
		},
		enableReinitialize: true
	});


	const profilePictureUpdateHandler = (id, formData) => {
		VendorApi.uploadProfilePic(id, formData).then(res => {
			toast.success("Profile picture updated");
			//setVendor(res.data.data)
			profilePictureUpdated(res.data.data)
		}).catch(err => {
			console.log(err);
			toast.error("Failed to update profile picture")
		})
	}

	const profilePictureDeleteHandler = (id) => {
		VendorApi.removeProfilePicture(id).then(res => {
			toast.success("Profile picture deleted");
			//setVendor(res.data.data)
			profilePictureUpdated(res.data.data)
		}).catch(err => {
			console.log(err);
			toast.error("Failed to delete profile picture")
		})
	}

	return (
		<>
			<div className="row patient-profile">
				{/* <ProfilePicture vendor={vendor} /> */}
				<div className="col-md-3 col-lg-3 col-xl-3">
					{
						vendor &&
						<ProfilePicture
							data={vendor}
							updatePicture={profilePictureUpdateHandler}
							removePicture={profilePictureDeleteHandler}
							DEFAULTIMAGE={VENDOR_IMAGE}
						/>

					}
				</div>
				<div className="col-md-9 col-lg-9 col-xl-8">
					<h4 className="mb-3">Vendor Details</h4>
					<form onSubmit={formik.handleSubmit} encType="multipart/form-data" autocomplete="off">
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<input type="text" {...formik.getFieldProps('firstName')} class={(formik.touched.firstName && formik.errors.firstName) ? "form-control is-invalid" : "form-control"} placeholder="First Name" />
									{formik.touched.firstName && formik.errors.firstName ? (
										<div class="invalid-feedback text-right-aligned">{formik.errors.firstName}</div>
									) : null}
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<input type="text" {...formik.getFieldProps('lastName')} class={(formik.touched.lastName && formik.errors.lastName) ? "form-control is-invalid" : "form-control"} placeholder="Last Name" />
									{formik.touched.lastName && formik.errors.lastName ? (
										<div class="invalid-feedback text-right-aligned">{formik.errors.lastName}</div>
									) : null}
								</div>
							</div>
						</div>
						<div className="row">
						</div>
						<h4 className="mb-4 mt-4">Contact Details</h4>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<input type="email" {...formik.getFieldProps('email')} class={(formik.touched.email && formik.errors.email) ? "form-control is-invalid" : "form-control"} placeholder="Email" />
									{formik.touched.email && formik.errors.email ? (
										<div class="invalid-feedback text-right-aligned">{formik.errors.email}</div>
									) : null}
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<input type="text" {...formik.getFieldProps('phoneNo')} class={(formik.touched.phoneNo && formik.errors.phoneNo) ? "form-control is-invalid" : "form-control"} placeholder="Phone" />
									{formik.touched.phoneNo && formik.errors.phoneNo ? (
										<div class="invalid-feedback text-right-aligned">{formik.errors.phoneNo}</div>
									) : null}
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<input type="password" {...formik.getFieldProps('password')} class={(formik.touched.password && formik.errors.password) ? "form-control is-invalid" : "form-control"} placeholder="Password" />
									{formik.touched.password && formik.errors.password ? (
										<div class="invalid-feedback text-right-aligned">{formik.errors.password}</div>
									) : null}
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<input type="password" {...formik.getFieldProps('confirmPassword')} class={(formik.touched.confirmPassword && formik.errors.confirmPassword) ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password" />
									{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
										<div class="invalid-feedback text-right-aligned">{formik.errors.confirmPassword}</div>
									) : null}
								</div>
							</div>
						</div>

						<div className="form-group text-center">
							<button type="submit" className="btn btn-primary mt-2">Update</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default VendorAccount
