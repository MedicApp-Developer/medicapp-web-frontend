import React from 'react'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import LaboratoryApi from '../../../../api/Laboratory';

function AddLaboratory() {

    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          mobile: ""
        },
        validationSchema: Yup.object({
          firstName:  Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required().email(),
          mobile: Yup.string().required(),
        }),
        onSubmit: async values => {
            await LaboratoryApi.createLaboratory(values).then(res => {
                toast.success("Laboratory created successfully");
                formik.handleReset();
            }).catch(err => {
                toast.error("Problem while creating the laboratory, choose different email")
            })
        },
      });

    return (
        <div className="modal fade" id="addLaboratory" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="icon-close"></span>
                    </button>
                    <h4 className="text-center">Add Laboratory</h4>
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

export default AddLaboratory
