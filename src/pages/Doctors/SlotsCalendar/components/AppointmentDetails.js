import moment from 'moment'
import React from 'react'
import { href } from '../../../../constants/extra'
import CreateSickLeave from './CreateSickLeave'

function AppointmentDetails(selectedSlot) {
    return (
        <>
            <div className="modal fade" id="appointmentDetails" tabindex="-1" aria-labelledby="appointmentDetailsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '90%' }}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="icon-close"></span>
                            </button>
                            <h4 className="text-center">Appointment Details</h4>
                            <div style={{ textAlign: 'center' }}>
                                <table style={{ border: '1px solid gray', padding: '7px', width: '100%' }}>
                                    <thead style={{ border: '1px solid gray', padding: '7px' }}>
                                        <tr style={{ border: '1px solid gray', padding: '7px' }}>
                                            <td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Patient Name</td>
                                            <td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Date</td>
                                            <td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Time</td>
                                            <td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Family Member</td>
                                            <td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Description</td>
                                        </tr>
                                    </thead>
                                    <tbody style={{ border: '1px solid gray', padding: '7px' }}>
                                        <tr style={{ border: '1px solid gray', padding: '7px' }}>
                                            <td style={{ border: '1px solid gray', padding: '7px' }}>{selectedSlot?.selectedSlot?.patientId?.firstName + " " + selectedSlot?.selectedSlot?.patientId?.lastName}</td>
                                            <td style={{ border: '1px solid gray', padding: '7px' }}>{moment(selectedSlot?.selectedSlot?.patientId?.from).format("DD-MM-YY")}</td>
                                            <td style={{ border: '1px solid gray', padding: '7px' }}>{selectedSlot?.selectedSlot?.title}</td>
                                            <td style={{ border: '1px solid gray', padding: '7px' }}>{selectedSlot?.selectedSlot?.familyMembers ? selectedSlot?.selectedSlot?.familyMembers.firstName + " " + selectedSlot?.selectedSlot?.familyMembers.lastName + " ( " + selectedSlot?.selectedSlot?.familyMembers.relation + " ) " : "No ( Patient's Own )"}</td>
                                            <td style={{ border: '1px solid gray', padding: '7px' }}>{selectedSlot?.selectedSlot?.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div className="form-group text-center mb-0">
                            <a href={href} data-toggle="modal" data-target="#sickLeave" class="btn btn-primary px-3 mb-4">Approve Sick Leave</a>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <CreateSickLeave patientId={selectedSlot?.selectedSlot?.patientId?._id} /> */}
        </>

    )
}

export default AppointmentDetails
