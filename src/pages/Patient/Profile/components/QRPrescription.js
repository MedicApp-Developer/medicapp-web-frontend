import React, { useState } from 'react'
import moment from 'moment';
import EMPTY_IMAGE_PLACEHOLDER from '../../../../assets/images/empty_profile.png'
import GenerateQrCode from './GenerateQrCode';

function QRPrescription({ prescriptions }) {
   console.log("prescriptions => ", prescriptions);

   const [selectedQrPrescription, setSelectedQrPrescription] = useState({});

   let today = new Date();
   let yesterday = new Date();
   yesterday.setDate(today.getDate() - 1);

   const history = prescriptions.filter(prescriptions => moment(today).isAfter(new Date(prescriptions.date), 'day'));

   const upcomming = prescriptions.filter(prescriptions => moment(new Date(prescriptions.date)).isAfter(yesterday));

   const viewQrPrescription = (qr) => {
      setSelectedQrPrescription(qr);
   }

    return (
        <section class="user-dashboard">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-12 col-xl-10 pb-5">
                  <h4 class="mb-4">Upcoming</h4>
                  { upcomming.map((qr, index) => (
                     <div key={index} class="card lab-result">
                        <div class="card-body py-md-2">
                           <div class="row align-items-center">
                              <div class="col-md-12 col-lg-7">
                                 <ul>
                                    <li>
                                       <small class="d-block">Date</small>
                                       {moment(qr.date).format('LL')}
                                    </li>
                                    <li class="media">
                                       <img class="avatar-sm" src={qr?.doctorId?.image ? qr?.doctorId?.image : EMPTY_IMAGE_PLACEHOLDER} alt="doctor" />
                                       <div class="media-body">
                                          <h5 class="mt-0 mb-1">Dr. {qr?.doctorId?.firstName + " " + qr?.doctorId?.lastName}</h5>
                                          <p>{qr?.doctorId?.specialityId?.name}</p>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              <div class="col-md-12 col-lg-5 text-center text-md-right mt-3 mt-md-0">
                                 <a href="javascript:void(0)" data-toggle="modal" data-target="#qrCode" class="btn btn-primary px-3 py-2 mr-3" onClick={viewQrPrescription.bind(this, qr)}>VIEW QR</a>
                                 <a href="javascript:void(0)" data-toggle="modal" data-target="#requestNewqr" class="btn btn-primary px-3 py-2">REQUEST NEW QR</a>
                              </div>
                              <GenerateQrCode selectedResult={selectedQrPrescription} setSelectedResult={setSelectedQrPrescription} /> 
                           </div>
                        </div>
                     </div>
                  ))}
                  <h4 class="mb-4 mt-5">History</h4>
                  {history.map((qr, index) => (
                     <div key={index} class="card lab-result">
                     <div class="card-body py-md-2">
                        <div class="row align-items-center">
                           <div class="col-md-12 col-lg-7">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    {moment(qr.date).format('LL')}
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={qr?.doctorId?.image ? qr?.doctorId?.image : EMPTY_IMAGE_PLACEHOLDER} alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. {qr?.doctorId?.firstName + " " + qr?.doctorId?.lastName}</h5>
                                       <p>{qr?.doctorId?.specialityId?.name}</p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div class="col-md-12 col-lg-5 text-center text-md-right mt-3 mt-md-0">
                              <a href="javascript:void(0)" class="btn btn-danger px-3 py-2 mr-3">EXPIRED</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    )
}

export default QRPrescription