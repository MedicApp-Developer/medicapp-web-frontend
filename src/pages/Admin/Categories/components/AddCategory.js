import React from 'react'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { createCategory } from '../../../../store/actions/categoriesActions';
import { connect } from 'react-redux';
import TextInput from '../../../../components/forms/TextInput';

function AddCategories({ createCategory }) {
    return (
        <Formik
          initialValues={{
            name: ""
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            createCategory(values);
            resetForm();
          }}
          enableReinitialize={true}
        >
            <div className="modal fade" id="addCategory" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span className="icon-close"></span>
                        </button>
                        <h4 className="text-center">Add Speciality</h4>
                        <Form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <TextInput type="text" name="name" placeholder="Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center mb-0 mt-3">
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
    createCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategories);
