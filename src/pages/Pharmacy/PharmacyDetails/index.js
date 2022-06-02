import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import PHARMACY_IMAGE from '../../../assets/images/pharmacy.png'
import EditBranch from './components/EditBranch'

function PharmacyDetails() {
    return (
        <DashboardLayout>
            <div class="row align-items-start add-list hospital-info">
               <div class="col-6">
                  <h4>Branch</h4>
               </div>
               <div class="col-6 text-right">
                  <a href="javascript:void(0)" data-toggle="modal" data-target="#editBranch" class="btn btn-primary px-5">Edit</a>
               </div>
            </div>
            <div class="row mt-4">
               <div class="col-md-4">
                  <div class="card brand-logo h-100">
                     <div class="card-body text-center">
                        <img class="img-fluid" src={PHARMACY_IMAGE} alt="pharmacy.png" />
                     </div>
                  </div>
               </div>
               <div class="col-md-7 mt-4 mt-md-0">
                  <h4 class="mb-0"><strong>Life Pharmacy</strong></h4>
                  <p class="mt-2 mb-2"><i class="icon-map"></i> Dubai, United Arab Emirates</p>
                  <p class="mt-2 mb-2"><i class="icon-phone"></i> +971 4 1234567</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div class="map-bg mb-0">
                     <button type="button" class="btn btn-primary px-4">UPDATE MAP LOCATION</button>
                  </div>
               </div>
            </div>
            <EditBranch />
        </DashboardLayout>
    )
}

export default PharmacyDetails
