import { Formik, Form } from 'formik'
import React, { useContext } from 'react'
import SelectInput from '../../../../components/forms/SelectInput'
import TextInput from '../../../../components/forms/TextInput'
import * as Yup from 'yup'
import { familiesList } from '../../../../constants/extra'
import PatientApi from '../../../../api/Patients'
import { RootContext } from '../../../../contextApi'
import { addFamilyMember } from '../../../../store/actions/patientActions'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next"
import NumberFormatInput from '../../../../components/forms/NumberFormat'

function AddMember({ familyMembers, addFamilyMember }) {
    const { user } = useContext(RootContext)
    const { t } = useTranslation()

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                relation: "",
                emiratesId: "",
                phoneNo: "",
                patientId: user._id
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().required(t("required")),
                lastName: Yup.string().required(t("required")),
                relation: Yup.string().required(t("required")),
                emiratesId: Yup.string().required(t("required")),
                phoneNo: Yup.string().required(t("required"))
            })}
            onSubmit={(values, { resetForm }) => {
                addFamilyMember(values)
                resetForm()
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
                            <h4 className="text-center">{t("add_member")}</h4>
                            <Form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextInput type="text" name="firstName" placeholder={t("first_name")} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextInput type="text" name="lastName" placeholder={t("last_name")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <NumberFormatInput format={"###-####-#######-#"}
                                                mask={"-"}
                                                type="text"
                                                name="emiratesId" placeholder={t("emirates_id")} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <SelectInput name="relation" style={{ height: "50px" }}>
                                                <option value="">{t("select_relation")}</option>
                                                {familiesList?.map(spec => (
                                                    <option value={spec}>{spec}</option>
                                                ))}
                                            </SelectInput>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <NumberFormatInput format={"+971-## ### ####"}
                                                mask={"-"}
                                                type="text"
                                                name="phoneNo"
                                                placeholder={t("phone_no")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center mb-0">
                                    <button type="submit" className="btn btn-primary">{t("confirm")}</button>
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
