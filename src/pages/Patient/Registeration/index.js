import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import AuthApi from '../../../api/Auth';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, SELECT_REGISTERATION_TYPE_ROUTE } from '../../../constants/Redirects';
import LOGO from '../../../assets/images/logo.png'
import { FEMALE, MALE, OTHER } from '../../../constants/Roles';
import SelectInput from '../../../components/forms/SelectInput';
import TextInput from '../../../components/forms/TextInput';
import PatientApi from '../../../api/Patients';

function PatientRegisteration() {

    const [file, setFile] = useState(null);
    const [submited, setSubmited] = useState(false);

    const history = useHistory();
    
    const onFileUpload = (e) => {
        setFile(e.target.files[0]);
    }
    
    return (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            // emiratesId: "",
            birthday: "",
            gender: "",
            location: "",
            phone: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={Yup.object({
            firstName:  Yup.string().required(),
            lastName: Yup.string().required(),
            email: Yup.string().required(),
            // emiratesId: Yup.string().required(),
            birthday: Yup.string().required(),
            gender: Yup.string().required().nullable(),
            location: Yup.string().required(),
            phone: Yup.string().required(),
            password: Yup.string().required(),
            confirmPassword: Yup.string().required().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                [Yup.ref("password")],
                    "Both password need to be the same"
                )
            })
          })}
          onSubmit={ async (values, { setSubmitting }) => {
            PatientApi.registerPatient(values).then(res => {
                toast.success("Patient Registered Successfully");
                history.push(LOGIN_ROUTE);
            }).catch(err => {
                toast.error(err.response.data.message);
            });
          }}
          enableReinitialize={true}
        >
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
                            <h3 class="mb-4">Patient Registration</h3>
                            <Form encType="multipart/form-data">
                                <div class="form-row">
                                    <div class="col">
                                    <div class="form-group">
                                        <TextInput type="text" name="firstName" placeholder="First Name" />
                                    </div>
                                    </div>
                                    <div class="col">
                                    <div class="form-group">
                                        <TextInput type="text" name="lastName" placeholder="Last Name" />
                                    </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <TextInput type="email" name="email" placeholder="Email" />
                                </div>
                                {/* <div class="form-group">
                                    <TextInput type="text" name="emiratesId" placeholder="Emirates ID" />
                                </div> */}
                                <div class="form-group">
                                    <TextInput type="date" name="birthday" placeholder="Birthday" />
                                </div>
                                <div class="form-group">
                                    <SelectInput name="gender">
                                            <option value="">Gender</option>
                                            <option value={MALE}>Male</option>
                                            <option value={FEMALE}>Female</option>
                                            <option value={OTHER}>Other</option>
                                    </SelectInput>
                                </div>
                                <div class="form-group">
                                    <TextInput type="text" name="location" placeholder="Location" />
                                </div>
                                <div class="form-group">
                                    <TextInput type="text" name="phone" placeholder="Phone" />
                                </div>
                                {/* <div class="form-group">
                                    <input type="file" class="form-control custom-file-input" id="validatedCustomFile" onChange={onFileUpload} />
                                    <label class="custom-file-label form-control" for="validatedCustomFile">{file ? file.name : "Upload Emirates ID File"} </label>
                                    {submited && !file ? (
                                        <div class="invalid-feedback text-right-aligned">Trade License is required</div>
                                    ) : null}
                                </div> */}
                                <div class="form-group">
                                    <TextInput type="password" name="password" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <TextInput type="password" name="confirmPassword" placeholder="Confirm Password" />
                                </div>
                                <button type="submit" class="btn btn-primary mt-2">Register</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </Formik>
    )
}

export default PatientRegisteration
