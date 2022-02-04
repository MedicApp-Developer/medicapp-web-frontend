import React, { useEffect, useContext, useState } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import DOCTOR_IMAGE from '../../../assets/images/doctor.png'
import PATIENT_IMAGE from '../../../assets/images/patient.png'
import SendLabResults from './components/SendLabResults'
import { connect } from 'react-redux'
import { getPagesArray } from '../../../Utills/functions'
import { RootContext } from '../../../contextApi'
import classNames from 'classnames'
import { getPendingLabRequests, deletePendingRequest, setPageNumber } from '../../../store/actions/pendingLabRequestActions'

function LabRequests({ getPendingLabRequests, deletePendingRequest, pendingRequests, setPageNumber }) {
   const { pageNumber, numberOfPages, pendinglabRequests } = pendingRequests && pendingRequests
   const { user } = useContext(RootContext)
   const [selectedRequest, setSelectedRequest] = useState({})
   useEffect(() => {
      getPendingLabRequests(user.referenceId, pageNumber || 0)
   }, [getPendingLabRequests, pageNumber, user.referenceId])

   const pages = getPagesArray(numberOfPages)

   const selectRequest = (req) => {
      setSelectedRequest(req)
   }

   return (
      <DashboardLayout>
         <div class="row align-items-center add-list">
            <div class="col-12">
               <h4>Lab Request</h4>
            </div>
         </div>
         <div class="row">
            {pendinglabRequests?.map(req => (
               <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div class="card">
                     <div class="card-body">
                        <h5 class="mb-1"><strong>Test</strong></h5>
                        <p>{req.tests.map(item => item.test + ", ")}</p>
                        <div class="media mb-3">
                           <img class="avatar-sm" src={PATIENT_IMAGE} alt="patient" />
                           <div class="media-body">
                              <p>Patient Name</p>
                              <h5 class="mt-0">{req?.patientId?.firstName + " " + req?.patientId?.lastName}</h5>
                           </div>
                        </div>
                        <div class="media">
                           <img class="avatar-sm" src={DOCTOR_IMAGE} alt="doctor" />
                           <div class="media-body">
                              <h5 class="mt-0">Dr. {req?.doctorId?.firstName + " " + req?.doctorId?.lastName}</h5>
                              <p>Dentist</p>
                           </div>
                        </div>
                        <div class="text-center mt-4">
                           <a href={href} data-toggle="modal" onClick={selectRequest.bind(this, req)} data-target="#sendResults" class="btn btn-primary px-3 py-2">Send Results</a>
                        </div>
                     </div>

                  </div>
               </div>
            ))}
         </div>
         <div class="row">
            <div class="col-md-12">
               {pendinglabRequests?.length > 0 ? (
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
                  <p>No Lab Requests Found</p>
               )}
            </div>
         </div>
         <SendLabResults selectedRequest={selectedRequest} />
      </DashboardLayout>
   )
}

const mapStateToProps = (state) => ({
   pendingRequests: state.pendingLabRequests
})

const mapDispatchToProps = {
   getPendingLabRequests,
   deletePendingRequest,
   setPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(LabRequests)
