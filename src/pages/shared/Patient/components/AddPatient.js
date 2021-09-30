import React, { useContext, useEffect, useState } from 'react'
import { RootContext } from '../../../../contextApi/index';
import { getTimesArray } from '../../../../Utills/functions';
import { Form , Formik } from 'formik';
import * as Yup from 'yup';
import SelectInput from '../../../../components/forms/SelectInput';
import TextInput from '../../../../components/forms/TextInput';
import DoctorsApi from '../../../../api/Doctors';
import { connect } from 'react-redux';
import { addPatientByNurse } from '../../../../store/actions/patientActions';

function AddPatient({ addPatientByNurse }) {

    const { user } = useContext(RootContext);
    const { referenceId } = user;
    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(() => {
        DoctorsApi.getAllDoctors(0, referenceId).then(res => {
            setAllDoctors(res?.data?.data?.doctors);
        })
    }, []);

    const timesArray = getTimesArray();

    return (
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            mobile: "",
            time: "",
            doctorId: "",
            birthday: "", 
            gender: "", 
            location: "",
            referenceId
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('Required'),
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            mobile:  Yup.string().required('Required'),
            time: Yup.string().required('Required'),
            doctorId: Yup.string().required('Required'),
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
                                        <SelectInput name="doctorId">
                                            <option value="">Select Doctor</option>
                                            {allDoctors?.map(doc => (
                                                <option value={doc._id}>{doc.firstName + " " + doc.lastName}</option>
                                            ))}
                                        </SelectInput>    
                                </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                            <SelectInput name="time">
                                                <option value="">Time</option>
                                                {timesArray?.map(time => (
                                                        <option value={time}>{time}</option>
                                                    ))}
                                            </SelectInput>
                                    </div>
                                </div>
                            </div>
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
                                            <SelectInput name="gender">
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
                                    <TextInput type="text" name="mobile" placeholder="Mobile" />
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
