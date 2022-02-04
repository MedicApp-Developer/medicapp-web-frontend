import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextArea from '../../../../components/forms/TextArea'
import TextInput from '../../../../components/forms/TextInput'
import DoctorApi from '../../../../api/Doctors'
import { toast } from 'react-toastify'
import SelectInput from '../../../../components/forms/SelectInput'

function UpdateDoctorProfile({ doctor, setDoctor }) {

   const [allSpecialities, setAllSpecialities] = useState([])

   useEffect(() => {
      DoctorApi.getAllSpecialities().then(res => {
         setAllSpecialities(res.data.data)
      })
   }, [])

   return (
      <>
         {Object.keys(doctor).length > 0 && (
            <Formik
               initialValues={{
                  specialityId: doctor.specialityId._id,
                  experience: doctor.experience,
                  about: doctor.about
               }}
               validationSchema={Yup.object({
                  specialityId: Yup.string().required('Required'),
                  experience: Yup.string().required('Required'),
                  about: Yup.string().required('Required')
               })}
               onSubmit={(values, { setSubmitting, resetForm }) => {
                  DoctorApi.updateDoctor(doctor._id, values).then(res => {
                     toast.success("Doctor profile updated")
                     setTimeout(() => {
                        window.location.reload()
                     }, 2000)
                  }).catch(err => {
                     toast.error("Problem while updating doctor profile")
                  })
                  resetForm()
               }}
            >
               <div class="modal fade" id="updateDoctor" tabindex="-1" aria-labelledby="updateDoctorLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg">
                     <div class="modal-content">
                        <div class="modal-body">
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span class="icon-close"></span>
                           </button>
                           <h4 class="text-center">Update Doctor’s Profile</h4>
                           <Form>
                              <div class="row">
                                 <div class="col-sm-6">
                                    <div class="form-group">
                                       <SelectInput name="specialityId">
                                          <option value="">Select Speciality</option>
                                          {allSpecialities?.map(spec => (
                                             <option value={spec._id}>{spec.name_en}</option>
                                          ))}
                                       </SelectInput>
                                    </div>
                                 </div>
                                 <div class="col-sm-6">
                                    <div class="form-group">
                                       <TextInput type="text" name="experience" placeholder="Experience" />
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-md-12">
                                    <div class="form-group">
                                       <TextArea name="about" rows="5" placeholder="About Doctor" />
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group text-center mb-0">
                                 <button type="submit" class="btn btn-primary">Update</button>
                              </div>
                           </Form>
                        </div>
                     </div>
                  </div>
               </div>
            </Formik>
         )}
      </>
   )
}

export default UpdateDoctorProfile
