import React, { useEffect, useContext } from 'react'
import PATIENT_IMAGE from '../../../../assets/images/patient.png'
import DOCTOR_IMAGE from '../../../../assets/images/doctor.png'
import { href } from '../../../../constants/extra'
import { getPendingLabRequests, deletePendingRequest, setPageNumber } from '../../../../store/actions/pendingLabRequestActions';
import { connect } from 'react-redux';
import { getPagesArray } from '../../../../Utills/functions';
import { RootContext } from '../../../../contextApi'
import classNames from 'classnames';
import moment from 'moment';

function PendingLabRequests({ getPendingLabRequests, deletePendingRequest, pendingRequests, setPageNumber }) {
   const { pageNumber, numberOfPages, pendinglabRequests } = pendingRequests && pendingRequests;
   const { user } = useContext(RootContext);

   useEffect(() => {
      getPendingLabRequests(user.referenceId, pageNumber || 0);
  }, [getPendingLabRequests, pageNumber, user.referenceId]);

  const pages = getPagesArray(numberOfPages);

    return (
        <>
            <div class="row">
               <div class="col-md-12">
                  {pendinglabRequests?.map(item => {
                     return (
                        <div class="card lab-result">
                           <div class="card-body">
                              <div class="row align-items-center">
                                 <div class="col-md-12 col-lg-9">
                                    <ul>
                                       <li>
                                          <small class="d-block">Date</small>
                                          {moment(item.date).format('LL')}
                                       </li>
                                       <li>
                                          <small class="d-block">Report</small>
                                          {item.tests.map(test => test.test + ", ")}
                                       </li>
                                       <li class="media">
                                          <img class="avatar-sm" src={PATIENT_IMAGE} class="mr-3" alt="patient" />
                                          <div class="media-body">
                                             <h5 class="mt-0 mb-1">{item.patientId.firstName + " " + item.patientId.lastName}</h5>
                                             <p>Patient</p>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                           {pendinglabRequests?.length > 0 ? (
                                <nav>
                                    <ul className="pagination justify-content-center align-items-center my-md-2">
                                        <li className="page-item" style={{ pointerEvents: +pageNumber <= 0 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber - 1)}}>Prev</a></li>
                                        {pages.map((pageIndex) => (
                                            <li className={classNames("page-item", { "active": +pageIndex === pageNumber })} key={pageIndex} onClick={() => setPageNumber(pageIndex)}><a className="page-link" href={href} onClick={(e) => e.preventDefault()}>{pageIndex + 1}</a></li>
                                        ))}
                                        <li className="page-item" style={{ pointerEvents: +pageNumber === +numberOfPages - 1 && "none"  }}><a href={href} onClick={(e) => {e.preventDefault(); setPageNumber(pageNumber + 1)}}>Next</a></li>
                                    </ul>
                                </nav>
                            ): (
                                <p>No doctors Found</p>
                            )}
               </div>
            </div>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(PendingLabRequests);
