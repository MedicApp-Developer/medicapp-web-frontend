import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import PATIENT_IMAGE from '../../../assets/images/patient.png'

function NurseProfile() {
    return (
        <DashboardLayout>
          <div class="row align-items-center add-list mb-5">
               <div class="col-12">
                  <h4>Account</h4>
               </div>
            </div>
            <div class="row patient-profile">
               <div class="col-md-3 col-lg-3 col-xl-2">
                  <div class="profile-image">
                     <img src={PATIENT_IMAGE} alt="patient" />
                     <a href="#"><span class="fa fa-pencil"></span></a>
                  </div>
               </div>
               <div class="col-md-9 col-lg-9 col-xl-8">
                  <h4 class="mb-3">Nurse Details</h4>
                  <form>
                     <div class="row">
                        <div class="col-sm-6">
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="First Name" />
                           </div>
                        </div>
                        <div class="col-sm-6">
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="Last Name" />
                           </div>
                        </div>
                     </div>
                     
                     <h4 class="my-3">Contact Details</h4>
                     <div class="row">
                        <div class="col-sm-6">
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="Email" />
                           </div>
                        </div>
                        <div class="col-sm-6">
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="Mobile" />
                           </div>
                        </div>
                        <div class="col-sm-6">
                           <div class="form-group">
                              <input type="Password" class="form-control" placeholder="Change Password" />
                           </div>
                        </div>
                     </div>
                     <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary mt-2">Update</button>
                     </div>
                  </form>
               </div>
            </div>  
        </DashboardLayout>
    )
}

export default NurseProfile
