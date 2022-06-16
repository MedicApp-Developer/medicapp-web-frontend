import React from 'react'
import { href } from '../../../../constants/extra'
import mapImage from '../../../../assets/images/map.png';
import PATIENT_IMAGE from '../../../../assets/images/patient.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import HospitalApi from '../../../../api/Hospital';
import { useHistory } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../../constants/Redirects';
import ShowMap from './ShowMap';
import ProfilePicture from './ProfilePicture';
import HOSPITAL_IMAGE from '../../../../assets/images/medeor_logo.png';

function HospitalAccount({ hospitalId, hospital }) {
   console.log('hospital?.hospital: ', hospital?.hospital)
   const history = useHistory();

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
         password: Yup.string().required("Required"),
         confirmPassword: Yup.string().required("Required").when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
               [Yup.ref("password")],
               "Both password need to be the same"
            )
         })
      }),
      onSubmit: async values => {
         const response = await HospitalApi.updateHospitalProfile(hospitalId, values);
         if (!response.error) {
            toast.success("Hospital profile updated");
            localStorage.clear();
            setTimeout(() => {
               window.location.reload();
            }, 2000);
         } else {
            toast.error("Problem while updating the hospital");
         }
      },
      enableReinitialize: true
   });

   return (
      <>
         <div className="row patient-profile">
            <div className="col-md-3 col-lg-3 col-xl-3">
               <ProfilePicture
                  data={hospital?.hospital}
                  updatePicture={HospitalApi.uploadProfilePic}
                  removePicture={HospitalApi.removeProfilePicture}
                  DEFAULTIMAGE={HOSPITAL_IMAGE}
               />
            </div>
            <div className="col-md-9 col-lg-9 col-xl-9">
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
