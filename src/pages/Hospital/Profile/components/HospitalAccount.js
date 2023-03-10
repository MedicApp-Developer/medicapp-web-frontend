import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import HospitalApi from '../../../../api/Hospital';
import ProfilePicture from './ProfilePicture';
import { RootContext } from '../../../../contextApi'
import HOSPITAL_IMAGE from '../../../../assets/images/medeor_logo.png';

function HospitalAccount({ hospitalId, hospital, setHospital, profilePictureUpdated }) {

   const { setUser } = useContext(RootContext)
   const formik = useFormik({
      initialValues: {
         name: hospital?.hospital?.name,
         tradeLicenseNo: hospital?.hospital?.tradeLicenseNo,
         address: hospital?.hospital?.address,
         phoneNo: hospital?.hospital?.phoneNo,
         email: hospital?.hospital?.email,
         password: "",
         confirmPassword: ""
      },
      validationSchema: Yup.object({
         confirmPassword: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
               [Yup.ref("password")],
               "Both password need to be the same"
            )
         })
      }),
      onSubmit: async values => {
         const response = await HospitalApi.updateHospitalProfile(hospitalId, values);
         if (!response.data.error) {
            console.log('Hospital Updated', response.data.data);
            setHospital(response.data.data.hospital)
            toast.success("Hospital profile updated");
            window.localStorage.setItem('user', JSON.stringify(response.data.data.user));
            setUser(response.data.data.user)
         } else {
            toast.error("Problem while updating the hospital");
         }
      },
      enableReinitialize: true
   });

   const profilePictureUpdateHandler = (id, formData) => {
      HospitalApi.uploadProfilePic(id, formData).then(res => {
         toast.success("Profile picture updated");
         profilePictureUpdated(res.data.data)
      }).catch(err => {
         console.log(err);
         toast.error("Failed to update profile picture")
      })
   }

   const profilePictureDeleteHandler = (id, formData) => {
      HospitalApi.removeProfilePicture(id).then(res => {
         toast.success("Profile picture deleted");
         profilePictureUpdated(res.data.data)
      }).catch(err => {
         console.log(err);
         toast.error("Failed to delete profile picture")
      })
   }

   return (
      <>
         <div className="row patient-profile">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3">
               <ProfilePicture
                  data={hospital?.hospital}
                  updatePicture={profilePictureUpdateHandler}
                  removePicture={profilePictureDeleteHandler}
                  DEFAULTIMAGE={HOSPITAL_IMAGE}
               />
            </div>
            <div className="col-md-6 col-lg-8 col-xl-7">
               <h4 className="mb-3">Hospital Details</h4>
               <form onSubmit={formik.handleSubmit} encType="multipart/form-data" autocomplete="off">
                  <div className="row">
                     <div className="col-sm-6">
                        <div className="form-group">
                           <input type="text" {...formik.getFieldProps('name')} class={(formik.touched.name && formik.errors.name) ? "form-control is-invalid" : "form-control"} placeholder="Hospital Name" />
                           {formik.touched.name && formik.errors.name ? (
                              <div class="invalid-feedback text-right-aligned">{formik.errors.name}</div>
                           ) : null}
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="form-group">
                           <input type="text" {...formik.getFieldProps('tradeLicenseNo')} class={(formik.touched.tradeLicenseNo && formik.errors.tradeLicenseNo) ? "form-control is-invalid" : "form-control"} placeholder="Trade License Number" />
                           {formik.touched.tradeLicenseNo && formik.errors.tradeLicenseNo ? (
                              <div class="invalid-feedback text-right-aligned">{formik.errors.tradeLicenseNo}</div>
                           ) : null}
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-sm-6">
                        <div className="form-group">
                           <input type="text" {...formik.getFieldProps('address')} class={(formik.touched.address && formik.errors.address) ? "form-control is-invalid" : "form-control"} placeholder="Address" />
                           {formik.touched.address && formik.errors.address ? (
                              <div class="invalid-feedback text-right-aligned">{formik.errors.address}</div>
                           ) : null}
                        </div>
                     </div>
                     {/* <div className="col-sm-6">
                           <div className="form-group position-relative">
                              <input type="file" className="form-control custom-file-input" id="validatedCustomFile" />
                              <label className="custom-file-label form-control" htmlFor="validatedCustomFile">Upload Trade License</label>
                           </div>
                        </div> */}
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
                           <input type="password" {...formik.getFieldProps('password')} autocomplete="false" class={(formik.touched.password && formik.errors.password) ? "form-control is-invalid" : "form-control"} placeholder="Password" />
                           {formik.touched.password && formik.errors.password ? (
                              <div class="invalid-feedback text-right-aligned">{formik.errors.password}</div>
                           ) : null}
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="form-group">
                           <input type="password" {...formik.getFieldProps('confirmPassword')} autocomplete="false" class={(formik.touched.confirmPassword && formik.errors.confirmPassword) ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password" />
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

export default HospitalAccount
