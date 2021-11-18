import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';

function LabResults() {
    return (
        <section class="user-dashboard">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-12 col-xl-10 pb-5">
                  <div class="card lab-result">
                     <div class="card-body py-2">
                        <div class="row align-items-center">
                           <div class="col-md-9">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li>
                                    <small class="d-block">Report</small>
                                    Blood Test
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-3 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" data-toggle="modal" data-target="#viewResult" class="btn btn-primary px-3 py-2">View Result</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card lab-result">
                     <div class="card-body py-2">
                        <div class="row align-items-center">
                           <div class="col-md-9">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li>
                                    <small class="d-block">Report</small>
                                    Blood Test
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-3 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" data-toggle="modal" data-target="#viewResult" class="btn btn-primary px-3 py-2">View Result</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card lab-result">
                     <div class="card-body py-2">
                        <div class="row align-items-center">
                           <div class="col-md-9">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li>
                                    <small class="d-block">Report</small>
                                    Blood Test
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-3 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" data-toggle="modal" data-target="#viewResult" class="btn btn-primary px-3 py-2">View Result</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card lab-result">
                     <div class="card-body py-2">
                        <div class="row align-items-center">
                           <div class="col-md-9">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li>
                                    <small class="d-block">Report</small>
                                    Blood Test
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-3 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" data-toggle="modal" data-target="#viewResult" class="btn btn-primary px-3 py-2">View Result</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )
}

export default LabResults
