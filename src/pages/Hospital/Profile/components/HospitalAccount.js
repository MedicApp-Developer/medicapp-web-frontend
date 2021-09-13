import React from 'react'
import { href } from '../../../../constants/extra'
import mapImage from '../../../../assets/images/map.png';
import PATIENT_IMAGE from '../../../../assets/images/patient.png';

function HospitalAccount() {
    return (
        <>
            <div className="row patient-profile">
               <div className="col-md-3 col-lg-3 col-xl-2">
                  <div className="profile-image">
                     <img src={PATIENT_IMAGE} alt="patient" />
                     <a href={href}><span className="fa fa-pencil"></span></a>
                  </div>
               </div>
               <div className="col-md-9 col-lg-9 col-xl-8">
                  <h4 className="mb-3">Hospital Details</h4>
                  <form>
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Hospital Name"/>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Trade License Number"/>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Location" />
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group position-relative">
                              <input type="file" className="form-control custom-file-input" id="validatedCustomFile" />
                              <label className="custom-file-label form-control" htmlFor="validatedCustomFile">Upload Trade License</label>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="map-bg" style={{ backgroundImage: `url(${mapImage})` }}>
                              <button type="button" className="btn btn-primary px-4">UPDATE MAP LOCATION</button>
                           </div>
                        </div>
                     </div>
                     <h4 className="mb-3">Contact Details</h4>
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Email" />
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Mobile" />
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="Password" className="form-control" placeholder="Change Password" />
                           </div>
                        </div>
                     </div>
                     <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary mt-2">Update</button>
                     </div>
                  </form>
               </div>
            </div>
        </>
    )
}

export default HospitalAccount
