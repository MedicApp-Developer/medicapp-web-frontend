import React from 'react'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png';

function QRPrescription() {
    return (
        <section class="user-dashboard">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-12 col-xl-10 pb-5">
                  <h4 class="mb-4">Upcoming</h4>
                  <div class="card lab-result">
                     <div class="card-body py-md-2">
                        <div class="row align-items-center">
                           <div class="col-md-12 col-lg-7">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                                 <li>
                                    <small class="d-block">Medication</small>
                                    Diabetes
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-12 col-lg-5 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" data-toggle="modal" data-target="#qrCode" class="btn btn-primary px-3 py-2 mr-3">VIEW QR</a>
                              <a href="javascript:void(0)" data-toggle="modal" data-target="#requestNewqr" class="btn btn-primary px-3 py-2">REQUEST NEW QR</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <h4 class="mb-4 mt-5">History</h4>
                  <div class="card lab-result">
                     <div class="card-body py-md-2">
                        <div class="row align-items-center">
                           <div class="col-md-12 col-lg-7">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                                 <li>
                                    <small class="d-block">Medication</small>
                                    Diabetes
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-12 col-lg-5 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" class="btn btn-danger px-3 py-2 mr-3">EXPIRED</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card lab-result">
                     <div class="card-body py-md-2">
                        <div class="row align-items-center">
                           <div class="col-md-12 col-lg-7">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                                 <li>
                                    <small class="d-block">Medication</small>
                                    Diabetes
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-12 col-lg-5 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" class="btn btn-danger px-3 py-2 mr-3">EXPIRED</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card lab-result">
                     <div class="card-body py-md-2">
                        <div class="row align-items-center">
                           <div class="col-md-12 col-lg-7">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    20 Aug 2021
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. Travis Martin</h5>
                                       <p>Dentist</p>
                                    </div>
                                 </li>
                                 <li>
                                    <small class="d-block">Medication</small>
                                    Diabetes
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-12 col-lg-5 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" class="btn btn-danger px-3 py-2 mr-3">EXPIRED</a>
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

export default QRPrescription
