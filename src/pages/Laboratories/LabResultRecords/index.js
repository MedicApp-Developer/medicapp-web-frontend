import React, { useEffect, useContext, useState } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import DOCTOR_IMAGE from '../../../assets/images/doctor.png'
import PATIENT_IMAGE from '../../../assets/images/patient.png'
import { getCompletedLabRequests, deleteCompletedRequest, setPageNumber } from '../../../store/actions/completedLabRequestActions'
import { connect } from 'react-redux'
import { getPagesArray } from '../../../Utills/functions'
import { RootContext } from '../../../contextApi'
import classNames from 'classnames'
import moment from 'moment'
import SendResults from '../../Doctors/DoctorLabResults/components/SendResults'

function LabResultRecords({ getCompletedLabRequests, deleteCompletedRequest, completedRequests, setPageNumber }) {
   const { pageNumber, numberOfPages, completedlabRequests } = completedRequests && completedRequests
   const { user } = useContext(RootContext)
   const [selectedLabResult, setSelectedLabResult] = useState({})

   useEffect(() => {
      getCompletedLabRequests(user.referenceId, pageNumber || 0)
   }, [getCompletedLabRequests, pageNumber, user.referenceId])

   const pages = getPagesArray(numberOfPages)

   return (
      <DashboardLayout>
         <div class="row align-items-center add-list">
            <div class="col-12">
               <h4>Lab Result Records</h4>
            </div>
         </div>

         <div class="row">
            <div class="col-md-12">
               {completedlabRequests?.map(request => (
                  <div class="card lab-result">
                     <div class="card-body">
                        <div class="row align-items-center">
                           <div class="col-md-12 col-lg-9">
                              <ul>
                                 <li>
                                    <small class="d-block">Date</small>
                                    {moment(request.date).format('LL')}
                                 </li>
                                 <li>
                                    <small class="d-block">Report</small>
                                    {request.tests.map(test => test.test + ", ")}
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={DOCTOR_IMAGE} class="mr-3" alt="doctor" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">Dr. {request?.doctorId?.firstName + " " + request?.doctorId?.lastName}</h5>
                                       <p>{request?.doctorId?.speciality}</p>
                                    </div>
                                 </li>
                                 <li class="media">
                                    <img class="avatar-sm" src={PATIENT_IMAGE} class="mr-3" alt="patient" />
                                    <div class="media-body">
                                       <h5 class="mt-0 mb-1">{request?.patientId?.firstName + " " + request?.patientId?.lastName}</h5>
                                       <p>Patient</p>
                                    </div>
                                 </li>

                              </ul>
                           </div>
                           <div class="col-md-12 col-lg-3 text-center text-md-right mt-3 mt-md-0">
                              <a href={href} data-toggle="modal" data-target="#labResults" class="btn btn-primary px-3 py-2" onClick={(e) => { setSelectedLabResult(request) }}>View Results</a>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div class="row">
            <div class="col-md-12">
               {completedlabRequests?.length > 0 ? (
                  <nav>
                     <ul className="pagination justify-content-center align-items-center my-md-2">
                        <li className="page-item" style={{ pointerEvents: +pageNumber <= 0 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber - 1) }}>Prev</a></li>
                        {pages.map((pageIndex) => (
                           <li className={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a className="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                        ))}
                        <li className="page-item" style={{ pointerEvents: +pageNumber === +numberOfPages - 1 && "none" }}><a href={href} onClick={(e) => { e.preventDefault(); setPageNumber(pageNumber + 1) }}>Next</a></li>
                     </ul>
                  </nav>
               ) : (
                  <p>No Test Results Found</p>
               )}
            </div>
         </div>
         <SendResults selectedLabResult={selectedLabResult} />
      </DashboardLayout>
   )
}

const mapStateToProps = (state) => ({
   completedRequests: state.completedLabRequests
})

const mapDispatchToProps = {
   getCompletedLabRequests,
   deleteCompletedRequest,
   setPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(LabResultRecords)