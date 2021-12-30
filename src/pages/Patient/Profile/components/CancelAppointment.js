import moment from 'moment';
import React, { useContext } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { RootContext } from '../../../../contextApi';
import { deletePatientAppointment } from '../../../../store/actions/patientActions';

function CancelAppointment({ selectedAppointment, deletePatientAppointment }) {

    const { user } = useContext(RootContext);

    const cancelAppointmentHandler = () => {
        deletePatientAppointment(selectedAppointment._id, user._id).then(res => {
            toast.success("Appointment delete successfully");
        }).catch(err => {
            toast.error("Problem while deleting appointment");
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
                  <h5 class="text-center mb-4">Are you sure you want { moment(selectedAppointment?.to).isBefore(new Date()) ? "delete" : "cancel"} your consultation?</h5>
                  <a href="javascript:void(0)" class="btn btn-primary px-5 mx-2" onClick={cancelAppointmentHandler}>Yes</a>
                  <a href="javascript:void(0)" class="btn btn-primary px-5 mx-2">No</a>
               </div>
            </div>
         </div>
      </div>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    deletePatientAppointment
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelAppointment)
