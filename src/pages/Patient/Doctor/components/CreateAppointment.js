import React, { useContext } from 'react'
import AppointmentApi from '../../../../api/Appointment';
import { RootContext } from '../../../../contextApi';
import { toast } from 'react-toastify';
import moment from 'moment';

function CreateAppointment({ selectedSlot }) {
    const { user } = useContext(RootContext);
    
    const onConfirmAppointment = () => {
        
        if(moment(selectedSlot.end).isAfter() && selectedSlot.status === "BOOKED") {
            AppointmentApi.cancelAppointment(selectedSlot._id).then(res => {
                toast.success("Your appointment cancelled successfully");
                window.location.reload();
            }).catch(err => {
                toast.error("Problem while creating appointment");
            });
        }else {
            const appoint = {
                patientId: user._id,
                slotId: selectedSlot._id
            }
            AppointmentApi.createAppointment(appoint).then(res => {
                toast.success("Your appointment created successfully");
                window.location.reload();
            }).catch(err => {
                toast.error("Problem while creating appointment");
            })
        }
    }

    return (
        <div class="modal fade" id="setAppointment" tabindex="-1" aria-labelledby="setAppointmentLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content" style={{ border: "2px solid lightgray", margin: '10%', textAlign: 'center' }}>
                    <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span class="icon-close"></span>
                            </button>
                            <h4 class="text-center">Book Appointment</h4>
                            <p>{`Are you sure to ${ selectedSlot.status === "BOOKED" ? "Cancel" : "Book" } appointment on ${selectedSlot?.title} ?`}</p>
                            <div className="form-group text-center mb-0">
                                <button className={`btn ${selectedSlot.status === "BOOKED" ? "btn-danger" : "btn-primary"}`} onClick={onConfirmAppointment}>{selectedSlot.status === "BOOKED" ? "Cancel" : "Book"}</button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default CreateAppointment
