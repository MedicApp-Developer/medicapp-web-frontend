import React from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import DOCTOR_IMAGE from '../../../assets/images/doctor.png';
import PATIENT_IMAGE from '../../../assets/images/patient.png';

function LabResultRecords() {
    return (
        <DashboardLayout>
            <div className="row align-items-center add-list">
               <div className="col-12">
                  <h4>Lab Result Records</h4>
               </div>
            </div>

            <div className="row">
               <div className="col-md-12">
                  <div className="card lab-result px-lg-3 py-2">
                     <div className="card-body">
                        <div className="row align-items-center">
                           <div className="col-sm-10">
                              <ul>
                                 <li>
                                    20 Aug 2021
                                 </li>
                                   <li>
                                    20 Aug 2021
                                 </li>
                                    <li className="media">
                                  <img src="..." className="mr-3" alt="..." />
                                  <div className="media-body">
                                    <h5 className="mt-0 mb-1">List-based media object</h5>
                                    <p>All my girls vin</p>
                                  </div>
                                </li>
                                <li className="media">
                                  <img src="..." className="mr-3" alt="..." />
                                  <div className="media-body">
                                    <h5 className="mt-0 mb-1">List-based media object</h5>
                                    <p>All my girls vin</p>
                                  </div>
                                </li>
                                   
                              </ul>
                           </div>
                           <div className="col-sm-2 text-sm-right">
                              <a href={href} className="btn btn-primary px-3 py-2">Send Results</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </DashboardLayout>
    )
}

export default LabResultRecords
