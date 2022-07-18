import { Form, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
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
import LookupApi from '../../../api/lookups'
import NumberFormatInput from '../../../components/forms/NumberFormat'
import MultipleSelect from '../../../components/forms/MultipleSelect'
import { useTranslation } from "react-i18next"
import { usePromiseTracker } from "react-promise-tracker";
import HashLoader from "react-spinners/HashLoader";

function PatientRegisteration() {
    const { t } = useTranslation()

    const [file, setFile] = useState(null)
    const [submited, setSubmited] = useState(false)
    const [allInsurances, setAllInsurances] = useState([])
    const [selectedInsurances, setSelectedInsurances] = useState([])

    const history = useHistory()

    useEffect(() => {
        LookupApi.getInsurances().then(res => {
            const data = []
            res.data.data.map(item => {
                data.push({
                    label: item.name_en,
                    value: item._id
                })
            })
            setAllInsurances(data)
        })
    }, [])

    const onFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const { promiseInProgress } = usePromiseTracker();
    // const promiseInProgress = true;

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
                const newValues = JSON.parse(JSON.stringify(values))
                const insurancesId = []
                selectedInsurances.map(item => {
                    insurancesId.push(item.value)
                })
                newValues.insurances = insurancesId

                PatientApi.registerPatient(newValues).then(res => {
                    toast.success(t("patient_registered_successfully"))
                    history.push(LOGIN_ROUTE)
                }).catch(err => {
                    console.log('err: ', err.response)
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
                                    <NumberFormatInput
                                        format={"###-####-#######-#"}
                                        mask={"-"}
                                        name="emiratesId"
                                        defaultValue={t("emirates_id")}
                                        placeholder={t("emirates_id")} />
                                </div>
                                <div class="form-group">
                                    <TextInput type="date" name="birthday" placeholder={t("birthday")} />
                                </div>
                                <div class="form-group">
                                    <SelectInput name="gender" style={{ height: "50px" }}>
                                        <option value="">{t("gender")}</option>
                                        <option value={MALE}>{t("male")}</option>
                                        <option value={FEMALE}>{t("female")}</option>
                                        <option value={OTHER}>{t("other")}</option>
                                    </SelectInput>
                                </div>
                                <div class="form-group">
                                    <MultipleSelect
                                        options={allInsurances}
                                        value={selectedInsurances}
                                        changeHandler={(e) => { setSelectedInsurances(e) }}
                                        hasSelectAll={false}
                                        label={t("select_insurance")}
                                        errorMessage={"Speciality is required"}
                                    />
                                </div>
                                <div class="form-group">
                                    <TextInput type="text" name="location" placeholder={t("location")} />
                                </div>
                                <div class="form-group">
                                    <NumberFormatInput
                                        format={"+971-## ### ####"}
                                        mask={"-"}
                                        name="phone" placeholder={t("phone")}
                                    />
                                </div>

                                <div class="form-group">
                                    <TextInput type="password" name="password" placeholder={t("password")} />
                                </div>
                                <div class="form-group">
                                    <TextInput type="password" name="confirmPassword" placeholder={t("confirm_password")} />
                                </div>
                                <button disabled={promiseInProgress} type="submit" class="btn btn-primary mt-2">
                                    <>
                                        {promiseInProgress &&
                                            <HashLoader color="#fff" loading={true} size={15} />}
                                        <span className={promiseInProgress ? 'ml-4' : 'ml-0'}>{t("register")}</span>
                                    </>
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </Formik>
    )
}

export default PatientRegisteration