import React from 'react'

function UpdateHospitalProfile() {
    return (
        <>
            <div className="modal fade" id="updateHospital" tabindex="-1" aria-labelledby="updateHospitalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span className="icon-close"></span>
                        </button>
                        <h4 className="text-center">Update Hospital Profile</h4>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Opening Time</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Closing Time</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Services</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>PCR/DPI</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="About Hopital"></textarea>
                                </div>
                                </div>
                            </div>
                            <div className="form-group text-center mb-0">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateHospitalProfile
