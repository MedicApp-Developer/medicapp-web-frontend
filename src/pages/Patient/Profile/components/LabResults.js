import React, { useState } from 'react'
import EMPTY_IMAGE_PLACEHOLDER from '../../../../assets/images/doctor_placeholder.png'
import moment from 'moment'
import SendResults from '../../../Doctors/DoctorLabResults/components/SendResults'
import { useTranslation } from "react-i18next"

function LabResults({ results }) {
   const { t } = useTranslation()

   const [selectedLabResult, setSelectedLabResult] = useState(null)

   return (
      <section class="user-dashboard">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-12 col-xl-10 pb-5">
                  {results?.map((result, index) => (
                     <div key={index} class="card lab-result">
                        <div class="card-body py-2">
                           <div class="row align-items-center">
                              <div class="col-md-9">
                                 <ul>
                                    <li>
                                       <small class="d-block">{t("date")}</small>
                                       {moment(result.date).format('LL')}
                                    </li>
                                    <li>
                                       <small class="d-block">{t("report")}</small>
                                       {result?.tests?.map((test, index) => index === result?.tests?.length - 1 ? test.test : test.test + ", ")}
                                    </li>
                                    <li class="media">
                                       <img class="avatar-sm" src={result?.doctorId?.image ? result?.doctorId?.image : EMPTY_IMAGE_PLACEHOLDER} alt="doctor" />
                                       <div class="media-body">
                                          <h5 class="mt-0 mb-1">Dr. {result?.doctorId?.firstName + " " + result?.doctorId?.lastName}</h5>
                                          <p>{result?.doctorId?.specialityId.name}</p>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              <div class="col-md-3 text-center text-md-right mt-3 mt-md-0">
                                 <a href="javascript:void(0)" data-toggle="modal" data-target="#labResults" onClick={(e) => { e.preventDefault(); setSelectedLabResult(result) }} class="btn btn-primary px-3 py-2" style={result?.status === "pending" ? { pointerEvents: 'none' } : {}} >{result?.status === "pending" ? t("pending") : t("view_result")}</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
                  <SendResults selectedLabResult={selectedLabResult} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default LabResults
