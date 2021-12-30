import React, { useContext, useRef, useState } from 'react'
import AppointmentApi from '../../../../api/Appointment';
import { RootContext } from '../../../../contextApi';
import { toast } from 'react-toastify';
import moment from 'moment';

function CreateAppointment({ doctor, selectedSlot, slotRef, onSlotCalandarClose }) {
    const { user } = useContext(RootContext);
    const [description, setDescription] = useState("");
    const [familyMemberId, setFamilyMemberId] = useState(null);
    const familyMembers = JSON.parse(localStorage.getItem("familyMembers")); 

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
                slotId: selectedSlot._id,
                familyMemberId,
                description
            }

            AppointmentApi.createAppointment(appoint).then(res => {
                toast.success("Your appointment created successfully");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }).catch(err => {
                toast.error("Problem while creating appointment");
            })
        }
    }
    
    return (
        <div ref={slotRef} class="modal fade" id="setAppointment" tabindex="-1" aria-labelledby="setAppointmentLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content" style={{ border: "2px solid lightgray", margin: '10%', textAlign: 'center' }}>
                    <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onSlotCalandarClose}>
                                <span class="icon-close"></span>
                            </button>
                            <h4 class="text-center">Book Appointment</h4>
                            {selectedSlot.status === "BOOKED" ? (
                                <p>{`Please confirm your appointment `} <span style={{ fontSize: '1rem', fontWeight: 'bold' }}> Cancellation </span> with <span style={{ fontSize: '1rem', fontWeight: 'bold' }}> {(doctor?.firstName ?? doctor.name) + " " + (doctor?.lastName ?? "")} </span> on <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{selectedSlot?.title}</span></p>
                            ) : (
                                <p>{`Please confirm your appointment with `} <span style={{ fontSize: '1rem', fontWeight: 'bold' }}> {doctor?.firstName + " " + doctor?.lastName} </span> on <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{selectedSlot?.title}</span></p>
                            )}
                            <hr/>
                            {!(moment(selectedSlot.end).isAfter() && selectedSlot.status === "BOOKED") && (
                                <form className="form-group">
                                    {familyMembers?.length > 0 && (
                                        <>
                                           <label for="familyMember">Family Member</label>
                                            <select value={familyMemberId} onChange={(e) => setFamilyMemberId(e.target.value)} style={{ width: '100%' }} className="form-control" id="familyMember">
                                                <option value={null}>Select family member ( optional )</option>
                                                {familyMembers?.map(member => (
                                                    <option value={member._id}>{`${member.firstName}  ${member.lastName} ( ${member.relation} )`}</option>
                                                ))}
                                            </select>
                                            <br/>                                  
                                        </>
                                    )}    
                                   <div className="mt-2">
                                       <label for="description">What do you feel ?</label>
                                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Tell something about your condition ? ( optional )" id="description" className="form-control" />    
                                   </div>
                                </form>
                            )}
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
