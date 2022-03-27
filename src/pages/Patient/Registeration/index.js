import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import AuthApi from '../../../api/Auth'
import { Link, useHistory } from 'react-router-dom'
import { LOGIN_ROUTE, SELECT_REGISTERATION_TYPE_ROUTE } from '../../../constants/Redirects'
import LOGO from '../../../assets/images/logo.png'
import { FEMALE, MALE, OTHER } from '../../../constants/Roles'
import SelectInput from '../../../components/forms/SelectInput'
import TextInput from '../../../components/forms/TextInput'
import PatientApi from '../../../api/Patients'
import NumberFormatInput from '../../../components/forms/NumberFormat'
import { useTranslation } from "react-i18next"

function PatientRegisteration() {
    const { t } = useTranslation()

    const [file, setFile] = useState(null)
    const [submited, setSubmited] = useState(false)

    const history = useHistory()

    const onFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                emiratesId: "",
                birthday: "",
                gender: "",
                location: "",
                phone: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().required(t('required')),
                lastName: Yup.string().required(t('required')),
                email: Yup.string().required(t('required')),
                emiratesId: Yup.string().required(t('required')),
                birthday: Yup.string().required(t('required')),
                gender: Yup.string().required(t('required')).nullable(),
                location: Yup.string().required(t('required')),
                phone: Yup.string().required(t('required')),
                password: Yup.string().required(t('required')),
                confirmPassword: Yup.string().required(t('required')).when("password", {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        t("both_password_need_to_be_the_same")
                    )
                })
            })}
            onSubmit={async (values, { setSubmitting }) => {
                PatientApi.registerPatient(values).then(res => {
                    toast.success(t("patient_registered_successfully"))
                    history.push(LOGIN_ROUTE)
                }).catch(err => {
                    toast.error(err.response.data.message)
                })
            }}
            enableReinitialize={true}
        >
            <section class="user-account">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 action-icon">
                            <Link to={SELECT_REGISTERATION_TYPE_ROUTE}><span class="icon-angle-left"></span></Link>
                            {/* <Link to={SELECT_REGISTERATION_TYPE_ROUTE}><span class="icon-close"></span></Link> */}
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-9 col-md-7 col-lg-5 text-center">
                            <img class="logo" src={LOGO} alt="logo" />
                            <h3 class="mb-4">{t("patient_registration")}</h3>
                            <Form encType="multipart/form-data">
                                <div class="form-row">
                                    <div class="col">
                                        <div class="form-group">
                                            <TextInput type="text" name="firstName" placeholder={t("first_name")} />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <TextInput type="text" name="lastName" placeholder={t("last_name")} />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <TextInput type="email" name="email" placeholder={t("email")} />
                                </div>
                                <div class="form-group">
                                    <TextInput type="text" name="emiratesId" placeholder={t("emirates_id")} />
                                </div>
                                <div class="form-group">
                                    <TextInput type="date" name="birthday" placeholder={t("birthday")} />
                                </div>
                                <div class="form-group">
                                    <SelectInput name="gender">
                                        <option value="">{t("gender")}</option>
                                        <option value={MALE}>{t("male")}</option>
                                        <option value={FEMALE}>{t("female")}</option>
                                        <option value={OTHER}>{t("other")}</option>
                                    </SelectInput>
                                </div>
                                <div class="form-group">
                                    <TextInput type="text" name="location" placeholder={t("location")} />
                                </div>
                                <div class="form-group">
                                    <NumberFormatInput
                                        format={"+971-## ### ####"}
                                        mask={"_"}
                                        name="phone" placeholder={t("phone")}
                                    />
                                </div>
                                {/* <div class="form-group">
                                    <input type="file" class="form-control custom-file-input" id="validatedCustomFile" onChange={onFileUpload} />
                                    <label class="custom-file-label form-control" for="validatedCustomFile">{file ? file.name : "Upload Emirates ID File"} </label>
                                    {submited && !file ? (
                                        <div class="invalid-feedback text-right-aligned">Trade License is required</div>
                                    ) : null}
                                </div> */}
                                <div class="form-group">
                                    <TextInput type="password" name="password" placeholder={t("password")} />
                                </div>
                                <div class="form-group">
                                    <TextInput type="password" name="confirmPassword" placeholder={t("confirm_password")} />
                                </div>
                                <button type="submit" class="btn btn-primary mt-2">{t("register")}</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </Formik>
    )
}

export default PatientRegisteration
