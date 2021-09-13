import React from 'react'

function SetDoctorSchedule() {
    return (
        <div class="modal fade" id="setSchedule" tabindex="-1" aria-labelledby="setScheduleLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="icon-close"></span>
                    </button>
                    <h4 class="text-center">Set Schedule</h4>
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Monday" />
                            </div>
                            </div>
                            <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Time</option>
                                </select>
                            </div>
                            </div>
                            <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Time</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Tuesday" />
                            </div>
                            </div>
                            <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Time</option>
                                </select>
                            </div>
                            </div>
                            <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Time</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Wednesday" />
                            </div>
                            </div>
                            <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Time</option>
                                </select>
                            </div>
                            </div>
                            <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>Time</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div class="form-group text-center mb-0 mt-2">
                            <button type="submit" class="btn btn-outline-primary mx-1">+ Add More</button>
                            <button type="submit" class="btn btn-primary mx-1 px-5">Set</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SetDoctorSchedule
