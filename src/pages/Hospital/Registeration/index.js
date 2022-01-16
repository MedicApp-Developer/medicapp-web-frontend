import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import AuthApi from '../../../api/Auth'
import { Link, useHistory } from 'react-router-dom'
import { LOGIN_ROUTE, SELECT_REGISTERATION_TYPE_ROUTE } from '../../../constants/Redirects'
import LOGO from '../../../assets/images/logo.png'
import AddressInfo from './components/AddressInfo'
import NumberFormat from 'react-number-format'

function HospitalRegisteration() {

    const [file, setFile] = useState(null)
    const [submited, setSubmited] = useState(false)
    const [step, setStep] = useState(1)
    const [firstFormValues, setFirstFormValues] = useState({})

    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            name: "",
            tradeLicenseNo: "",
            issueDate: "",
            expiryDate: "",
            tradeLicenseFile: "",
            phoneNo: "",
            email: "",
            password: "",
            confirmPassword: "",
            type: "HOSPITAL"
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            tradeLicenseNo: Yup.string().required(),
            type: Yup.string(),
            issueDate: Yup.string().required(),
            expiryDate: Yup.string().required(),
            phoneNo: Yup.string().required(),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required(),
            confirmPassword: Yup.string().required().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                )
            })
        }),
        onSubmit: async values => {
            // setSubmited(true);
            setStep(2)
            setFirstFormValues(values)
            // let formData = new FormData();
            // formData.append("name", values.name);
            // formData.append("tradeLicenseNo", values.tradeLicenseNo);
            // formData.append("issueDate", values.issueDate);
            // formData.append("expiryDate", values.expiryDate);
            // formData.append("address", values.address);
            // formData.append("phoneNo", values.phoneNo);
            // formData.append("type", values.type);
            // formData.append("email", values.email);
            // formData.append("password", values.password);
            // formData.append('video', file);
            // await AuthApi.registerHospital(formData).then(res => {
            //     toast.success("Hospital Registered Successfully");
            //     history.push(LOGIN_ROUTE);
            // }).catch(err => {
            //     toast.error(err.response.data.message);
            // })
        },
    })

    const onFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const onSecondFormSubmit = async (values, marker) => {
        const location = Object.keys(marker)
            .map(function (key) {
                return marker[key]
            })
        const finalSubmitValues = { ...firstFormValues, ...values, location }

        await AuthApi.registerHospital(finalSubmitValues).then(res => {
            toast.success("Hospital Registered Successfully")
            history.push(LOGIN_ROUTE)
        }).catch(err => {
            toast.error(err.response.data.message)
        })
    }

    return (
        <section class="user-account">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 action-icon">
                        <Link to={SELECT_REGISTERATION_TYPE_ROUTE}><span class="icon-angle-left"></span></Link>
                        <Link to={SELECT_REGISTERATION_TYPE_ROUTE}><span class="icon-close"></span></Link>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-9 col-md-7 col-lg-5 text-center">
                        <img class="logo" src={LOGO} alt="logo" />
                        <h3 class="mb-4">Hospital Registration</h3>
                        {step === 1 ? (
                            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                                <div class="form-group">
                                    <select {...formik.getFieldProps('type')} className="form-control">
                                        <option value="HOSPITAL">HOSPITAL</option>
                                        <option value="CLINIC">CLINIC</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" {...formik.getFieldProps('name')} class={(formik.touched.name && formik.errors.name) ? "form-control is-invalid" : "form-control"} placeholder="Hospital Name" />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div class="invalid-feedback text-right-aligned">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    <input type="text" {...formik.getFieldProps('tradeLicenseNo')} class={(formik.touched.tradeLicenseNo && formik.errors.tradeLicenseNo) ? "form-control is-invalid" : "form-control"} placeholder="Trade License Number" />
                                    {formik.touched.tradeLicenseNo && formik.errors.tradeLicenseNo ? (
                                        <div class="invalid-feedback text-right-aligned">{formik.errors.tradeLicenseNo}</div>
                                    ) : null}
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <div class="form-group">
                                            <input type="text" {...formik.getFieldProps('issueDate')} class={(formik.touched.issueDate && formik.errors.issueDate) ? "form-control is-invalid" : "form-control"} placeholder="Issue Date" onFocus={(e) => e.target.type = 'date'} />
                                            {formik.touched.issueDate && formik.errors.issueDate ? (
                                                <div class="invalid-feedback text-right-aligned">{formik.errors.issueDate}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <input type="text" {...formik.getFieldProps('expiryDate')} class={(formik.touched.expiryDate && formik.errors.expiryDate) ? "form-control is-invalid" : "form-control"} placeholder="Expiry Date" onFocus={(e) => e.target.type = 'date'} />
                                            {formik.touched.expiryDate && formik.errors.expiryDate ? (
                                                <div class="invalid-feedback text-right-aligned">{formik.errors.expiryDate}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="form-group">
                                    <input type="file" class="form-control custom-file-input" id="validatedCustomFile" onChange={onFileUpload} />
                                    <label class="custom-file-label form-control" for="validatedCustomFile">{file ? file.name : "Upload Trade License"} </label>
                                    {submited && !file ? (
                                        <div class="invalid-feedback text-right-aligned">Trade License is required</div>
                                    ) : null}
                                </div> */}
                                <div class="form-group">
                                    <NumberFormat
                                        format={"+971-## ### ####"}
                                        mask={"-"}
                                        allowEmptyFormatting={true}
                                        {...formik.getFieldProps('phoneNo')} class={(formik.touched.phoneNo && formik.errors.phoneNo) ? "form-control is-invalid" : "form-control"} placeholder="Phone"
                                    />
                                    {formik.touched.phoneNo && formik.errors.phoneNo ? (
                                        <div class="invalid-feedback text-right-aligned">{formik.errors.phoneNo}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    <input type="email" {...formik.getFieldProps('email')} class={(formik.touched.email && formik.errors.email) ? "form-control is-invalid" : "form-control"} placeholder="Email" />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div class="invalid-feedback text-right-aligned">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    <input type="password" {...formik.getFieldProps('password')} class={(formik.touched.password && formik.errors.password) ? "form-control is-invalid" : "form-control"} placeholder="Password" />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div class="invalid-feedback text-right-aligned">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    <input type="password" {...formik.getFieldProps('confirmPassword')} class={(formik.touched.confirmPassword && formik.errors.confirmPassword) ? "form-control is-invalid" : "form-control"} placeholder="Confirm Password" />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div class="invalid-feedback text-right-aligned">{formik.errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                                <button type="submit" class="btn btn-primary mt-2">Next</button>
                            </form>
                        ) : (
                            <>
                                <AddressInfo onSecondFormSubmit={onSecondFormSubmit} setStep={setStep} />
                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HospitalRegisteration
