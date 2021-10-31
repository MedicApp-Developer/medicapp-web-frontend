import React from 'react'
import ReactPlayer from 'react-player'

function ShowVideo({ selectedPromo }) {
    return (
        <div class="modal fade" id="video-wrapper" tabindex="-1" aria-labelledby="video-wrapperLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content" style={{ background: "gray" }}>
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="icon-close"></span>
                            </button>
                            {Object.keys(selectedPromo).length > 0 && (
                                <div>
                                    <ReactPlayer 
                                        controls={true} 
                                        playing={true} 
                                        url={selectedPromo.url} 
                                        playbackRate={1}
                                        pip={true}
                                        width={"100%"}
                                        height="100%"
                                        stopOnUnmount={true}
                                    />
                                    <br/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ShowVideo
