import React from 'react'
import DOCTOR_SHIFTING_IN_FRONT from '../../../../assets/images/doctor-sitting-in-front.png';

function DoctorInfo({ doctor }) {
    return (
        <>
            <div class="row align-items-start add-list hospital-info">
               <div class="col-12 text-right">
                  <a href="javascript:void(0)" data-toggle="modal" data-target="#updateDoctor" class="btn btn-primary px-5">Update</a>
               </div>
            </div>
            <div class="row mt-4">
               <div class="col-md-4">
                  <img class="img-fluid" src={DOCTOR_SHIFTING_IN_FRONT} alt="doctor" />
               </div>
               <div class="col-md-8">
                  <h4 class="mb-0"><strong>Dr. {doctor.firstName + " " + doctor.lastName}</strong></h4>
                  <small>{doctor?.specialityId?.name.toUpperCase()}</small>
                  <p class="mt-2 mb-2"><i class="icon-hospital"></i> {doctor.hospitalId.name}</p>
                  <p>{doctor.about || "lorem Ipsem lorem Ipsem lorem Ipsem lorem Ipsem"}</p>
                  <h5><strong>Speciality</strong></h5>
                  <p class="mb-1">{doctor.speciality}</p>
                  <h5><strong>Experience</strong></h5>
                  <p>{doctor.experience}</p>
               </div>
            </div>
        </>
    )
}

export default DoctorInfo
