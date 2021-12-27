import { Formik, Form } from 'formik';
import React, { useContext } from 'react'
import SelectInput from '../../../../components/forms/SelectInput';
import TextInput from '../../../../components/forms/TextInput';
import * as Yup from 'yup';
import { familiesList } from '../../../../constants/extra';
import PatientApi from '../../../../api/Patients';
import { RootContext } from '../../../../contextApi';
import { addFamilyMember } from '../../../../store/actions/patientActions';
import { connect } from 'react-redux';

function AddMember({ familyMembers, addFamilyMember }) {
    const { user } = useContext(RootContext);

    return (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            relation: "",
            emiratesId: "",
            patientId: user._id
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            relation: Yup.string().required('Required'),
            emiratesId: Yup.string().required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            addFamilyMember(values);
            resetForm();
          }}
          enableReinitialize={true}
        >
            <div className="modal fade" id="addMember" tabindex="-1" aria-labelledby="addMemberLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="icon-close"></span>
                            </button>
                            <h4 className="text-center">Add Member</h4>
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
                                            <TextInput type="text" name="emiratesId" placeholder="Emirates Id" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <SelectInput name="relation">
                                                <option value="">Select Relation</option>
                                                {familiesList?.map(spec => (
                                                    <option value={spec}>{spec}</option>
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

const mapDispatchToProps = {
    addFamilyMember
}

export default connect(null, mapDispatchToProps)(AddMember)
