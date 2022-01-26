import React, { useEffect, useState } from 'react'
import AppLayout from '../../../../layout/AppLayout'
import PLACEHOLDER_LARGE from '../../../../assets/images/placeholder-lg.png'
import PLACEHOLDER_SMALL from '../../../../assets/images/placeholder-sm.png'
import DENTAL_IMAGE from '../../../../assets/images/dental.png'
import TESTS_IMAGE from '../../../../assets/images/tests.png'
import VACCINATION_IMAGE from '../../../../assets/images/vaccination.png'
import HospitalApi from '../../../../api/Hospital'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import HospitalDoctors from './HospitalDoctors'
import HospitalServices from './HospitalServices'
import { withScriptjs } from "react-google-maps"
import DirectionsMap from './directions/DirectionsMap'
import LocateHospital from './directions/LocateHospital'
import BookTestHospitalAppointment from './appointment/BookTestHospitalAppointment'
import BookVaccinationHospital from './appointment/BookVaccinationHospital'

function HospitalDetails() {
    const [hospital, setHospital] = useState({})
    const [doctors, setDoctors] = useState([])
    const { id } = useParams()

    const MapLoader = withScriptjs(DirectionsMap)

    useEffect(() => {
        HospitalApi.getSingleHospital(id).then(hospital => {
            setHospital(hospital.data.data.hospital)
            setDoctors(hospital.data.data.doctors)
        }).catch(err => {
            toast.error("Problem while getting the hospital")
        })
    }, [])

    return (
        <AppLayout>
            <section class="search-block pt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:viod(0)">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Hospital</li>
                                    <li class="breadcrumb-item active" aria-current="page">{Object.keys(hospital).length > 0 ? hospital?.name : "Loading..."}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section class="user-dashboard">
                <div class="container">
                    <div class="row align-items-start add-list hospital-info">
                        <div class="col-12">
                            <h4>{hospital?.name}</h4>
                            <p class="rating mb-1">
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </p>
                            <p><span class="icon-map"></span> {hospital?.address}
                                <a href="javascript:void(0)" data-toggle="modal" data-target="#getDirections" style={{ marginLeft: '5px' }}> Get Direction</a>
                            </p>
                            <h6>Open now </h6>

                            {hospital.location?.coordinates.length > 0 && (
                                <LocateHospital lat={hospital?.location?.coordinates[0]} lng={hospital?.location?.coordinates[1]} />
                            )}
                            <div className="modal fade" id="getDirections" tabindex="-1" aria-labelledby="getDirectionsLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span className="icon-close"></span>
                                            </button>
                                            <h4 className="text-center">Get Direction</h4>
                                            {/* Directions Map Here */}
                                            {hospital.location?.coordinates.length > 0 && (

                                                <MapLoader
                                                    hospitalLocation={hospital?.location}
                                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
                                                    loadingElement={<div style={{ height: `100%` }} />}
                                                />

                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-8 mb-3">
                            <img class="img-fluid h-100 w-100" src={hospital?.images?.length > 0 ? hospital.images[0] : PLACEHOLDER_LARGE} alt="placeholder" />
                        </div>
                        <div class="col-md-4">
                            <img class="img-fluid w-100 mb-3" src={hospital?.images?.length > 1 ? hospital.images[1] : PLACEHOLDER_SMALL} alt="placeholder" />
                            <img class="img-fluid w-100 mb-3" src={hospital?.images?.length > 2 ? hospital.images[2] : PLACEHOLDER_SMALL} alt="placeholder" />
                        </div>
                    </div>
                    <div class="row mt-4 pb-5">
                        <div class="col-md-12 hospital-tabs">
                            <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="pills-overview-tab" data-toggle="pill" href="#pills-overview" role="tab" aria-controls="pills-overview" aria-selected="true">Overview</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="pills-doctors-tab" data-toggle="pill" href="#pills-doctors" role="tab" aria-controls="pills-doctors" aria-selected="false">Doctors</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="pills-services-tab" data-toggle="pill" href="#pills-services" role="tab" aria-controls="pills-services" aria-selected="false">Services</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="pills-PCR-tab" data-toggle="pill" href="#pills-PCR" role="tab" aria-controls="pills-PCR" aria-selected="false">PCR-RT</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">
                                    <h4>About the Hospital</h4>
                                    <p>{hospital?.about}</p>
                                </div>

                                {/* Hospital's Doctors Here */}
                                <HospitalDoctors doctors={doctors} />

                                {/* Hospital Services */}
                                <HospitalServices services={hospital?.services} />

                                <div class="tab-pane fade" id="pills-PCR" role="tabpanel" aria-labelledby="pills-PCR-tab">
                                    <div class="row align-items-center mb-4">
                                        <div class="col-6 col-lg-3">
                                            <div class="media mb-0">
                                                <img src={TESTS_IMAGE} class="mr-3" alt="dental" />
                                                <div class="media-body">
                                                    <h5 class="mt-0">PCR Test</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <Link to="/patient/book-pcr-appointment" class="btn btn-primary px-3 py-1 mt-2" onClick={() => { localStorage.setItem("HOSPITAL_PCR_APPOINTMENT", JSON.stringify(hospital)) }}>Book Appointment</Link>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-4">
                                        <div class="col-6 col-lg-3">
                                            <div class="media mb-0">
                                                <img src={VACCINATION_IMAGE} class="mr-3" alt="dental" />
                                                <div class="media-body">
                                                    <h5 class="mt-0">PCR Vaccination</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <Link to="/patient/book-vaccination-appointment" class="btn btn-primary px-3 py-1 mt-2" onClick={() => { localStorage.setItem("HOSPITAL_VACCINATION_APPOINTMENT", JSON.stringify(hospital)) }}>Book Appointment</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default HospitalDetails
