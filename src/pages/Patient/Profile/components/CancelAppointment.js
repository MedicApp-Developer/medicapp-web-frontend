import moment from 'moment'
import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { RootContext } from '../../../../contextApi'
import { deletePatientAppointment } from '../../../../store/actions/patientActions'
import { useTranslation } from "react-i18next"

function CancelAppointment({ selectedAppointment, deletePatientAppointment }) {

    const { user, setUser } = useContext(RootContext)
    const { t } = useTranslation()

    const cancelAppointmentHandler = () => {
        deletePatientAppointment(selectedAppointment._id, user._id).then(res => {
            if (res.data.data.newPatient !== null) {
                setUser({ ...user, points: user.points - 20 })
            }
            toast.success(t("appointment_delete_successfully"))
        }).catch(err => {
            toast.error(t("problem_while_deleting_appointment"))
        })
    }

    return (
        <div class="modal fade" id="cancel" tabindex="-1" aria-labelledby="cancelLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="icon-close"></span>
                        </button>
                        <h5 class="text-center mb-4">{t("are_you_sure_you_want")} {moment(selectedAppointment?.to).isBefore(new Date()) ? t("delete") : t("cancel")} {t("your_consultation")}?</h5>
                        <a href="javascript:void(0)" class="btn btn-primary px-5 mx-2" onClick={cancelAppointmentHandler}>{t("yes")}</a>
                        <a href="javascript:void(0)" class="btn btn-primary px-5 mx-2">{t("no")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    deletePatientAppointment
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelAppointment)
