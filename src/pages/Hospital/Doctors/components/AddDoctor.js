import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { addDoctor } from '../../../../store/actions/doctorActions';
import { connect } from 'react-redux';

function AddDoctor({ addDoctor }) {

    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          experience: "",
          speciality: ""
        },
        validationSchema: Yup.object({
          firstName:  Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required().email(),
          mobile: Yup.string().required(),
          experience:  Yup.string().required(),
          speciality: Yup.string().required(),
        }),
        onSubmit: async values => {
            addDoctor(values);
            formik.resetForm();
        },
      });

    return (
        <div className="modal fade" id="addDoctor" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="icon-close"></span>
                    </button>
                    <h4 className="text-center">Add Doctor</h4>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" {...formik.getFieldProps('firstName')} className={ (formik.touched.firstName && formik.errors.firstName) ? "form-control is-invalid" : "form-control"} placeholder="First Name" />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div className="invalid-feedback text-right-aligned">{formik.errors.firstName}</div>
                                ) : null}
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" {...formik.getFieldProps('lastName')} className={ (formik.touched.lastName && formik.errors.lastName) ? "form-control is-invalid" : "form-control"} placeholder="Last Name" />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div className="invalid-feedback text-right-aligned">{formik.errors.lastName}</div>
                                ) : null}
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" {...formik.getFieldProps('email')} className={ (formik.touched.email && formik.errors.email) ? "form-control is-invalid" : "form-control"} placeholder="Email" />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="invalid-feedback text-right-aligned">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" {...formik.getFieldProps('mobile')} className={ (formik.touched.mobile && formik.errors.mobile) ? "form-control is-invalid" : "form-control"} placeholder="Mobile" />
                                {formik.touched.mobile && formik.errors.mobile ? (
                                    <div className="invalid-feedback text-right-aligned">{formik.errors.mobile}</div>
                                ) : null}
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" {...formik.getFieldProps('experience')} className={ (formik.touched.experience && formik.errors.experience) ? "form-control is-invalid" : "form-control"} placeholder="Experience" />
                                {formik.touched.experience && formik.errors.experience ? (
                                    <div className="invalid-feedback text-right-aligned">{formik.errors.experience}</div>
                                ) : null}
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" {...formik.getFieldProps('speciality')} className={ (formik.touched.speciality && formik.errors.speciality) ? "form-control is-invalid" : "form-control"} placeholder="Speciality" />
                                {formik.touched.speciality && formik.errors.speciality ? (
                                    <div className="invalid-feedback text-right-aligned">{formik.errors.speciality}</div>
                                ) : null}
                            </div>
                            </div>
                        </div>
                        <div className="form-group text-center mb-0">
                            <button type="submit" className="btn btn-primary">Confirm</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    addDoctor
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDoctor);
