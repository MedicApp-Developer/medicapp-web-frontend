import React, { useEffect } from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import { getDoctors } from '../../../../store/actions/doctorActions'
import { connect } from 'react-redux'

function TopDoctors({ doctors, getDoctors }) {
    const { doctors: allDoctors } = doctors && doctors

    useEffect(() => {
        getDoctors(0)
    }, [getDoctors])

    return (
        <>
            <div class="row">
                {allDoctors?.map(doc => (
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <img src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                        <h5 class="mt-0">Dr. {doc.firstName + "  " + doc.lastName}</h5>
                                        <p>{doc.specialityId?.map((item, index) => index === doc.specialityId.length - 1 ? item['name_en'] : item['name_en'] + ", ")}</p>
                                    </div>
                                </div>
                                <div class="contact-info">
                                    <a href="javascript:void(0)"><span class="icon-email"></span></a>
                                    <a href="javascript:void(0)"><span class="icon-phone"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {allDoctors.length === 0 && (
                    <p>No doctors found</p>
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    doctors: state.doctors
})

const mapDispatchToProps = {
    getDoctors
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDoctors)