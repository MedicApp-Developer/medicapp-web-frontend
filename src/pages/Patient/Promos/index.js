import React from 'react'
import AppLayout from '../../../layout/AppLayout'
import ReactPlayer from 'react-player';

function Promos() {
    return (
        <AppLayout>
            <div style={{ margin: '2rem' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 mb-6">
                                        <div class="item" style={{ cursor: 'pointer' }}>
                                            <div class="card">
                                                <div class="card-body">
                                                    <ReactPlayer
                                                        url={"http://res.cloudinary.com/dsimhetcs/video/upload/v1645736768/sample_id.mp4"}
                                                        width="100%"
                                                        height="100%"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Promos
