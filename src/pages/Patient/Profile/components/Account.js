import React, { useContext, useEffect, useState } from 'react'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import SelectInput from '../../../../components/forms/SelectInput'
import TextInput from '../../../../components/forms/TextInput'
import PatientApi from '../../../../api/Patients'
import { RootContext } from '../../../../contextApi'
import { toast } from 'react-toastify'
import { useTranslation } from "react-i18next"

function Account({ deactivePatient }) {
   const { user } = useContext(RootContext)
   const [patient, setPatient] = useState({})
   const { t } = useTranslation()

   useEffect(() => {
      PatientApi.getSinglePatient(user._id).then(patient => {
         console.log("patient => ", patient.data.data)
         setPatient(patient.data.data)
      })
   }, [])

   const funDeactivePatient = async () => {
      let nUser = await deactivePatient(patient._id);
      setPatient(nUser)
      console.log( 'nUser....', nUser );
   }

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
            password: null
         }}
         validationSchema={Yup.object({
            firstName: Yup.string().required(t('Required')),
            lastName: Yup.string().required(t('Required')),
            email: Yup.string().required(t('Required')),
            birthday: Yup.string().required(t('Required')),
            gender: Yup.string().required(t('Required')),
            location: Yup.string().required(t('Required')),
            phone: Yup.string().required(t('Required')),
            password: Yup.string().nullable(),
         })}
         onSubmit={async (values, { setSubmitting, resetForm }) => {
            const response = await PatientApi.updatePatient(user._id, values)
            if (!response.error) {
               toast.success(t("patient_profile_updated"))
               localStorage.clear()
               setTimeout(() => {
                  window.location.reload()
               }, 2000)
            } else {
               toast.error(t("problem_while_updating_patient_profile"))
            }
            resetForm()
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
                     <h4 class="mb-3">{t("personal_details")}</h4>
                     <Form autoComplete={false}>
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="firstName" placeholder={t('first_name')} />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="lastName" placeholder={t('last_name')} />
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="date" name="birthday" placeholder={t('birthday')} />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <SelectInput name="gender">
                                    <option value="">{t('gender')}</option>
                                    <option value="male">{t('male')}</option>
                                    <option value="female">{t('female')}</option>
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
                        <h4 class="mb-3">{t("contact_details")}</h4>
                        <div class="row">
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="location" placeholder={t("location")} />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="text" name="phone" placeholder={t("phone")} />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="email" name="email" placeholder={t("email")} />
                              </div>
                           </div>
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="password" name="password" placeholder={t("change_password")} />
                              </div>
                           </div>
                        </div>
                        <div class="form-group text-center">
                           <button type="submit" class="btn btn-primary mt-2">{t("update")}</button>
                           <button type="button" onClick={funDeactivePatient} class="btn btn-danger mt-2 ml-3">{patient?.accountDeletionRequest ? t("cancelRequest") : t("deleteAccount")}</button>
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
