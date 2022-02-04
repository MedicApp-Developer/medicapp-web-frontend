import React, { useState } from 'react'
import PatientApi from '../../../../api/Patients'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import { href } from '../../../../constants/extra'
import AddMember from './AddMember'
import { deleteFamilyMember } from '../../../../store/actions/patientActions'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next"

function FamilyMembers({ familyMembers, deleteFamilyMember }) {
    const { t } = useTranslation()

    const deleteMember = (id) => {
        deleteFamilyMember(id)
    }

    return (
        <section class="user-dashboard">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-xl-10 pb-5">
                        <h4 class="mb-4">{t("family_members")}</h4>
                        <div className="col-12 text-right">
                            <a href={href} data-toggle="modal" data-target="#addMember" className="btn btn-primary px-3 mb-3" style={{ marginRight: '-15px' }}>+ {t("add_member")}</a>
                        </div>
                        {familyMembers?.map(member => (
                            <div class="card lab-result mb-2">
                                <div class="card-body py-2">
                                    <div class="row align-items-center">
                                        <div class="col-md-12 col-lg-8">
                                            <ul>
                                                <li>
                                                    {t("member_name")}
                                                    <small class="d-block">{member?.firstName + " " + member.lastName}</small>
                                                </li>
                                                <li>
                                                    {t("relation")}
                                                    <small class="d-block">{member?.relation}</small>
                                                </li>
                                                <li>
                                                    {t("emirates_id")}
                                                    <small class="d-block">{member?.emiratesId}</small>
                                                </li>
                                                <li>
                                                    {t("phone_no")}
                                                    <small class="d-block">{member?.phoneNo ? member.phoneNo : "-"}</small>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
                                            <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); deleteMember(member._id) }} data-toggle="modal" data-target="#cancel" class="btn btn-danger px-3">{t("DELETE")}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {familyMembers === undefined || familyMembers?.length === 0 && (
                            <div style={{ backgroundColor: "lightgray", padding: '1rem', borderRadius: '5px' }}>
                                {t("no_family_members_added_yet")} !
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

export default connect(null, mapDispatchToProps)(FamilyMembers)
