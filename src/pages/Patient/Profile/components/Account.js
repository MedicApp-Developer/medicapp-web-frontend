import React, { useContext, useEffect, useState } from 'react'
import PATIENT_IMAGE from '../../../../assets/images/patient.png';
import { Form , Formik } from 'formik';
import * as Yup from 'yup';
import SelectInput from '../../../../components/forms/SelectInput';
import TextInput from '../../../../components/forms/TextInput';
import PatientApi from '../../../../api/Patients';
import { RootContext } from '../../../../contextApi';
import { toast } from 'react-toastify';

function Account() {
   const { user } = useContext(RootContext);
   const [patient, setPatient] = useState({});

   useEffect(() => {
      PatientApi.getSinglePatient(user.referenceId).then(patient => {
         setPatient(patient.data.data);
      })
   }, []);

    return (
      <Formik
         initialValues={{
            firstName: patient?.firstName,
            lastName: patient?.lastName,
            email: patient?.email,
            birthday: patient?.birthday,
            gender: patient?.gender,
            location: patient?.location,
            phone: patient?.phone,
            password: ""
         }}
         validationSchema={Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            birthday:  Yup.string().required('Required'),
            gender:  Yup.string().required('Required'),
            location:  Yup.string().required('Required'),
            phone:  Yup.string().required('Required'),
            password:  Yup.string().required('Required'),
         })}
         onSubmit={async (values, { setSubmitting, resetForm }) => {
            const response = await PatientApi.updatePatient(user.referenceId, values);
            if(!response.error){
                  toast.success("Patient profile updated");
                  localStorage.clear();
                  setTimeout(() => {
                     window.location.reload();
                  }, 2000);
               }else {
                  toast.error("Problem while updating patient profile");
               }
               resetForm();
            }}
         enableReinitialize={true}
      >
         <section class="user-dashboard">
            <div class="container">
               <div class="row patient-profile">
                  <div class="col-md-3 col-lg-3 col-xl-2">
                     <div class="profile-image">
                        <img src={PATIENT_IMAGE} alt="patient" />
                        <a href="#"><span class="fa fa-pencil"></span></a>
                     </div>
                  </div>
                  <div class="col-md-9 col-lg-9 col-xl-8">
                     <h4 class="mb-3">Personal Details</h4>
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
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="date" name="birthday" placeholder="Birthday" />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <SelectInput name="gender">
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                 </SelectInput>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           {/* <div class="col-sm-6">
                              <div class="form-group position-relative">
                                 <input type="file" class="form-control custom-file-input" id="validatedCustomFile" />
                                 <label class="custom-file-label form-control" for="validatedCustomFile">Update Emirates ID</label>
                              </div>
                           </div> */}
                           {/* <div class="col-sm-6">
                              <div class="form-group">
                                 <input type="text" class="form-control" placeholder="Insurance" />
                              </div>
                           </div> */}
                        </div>
                        <h4 class="mb-3">Contact Details</h4>
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="location" placeholder="Location" />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="phone" placeholder="Phone" />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="email" name="email" placeholder="Email" />
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
                  </div>
               </div>
            </div>
         </section>
      </Formik>
    )
}

export default Account
