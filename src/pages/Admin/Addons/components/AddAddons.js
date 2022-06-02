import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { createAddon, updateAddon } from '../../../../store/actions/addonActions'
import { connect } from 'react-redux'
import TextInput from '../../../../components/forms/TextInput'

function AddAddons({ createAddon, selectedAddon, updateAddon }) {
    return (
        <Formik
            initialValues={{
                name_en: selectedAddon?.name_en || "",
                name_ar: selectedAddon?.name_ar || ""
            }}
            validationSchema={Yup.object({
                name_en: Yup.string().required('Required ( In English )'),
                name_ar: Yup.string().required('Required ( In Arabic ) '),
            })}
            onSubmit={(values, { resetForm }) => {
                if (selectedAddon === null) {
                    createAddon(values)
                } else {
                    updateAddon(selectedAddon._id, values)
                }
                resetForm()
            }}
            enableReinitialize={true}
        >
            <div className="modal fade" id="addAddon" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="icon-close"></span>
                            </button>
                            <h4 className="text-center">{selectedAddon?.name_en ? "Update" : "Add"} Addon</h4>
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
                                    <button type="submit" className="btn btn-primary">{selectedAddon?.name_en ? "Update" : "Save"}</button>
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
    createAddon,
    updateAddon
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAddons)
