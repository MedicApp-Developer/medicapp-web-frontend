import React, { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextArea from '../../../../components/forms/TextArea'
import TextInput from '../../../../components/forms/TextInput'
import DoctorApi from '../../../../api/Doctors'
import { toast } from 'react-toastify'
import MultipleSelect from '../../../../components/forms/MultipleSelect'

function UpdateDoctorProfile({ doctor, setDoctor, selectedSpeciality, setSelectedSpeciality }) {

   const [allSpecialities, setAllSpecialities] = useState([])

   const [specialityError, setSpecialityError] = useState(false)

   useEffect(() => {
      DoctorApi.getAllSpecialities("undefined").then(res => {
         const data = []

         res.data.data.forEach(item => {
            data.push({
               label: item.name_en,
               value: item._id
            })
         })
         setAllSpecialities(data)
      })
   }, [doctor])

   return (
      <>
         {Object.keys(doctor).length > 0 && (
            <Formik
               initialValues={{
                  experience: doctor.experience,
                  about: doctor.about
               }}
               validationSchema={Yup.object({
                  experience: Yup.string().required('Required'),
                  about: Yup.string().required('Required')
               })}
               onSubmit={async (values, { setSubmitting, resetForm }) => {
                  if (selectedSpeciality.length === 0) {
                     setSelectedSpeciality(true)
                  } else {
                     const newValues = JSON.parse(JSON.stringify(values))

                     const specialityIds = []
                     selectedSpeciality.forEach(item => {
                        specialityIds.push(item.value)
                     })
                     newValues.specialityId = specialityIds
                     const response = await DoctorApi.updateDoctor(doctor._id, newValues)
                     if (!response.data.error) {
                        console.log('Doctor Updated', response.data);
                        setDoctor(response.data.data.doctor)
                        toast.success("Doctor profile updated");
                     } else {
                        toast.error("Problem while updating the doctor");
                     }
                  }

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
                                       <MultipleSelect
                                          options={allSpecialities}
                                          value={selectedSpeciality}
                                          changeHandler={(e) => { setSelectedSpeciality(e); e.length > 0 ? setSpecialityError(false) : setSpecialityError(true) }}
                                          hasError={specialityError}
                                          label={"Select Speciality"}
                                          errorMessage={"Speciality is required"}
                                       />
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
