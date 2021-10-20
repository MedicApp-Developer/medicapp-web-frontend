import React, { useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { href } from '../../../constants/extra'
import SendResults from './components/SendResults'
import classNames from 'classnames'
import PendingLabRequests from './components/PendingLabRequests'
import TestResults from './components/TestResults'

function DoctorLabResults() {
   const [accountTabSelected, setAccountTabSelected] = useState(true);
   const [selectedLabResult, setSelectedLabResult] = useState({});
    return (
        <DashboardLayout>
           <div class="row nav-tab-link">
               <div class="col-md-12">
                  <ul class="nav justify-content-center">
                        <li className="nav-item">
                            <a className={classNames('nav-link', { 'active': !accountTabSelected })} href={href} onClick={(e) => {e.preventDefault(); setAccountTabSelected(false)}}>Pending Request</a>
                        </li>
                        <li className="nav-item">
                            <a className={classNames('nav-link', { 'active': accountTabSelected })} href={href} onClick={(e) => { e.preventDefault(); setAccountTabSelected(true)}}>Test Results</a>
                        </li>
                  </ul>
               </div>
            </div>
            
            <div class="row align-items-center add-list">
               <div class="col-12">
                  <h4>{accountTabSelected ? "Lab Test Results" : "Pending Lab Requests"} </h4>
               </div>
            </div>
            {!accountTabSelected ? (
               <PendingLabRequests />
            ) : (
               <TestResults setSelectedLabResult={setSelectedLabResult} />
            )}
            <SendResults selectedLabResult={selectedLabResult} />
        </DashboardLayout>
    )
}

export default DoctorLabResults
