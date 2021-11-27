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
import { toast } from 'react-toastify';
import PatientApi from '../../../../api/Patients';

function CreateAnotherAppointment({ addPatientByNurse, selectedPatient }) {

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
            time: "",
            doctorId: "",
            referenceId
          }}
          validationSchema={Yup.object({
            time: Yup.string().required('Required'),
            doctorId: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const data = {
                ...values, 
                email: selectedPatient.email,
                firstName: selectedPatient.firstName,
                lastName: selectedPatient.lastName,
                birthday: selectedPatient.birthday,
                gender: selectedPatient.gender,
                location: selectedPatient.location,
                phone: selectedPatient.phone
            }
            PatientApi.createPatientFromNurse(data).then(res => {
                toast.success("Appointment created successfully");
            }).catch(err => {
                toast.error("Problem while creating the appointment");
            })
            resetForm();
          }}
          enableReinitialize={true}
        >
            <div class="modal fade" id="addAnotherAppointment" tabindex="-1" aria-labelledby="addAnotherAppointmentLabel" aria-hidden="true">
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAnotherAppointment)
