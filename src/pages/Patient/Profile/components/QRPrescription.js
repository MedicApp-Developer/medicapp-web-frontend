import React, { useState } from 'react'
import moment from 'moment'
import EMPTY_IMAGE_PLACEHOLDER from '../../../../assets/images/empty_profile.png'
import GenerateQrCode from './GenerateQrCode'
import QrPrescriptionApi from '../../../../api/QrPrescription'
import { saveAs } from 'file-saver'

function QRPrescription({ prescriptions }) {

   const [selectedQrPrescription, setSelectedQrPrescription] = useState({})

   const viewQrPrescription = (qr) => {
      setSelectedQrPrescription(qr)
   }

   const downloadQrPrescription = (qr) => {
      QrPrescriptionApi.downloadQRPrescription(qr._id).then(res => {
         const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
         saveAs(pdfBlob, 'Prescription.pdf')
      })
   }

   return (
      <section class="user-dashboard">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-12 col-xl-10 pb-5">
                  <h4 class="mb-4">QR Prescriptions</h4>
                  {prescriptions.map((qr, index) => (
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
                                 <a href="javascript:void(0)" class="btn btn-primary px-3 py-2 mr-3" onClick={downloadQrPrescription.bind(this, qr)}>Download</a>
                                 <a href="javascript:void(0)" data-toggle="modal" data-target="#qrCode" class="btn btn-primary px-3 py-2 mr-3" onClick={viewQrPrescription.bind(this, qr)}>VIEW QR</a>
                              </div>
                              <GenerateQrCode selectedResult={selectedQrPrescription} setSelectedResult={setSelectedQrPrescription} />
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