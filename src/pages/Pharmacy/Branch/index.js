import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import DOCTOR_IMAGE from '../../../assets/images/doctor.png';
import { href } from '../../../constants/extra';
import AddProfile from './components/AddProfile';
import EditProfile from './components/EditProfile';
import { useHistory } from 'react-router-dom';
import { PHARMACY_DETAILS_ROUTE } from '../../../constants/Redirects';

function Branch() {
    const history = useHistory();
    return (
        <DashboardLayout>
            <div class="row align-items-center add-list">
               <div class="col-12">
                  <h4>Branch</h4>
               </div>
            </div>
            <div class="row list-block">
               <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div class="card">
                     <div class="card-body pb-4">
                        <div class="media" style={{ cursor: "pointer" }} onClick={() => history.push(PHARMACY_DETAILS_ROUTE)}>
                           <img src={DOCTOR_IMAGE} alt="doctor" />
                           <div class="media-body">
                              <h5 class="mt-0">Life Pharmacy</h5>
                              <p>Deira,Dubai</p>
                           </div>
                        </div>
                        <div class="contact-info">
                           <button type="button" data-toggle="modal" data-target="#editProfile" class="btn btn-primary mt-3 px-4 py-2">Edit Profile</button>
                        </div>
                     </div>
                     <div class="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="icon-dots"></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a class="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div class="card">
                     <div class="card-body pb-4">
                        <div class="media">
                           <img src={DOCTOR_IMAGE} alt="doctor" />
                           <div class="media-body">
                              <h5 class="mt-0">Life Pharmacy</h5>
                              <p>Deira,Dubai</p>
                           </div>
                        </div>
                        <div class="contact-info">
                           <button type="button" class="btn btn-primary mt-3 px-4 py-2">Edit Profile</button>
                        </div>
                     </div>
                     <div class="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="icon-dots"></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a class="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div class="card">
                     <div class="card-body pb-4">
                        <div class="media">
                           <img src={DOCTOR_IMAGE} alt="doctor" />
                           <div class="media-body">
                              <h5 class="mt-0">Life Pharmacy</h5>
                              <p>Deira,Dubai</p>
                           </div>
                        </div>
                        <div class="contact-info">
                           <button type="button" class="btn btn-primary mt-3 px-4 py-2">Edit Profile</button>
                        </div>
                     </div>
                     <div class="dropdown">
                        <a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="icon-dots"></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a class="dropdown-item delete-item" href={href}>Delete</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                  <div class="card add-branch">
                     <div class="card-body">
                        <a href={href} data-toggle="modal" data-target="#addProfile"><span class="icon-plus"></span></a>
                        <p class="mt-3">Add Branch</p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <nav>
                     <ul class="pagination justify-content-center align-items-center my-md-2">
                        <li class="page-item"><a href={href}>Prev</a></li>
                        <li class="page-item active"><a class="page-link" href={href}>1</a></li>
                        <li class="page-item"><a class="page-link" href={href}>2</a></li>
                        <li class="page-item"><a class="page-link" href={href}>3</a></li>
                        <li class="page-item"><a class="page-link" href={href}>4</a></li>
                        <li class="page-item"><a href={href}>Next</a></li>
                     </ul>
                  </nav>
               </div>
            </div>
            <AddProfile />
            <EditProfile />
        </DashboardLayout>
    )
}

export default Branch
