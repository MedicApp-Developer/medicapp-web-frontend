import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor_placeholder.png'
import { href } from '../../../../constants/extra'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../../components/forms/TextInput';
import DoctorApi from '../../../../api/Doctors';
import { toast } from 'react-toastify';
import ProfilePicture from '../../../Hospital/Profile/components/ProfilePicture';

function DoctorAccount({ doctor, profilePictureUpdated }) {

   const profilePictureUpdateHandler = (id, formData) => {
      DoctorApi.uploadProfilePic(id, formData).then(res => {
         toast.success("Profile picture updated");

         profilePictureUpdated(res.data.data)
      }).catch(err => {
         console.log(err);
         toast.error("Failed to update profile picture")
      })
   }

   const profilePictureDeleteHandler = (id) => {
      DoctorApi.removeProfilePicture(id).then(res => {
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
         {Object.keys(doctor).length > 0 && (
            <Formik
               initialValues={{
                  firstName: doctor.firstName,
                  lastName: doctor.lastName,
                  email: doctor.email,
                  mobile: doctor.mobile,
                  password: "",
                  confirmPassword: ""
               }}
               validationSchema={Yup.object({
                  firstName: Yup.string().required('Required'),
                  lastName: Yup.string().required('Required'),
                  email: Yup.string().required('Required').email(),
                  mobile: Yup.string().required('Required'),
                  password: Yup.string().required('Required'),
                  confirmPassword: Yup.string().required("Required").when("password", {
                     is: val => (val && val.length > 0 ? true : false),
                     then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Both password need to be the same"
                     )
                  })
               })}
               onSubmit={(values, { setSubmitting, resetForm }) => {
                  DoctorApi.updateDoctor(doctor._id, values).then(res => {
                     toast.success("Doctor profile updated");
                     localStorage.clear();
                     setTimeout(() => {
                        window.location.reload();
                     }, 2000);
                  }).catch(err => {
                     toast.error("Problem while updating doctor profile");
                  })
                  resetForm();
               }}
            >
               <>
                  <div class="row align-items-center add-list mb-5">
                     <div class="col-12">
                        <h4>Account</h4>
                     </div>
                  </div>
                  <div class="row patient-profile">
                     <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                        <ProfilePicture
                           data={doctor}
                           updatePicture={profilePictureUpdateHandler}
                           removePicture={profilePictureDeleteHandler}
                           DEFAULTIMAGE={DOCTOR_IMAGE}
                        />
                     </div>
                     <div class="col-md-6 col-lg-8 col-xl-6">
                        <h4 class="mb-3">Doctor Details</h4>
                        <Form>
                           <div class="row">
                              <div class="col-sm-6">
                                 <div class="form-group">
                                    <TextInput type="text" name="firstName" placeholder="First Name" />
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="form-group">
                                    <TextInput type="text" name="lastName" placeholder="Last Name" />
                                 </div>
                              </div>
                           </div>
                           <h4 class="my-3">Contact Details</h4>
                           <div class="row">
                              <div class="col-sm-6">
                                 <div class="form-group">
                                    <TextInput type="text" name="email" placeholder="Email" />
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="form-group">
                                    <TextInput type="text" name="mobile" placeholder="Mobile" />
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="form-group">
                                    <TextInput type="password" name="password" placeholder="Change Password" />
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="form-group">
                                    <TextInput type="password" name="confirmPassword" placeholder="Confirm Password" />
                                 </div>
                              </div>
                           </div>
                           <div class="form-group text-center">
                              <button type="submit" class="btn btn-primary mt-2">Update</button>
                           </div>
                        </Form>
                     </div>
                  </div>
               </>
            </Formik>
         )}
      </>
   )
}

export default DoctorAccount
