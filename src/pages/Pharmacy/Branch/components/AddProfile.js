import React from 'react'

function AddProfile() {
    return (
        <>
            <div class="modal fade" id="addProfile" tabindex="-1" aria-labelledby="addProfileLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="icon-close"></span>
                        </button>
                        <h4 class="text-center">Add Branch</h4>
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Location" />
                                </div>
                                </div>
                                <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Mobile" />
                                </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="3" placeholder="About Pharmacy"></textarea>
                            </div>
                            <div class="form-group text-center mb-0">
                                <button type="submit" class="btn btn-primary">Confirm</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProfile
