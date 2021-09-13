import React from 'react'
import HospitalImage from '../../../../assets/images/hospital.png';

function HospitalInfo() {
    return (
        <>
            <div className="row align-items-start add-list hospital-info">
                <div className="col-6">
                    <h4>Medeor Hospital</h4>
                    <p className="rating mb-1">
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </p>
                    <p><span className="icon-map"></span> Dubai, United Arab Emirates <a href="#">Get Direction</a></p>
                    <h6>Open now </h6>
                </div>
                <div className="col-6 text-right">
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#updateHospital" className="btn btn-primary px-4">Update</a>
                </div>
                </div>
                <div className="row mt-2">
                <div className="col-md-3">
                    <img className="img-fluid" src={HospitalImage} alt="hospital" />
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={HospitalImage} alt="hospital" />
                </div>
                <div className="col-md-3">
                    <div className="upload-file">
                        <span className="icon-upload"></span>
                        <p>Upload New Image</p>
                    </div>
                </div>
                </div>
                <div className="row mt-4">
                <div className="col-md-8">
                    <h4>About the Hospital</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HospitalInfo
