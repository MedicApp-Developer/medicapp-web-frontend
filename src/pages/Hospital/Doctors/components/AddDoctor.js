import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { addDoctor } from '../../../../store/actions/doctorActions';
import { connect } from 'react-redux';
import SelectInput from '../../../../components/forms/SelectInput';
import DoctorApi from '../../../../api/Doctors';
import TextInput from '../../../../components/forms/TextInput';

function AddDoctor({ addDoctor }) {

    const [allSpecialities, setAllSpecialities] = useState([]);

    useEffect(() => {
        DoctorApi.getAllSpecialities().then(res => {
            setAllSpecialities(res.data.data);
        })
    }, []);

    return (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            experience: "",
            specialityId: ""
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().required('Required').email(),
            mobile:  Yup.string().required('Required'),
            experience:  Yup.string().required('Required'),
            specialityId:  Yup.string().required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            addDoctor(values);
            resetForm();
          }}
          enableReinitialize={true}
        >
            <div className="modal fade" id="addDoctor" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span className="icon-close"></span>
                        </button>
                        <h4 className="text-center">Add Doctor</h4>
                        <Form>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <TextInput type="text" name="firstName" placeholder="First Name" />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <TextInput type="text" name="lastName" placeholder="Last Name" />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <TextInput type="text" name="email" placeholder="Email" />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <TextInput type="text" name="mobile" placeholder="Mobile" />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <TextInput type="text" name="experience" placeholder="Experience" />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <SelectInput name="specialityId">
                                        <option value="">Select Speciality</option>
                                        {allSpecialities?.map(spec => (
                                            <option value={spec._id}>{spec.name}</option>
                                        ))}
                                    </SelectInput> 
                                </div>
                                </div>
                            </div>
                            <div className="form-group text-center mb-0">
                                <button type="submit" className="btn btn-primary">Confirm</button>
                            </div>
                        </Form>
                    </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    addDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDoctor);
