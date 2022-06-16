import React, { useContext, useEffect, useState } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import LAB_IMAGE from '../../../assets/images/laboratory.png';
import { toast } from 'react-toastify';
import { Form , Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../components/forms/TextInput';
import LaboratoryApi from '../../../api/Laboratory';
import { RootContext } from '../../../contextApi';
import ProfilePicture from '../../Hospital/Profile/components/ProfilePicture';

function LaboratoryProfile() {
   const { user } = useContext(RootContext);
   const [lab, setLab] = useState({});

    useEffect(() => {
        LaboratoryApi.getSingleLab(user.referenceId).then(res => {
            setLab(res.data.data);
        });
    }, [user.referenceId]);
    return (
        <DashboardLayout>
            <div class="row align-items-center add-list mb-5">
               <div class="col-12">
                  <h4>Account</h4>
               </div>
            </div>
            <div class="row patient-profile">
               <div class="col-md-3 col-lg-3 col-xl-3">
                  {/* <div class="profile-image"> */}
                     <ProfilePicture 
                        data={lab}
                        updatePicture={LaboratoryApi.uploadProfilePic}
                        removePicture={LaboratoryApi.removeProfilePicture}
                        DEFAULTIMAGE={LAB_IMAGE}
                     />
                     {/* <img src={PATIENT_IMAGE} alt="patient" />
                     <a href={href}><span class="fa fa-pencil"></span></a> */}
                  {/* </div> */}
               </div>
               <div class="col-md-9 col-lg-9 col-xl-8">
                  <h4 class="mb-3">Laboratory Details</h4>
                     {Object.keys(lab).length > 0 && (
                        <Formik
                           initialValues={{
                              firstName: lab.firstName,
                              lastName: lab.lastName,
                              email: lab.email,
                              mobile: lab.mobile,
                              password: ""
                           }}
                           validationSchema={Yup.object({
                              firstName: Yup.string().required('Required'),
                              lastName: Yup.string().required('Required'),
                              email: Yup.string().required('Required').email(),
                              mobile: Yup.string().required('Required'),
                              password: Yup.string().required('Required')
                           })}
                           onSubmit={(values, { setSubmitting, resetForm }) => {
                              LaboratoryApi.updateLab(lab._id, values).then(res => {
                                 toast.success("Laboratory updated successfully");
                                 localStorage.clear();
                                 setTimeout(() => {
                                    window.location.reload();
                                 }, 2000);
                              }).catch(err => {
                                 toast.error("Problem updating laboratory profile");
                              })
                           }}
                     >
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
                        </div>
                        <div class="form-group text-center">
                           <button type="submit" class="btn btn-primary mt-2">Update</button>
                        </div>
                     </Form>
                  </Formik>
                     )}
               </div>
            </div>
        </DashboardLayout>
    )
}

export default LaboratoryProfile
