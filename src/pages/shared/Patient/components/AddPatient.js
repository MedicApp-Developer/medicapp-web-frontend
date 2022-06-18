import React, { useContext, useEffect, useState } from 'react'
import { RootContext } from '../../../../contextApi/index';
import { getTimesArray } from '../../../../Utills/functions';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SelectInput from '../../../../components/forms/SelectInput';
import TextInput from '../../../../components/forms/TextInput';
import { connect } from 'react-redux';
import { addPatientByNurse } from '../../../../store/actions/patientActions';
import NumberFormatInput from '../../../../components/forms/NumberFormat'

function AddPatient({ addPatientByNurse }) {

    const { user } = useContext(RootContext);
    const { referenceId } = user;

    return (
        <Formik
            initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                mobile: "",
                birthday: "",
                gender: "",
                location: "",
                emiratesId: ""
            }}
            validationSchema={Yup.object({
                email: Yup.string().required('Required'),
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                emiratesId: Yup.string().required('Required'),
                mobile: Yup.string().required('Required'),
                birthday: Yup.string().required('Required'),
                gender: Yup.string().required('Required'),
                location: Yup.string().required('Required')
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                addPatientByNurse(values);
                resetForm();
            }}
            enableReinitialize={true}
        >
            <div class="modal fade" id="addPatient" tabindex="-1" aria-labelledby="addPatientLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span class="icon-close"></span>
                            </button>
                            <h4 class="text-center">Add Patient</h4>
                            <Form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextInput type="text" name="firstName" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextInput type="text" name="lastName" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextInput type="date" name="birthday" placeholder="Birthday" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <SelectInput name="gender" style={{ height: "50px" }}>
                                                <option value="">Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </SelectInput>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextInput type="text" name="location" placeholder="Location" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextInput type="email" name="email" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <NumberFormatInput
                                                format={"+971-## ### ####"}
                                                mask={"-"}
                                                name="mobile" placeholder={"Mobile No"}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <NumberFormatInput
                                                format={"###-####-#######-#"}
                                                mask={"-"}
                                                name="emiratesId"
                                                defaultValue="Emirates ID"
                                                placeholder="Emirates ID" />
                                        </div>
                                    </div>

                                </div>
                                <div class="form-group text-center mb-0">
                                    <button type="submit" class="btn btn-primary">Confirm</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </Formik>

    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    addPatientByNurse
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)
