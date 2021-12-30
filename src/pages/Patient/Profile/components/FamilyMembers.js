import React, { useState } from 'react'
import PatientApi from '../../../../api/Patients';
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';
import { href } from '../../../../constants/extra';
import AddMember from './AddMember';
import { deleteFamilyMember } from '../../../../store/actions/patientActions';
import { connect } from 'react-redux';

function FamilyMembers({ familyMembers, deleteFamilyMember }) {

    const deleteMember = (id) => {
        deleteFamilyMember(id);
    }

    return (
        <section class="user-dashboard">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-md-12 col-xl-10 pb-5">
                        <h4 class="mb-4">Family Members</h4>
                        <div className="col-12 text-right">
                            <a href={href} data-toggle="modal" data-target="#addMember" className="btn btn-primary px-3 mb-3" style={{ marginRight: '-15px' }}>+ ADD MEMBER</a>
                        </div>
                        {familyMembers?.map(member => (
                            <div class="card lab-result mb-2">
                                <div class="card-body py-2">
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8">
                                            <ul>
                                                <li>
                                                    Member Name
                                                    <small class="d-block">{member?.firstName + " " + member.lastName}</small>
                                                </li>
                                                <li>
                                                    Relation
                                                    <small class="d-block">{member?.relation}</small>
                                                </li>
                                                <li>
                                                    Emirates ID
                                                    <small class="d-block">{member?.emiratesId}</small>
                                                </li>
                                                <li>
                                                    Phone No
                                                    <small class="d-block">{member?.phoneNo ? member.phoneNo : "-"}</small>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                            <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); deleteMember(member._id); }} data-toggle="modal" data-target="#cancel" class="btn btn-danger px-3">DELETE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {familyMembers === undefined || familyMembers?.length === 0 && (
                            <div style={{ backgroundColor: "lightgray", padding: '1rem', borderRadius: '5px' }}>
                                No Family Members Added Yet !
                            </div>
                        )}
                    </div>
                    </div>
                </div>
                <AddMember />
            </section>
    )
}

const mapDispatchToProps = {
    deleteFamilyMember
}

export default connect(null, mapDispatchToProps)(FamilyMembers);
