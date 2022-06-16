import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import NURSE_IMAGE from '../../../assets/images/nurse_placeholder.png'
import { RootContext } from '../../../contextApi'
import NurseApi from '../../../api/Nurse';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../components/forms/TextInput';
import ProfilePicture from '../../Hospital/Profile/components/ProfilePicture';

function NurseProfile() {

   const { user } = useContext(RootContext);
   const [nurse, setNurse] = useState({});

   useEffect(() => {
      NurseApi.getSingleNurse(user?.referenceId).then(res => {
         setNurse(res.data.data);
         console.log(res.data.data)
      });
   }, [user?.referenceId]);

   return (
      <DashboardLayout>
         <Formik
            initialValues={{
               email: nurse?.email,
               firstName: nurse?.firstName,
               lastName: nurse?.lastName,
               mobile: nurse?.mobile,
               password: "",
               confirmPassword: ""
            }}
            validationSchema={Yup.object({
               email: Yup.string().required('Required').email(),
               firstName: Yup.string().required('Required'),
               lastName: Yup.string().required('Required'),
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
            onSubmit={(values, { setSubmitting }) => {
               setSubmitting(true);
               NurseApi.updateNurse(user.referenceId, values);
               setTimeout(() => {
                  localStorage.clear();
                  window.location.reload();
               }, 1000);
            }}
            enableReinitialize={true}
         >
            <>
               <div class="row align-items-center add-list mb-5">
                  <div class="col-12">
                     <h4>Account</h4>
                  </div>
               </div>
               <div class="row patient-profile">
                  <div class="col-md-3 col-lg-3 col-xl-3">
                     <ProfilePicture
                        data={nurse}
                        updatePicture={NurseApi.uploadProfilePic}
                        removePicture={NurseApi.removeProfilePicture}
                        DEFAULTIMAGE={NURSE_IMAGE}
                     />
                  </div>
                  <div class="col-md-9 col-lg-9 col-xl-8">
                     <h4 class="mb-3">Nurse Details</h4>
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
                                 <TextInput type="email" name="email" placeholder="Email" />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="mobile" placeholder="Mobile" />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="password" placeholder="Change Password" />
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

      </DashboardLayout>
   )
}

export default NurseProfile
