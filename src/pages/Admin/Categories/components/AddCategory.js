import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { createCategory, updateCategory } from '../../../../store/actions/categoriesActions'
import { connect } from 'react-redux'
import TextInput from '../../../../components/forms/TextInput'

function AddCategories({ createCategory, selectedCategory, updateCategory }) {
    return (
        <Formik
            initialValues={{
                name_en: selectedCategory?.name_en || "",
                name_ar: selectedCategory?.name_ar || ""
            }}
            validationSchema={Yup.object({
                name_en: Yup.string().required('Required ( In English )'),
                name_ar: Yup.string().required('Required ( In Arabic )'),
            })}
            onSubmit={(values, { resetForm }) => {
                if (selectedCategory === null) {
                    createCategory(values)
                } else {
                    updateCategory(selectedCategory._id, values)
                }
                resetForm()
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
                            <h4 className="text-center">{selectedCategory?.name_en ? "Update" : "Add"} Speciality</h4>
                            <Form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <TextInput type="text" name="name_en" placeholder="Name ( English )" />
                                        </div>
                                        <div className="form-group">
                                            <TextInput type="text" name="name_ar" placeholder="Name ( Arabic )" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center mb-0 mt-3">
                                    <button type="submit" className="btn btn-primary">{selectedCategory?.name_en ? "Update" : "Save"}</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    createCategory,
    updateCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategories)
