import React, { useContext, useEffect, useState } from 'react'
import PATIENT_IMAGE from '../../../../assets/images/doctor_placeholder.png'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import SelectInput from '../../../../components/forms/SelectInput'
import TextInput from '../../../../components/forms/TextInput'
import MultipleSelect from '../../../../components/forms/MultipleSelect'
import PatientApi from '../../../../api/Patients'
import { RootContext } from '../../../../contextApi'
import { toast } from 'react-toastify'
import { useTranslation } from "react-i18next"
import { useHistory } from 'react-router-dom'
import AccountDelete from './AccountDelete'
import ProfilePicture from '../../../Hospital/Profile/components/ProfilePicture'
import NumberFormatInput from '../../../../components/forms/NumberFormat'

function Account({ deactivePatient, currentPatient, profileUpdated, insurances, setInsurances }) {
   const { user, setUser } = useContext(RootContext)
   const [patient, setPatient] = useState(currentPatient)
   const { t } = useTranslation()
   const history = useHistory()

   const funDeactivePatient = async () => {
      let nUser = await deactivePatient(patient._id);
      setPatient(nUser)
      if (nUser.accountDeletionRequest) {
         localStorage.clear()
         window.location.href = "/"
      }
   }
   const imageUpdateHandler = (id, formData) => {
      PatientApi.uploadProfilePic(id, formData).then(res => {
         toast.success("Profile picture updated");
         setPatient(res.data.data)
         profileUpdated(res.data.data)
      }).catch(err => {
         toast.error("Failed to update profile picture");
         console.log(err);
      });
   }

   const imageDeleteHandler = (id) => {
      PatientApi.removeProfilePicture(id).then(res => {
         toast.success("Profile picture deleted");
         setPatient(res.data.data)
         profileUpdated(res.data.data)
      }).catch(err => {
         toast.error("Failed to delete profile picture");
         console.log(err);
      });
   }

   return (
      <Formik
         initialValues={{
            firstName: patient?.firstName,
            lastName: patient?.lastName,
            email: patient?.email,
            birthday: patient?.birthday,
            gender: patient?.gender?.toLowerCase(),
            location: patient?.location,
            phone: patient?.phone,
            password: '',
            confirmPassword: '',
         }}
         validationSchema={Yup.object({
            firstName: Yup.string().required(t('Required')),
            lastName: Yup.string().required(t('Required')),
            email: Yup.string().required(t('Required')),
            birthday: Yup.string().required(t('Required')),
            gender: Yup.string().required(t('Required')),
            location: Yup.string().required(t('Required')),
            phone: Yup.string().required(t('Required')),
            password: Yup.string().required(t('Required')),
            confirmPassword: Yup.string().required(t('Required')).when("password", {
               is: val => (val && val.length > 0 ? true : false),
               then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  t('both_password_need_to_be_the_same')
               )
            })
         })}
         onSubmit={async (values, { setSubmitting, resetForm }) => {
            const newValues = JSON.parse(JSON.stringify(values))
            const insurancesId = []
            insurances.selectedInsurances.map(item => {
               insurancesId.push(item.value)
            })
            newValues.insurances = insurancesId
            const response = await PatientApi.updatePatient(user._id, newValues)
            if (!response.error) {
               toast.success(t("patient_profile_updated"))
               setTimeout(() => {
                  localStorage.clear()
                  window.location.href = "/"
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
                  <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                     <ProfilePicture
                        data={patient}
                        updatePicture={imageUpdateHandler}
                        removePicture={imageDeleteHandler}
                        DEFAULTIMAGE={PATIENT_IMAGE}
                     />
                     {/* <div class="profile-image">
                        <img src={PATIENT_IMAGE} alt="patient" />
                        <a href='#'><span class="fa fa-pencil"></span></a>
                     </div> */}
                  </div>
                  <div class="col-md-8 col-lg-8 col-xl-8">
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
                                 <SelectInput name="gender" style={{ height: "50px" }}>
                                    <option value="">{t('gender')}</option>
                                    <option value="male">{t('male')}</option>
                                    <option value="female">{t('female')}</option>
                                 </SelectInput>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 {insurances.selectedInsurances.length > 0 ? (
                                    <MultipleSelect
                                       options={insurances.insurances}
                                       value={insurances.selectedInsurances}
                                       changeHandler={(e) => { setInsurances({ ...insurances, selectedInsurances: e }) }}
                                       label={"Select supported insurances (optional)"}
                                       errorMessage={"Services are required"}
                                    />
                                 ) : (
                                    <MultipleSelect
                                       options={insurances.insurances}
                                       value={insurances.selectedInsurances}
                                       changeHandler={(e) => { setInsurances({ ...insurances, selectedInsurances: e }) }}
                                       label={"Select supported insurances (optional)"}
                                       errorMessage={"Services are required"}
                                    />
                                 )}
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
                                 <NumberFormatInput
                                    format={"+971-## ### ####"}
                                    mask={"-"}
                                    name="phone"
                                    defaultValue={t("phone")}
                                    placeholder={t("phone")} />
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
                           <div class="col-sm-6">
                              <div class="form-group">
                                 <TextInput type="password" name="confirmPassword" placeholder={t("confirm_password")} />
                              </div>
                           </div>
                        </div>
                        <div class="form-group text-center">
                           <button type="submit" class="btn btn-primary mt-2">{t("update")}</button>
                           <a href="javascript:void(0)" data-toggle="modal" data-target="#deleteAccount" class="btn btn-danger ml-3 mt-2">{patient?.accountDeletionRequest ? t("cancelRequest") : t("deleteAccount")}</a>
                        </div>
                     </Form>
                  </div>
               </div>
            </div>
            <AccountDelete funDeactiveAccount={funDeactivePatient} />
         </section>
      </Formik>
   )
}

export default Account
