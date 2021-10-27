import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { createPromo } from '../../../../store/actions/promosActions';
import {useDropzone} from 'react-dropzone';

function AddPromo({ createPromo }) {
    
    const onDrop = useCallback(acceptedFiles => {
        setUploadedVideo(acceptedFiles);
    }, [])
    
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({ maxFiles: 1, accept: 'video/*', onDrop });
    const [uploadedVideo, setUploadedVideo] = useState([]);
    
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
    ));

    const onUploadVideo = () => {
        const formData = new FormData();
        formData.append("video", uploadedVideo[0]);
        createPromo(formData);
    }

    return (
            <div class="modal fade" id="addPromo" tabindex="-1" aria-labelledby="addPromoLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="icon-close"></span>
                        </button>
                        <h4 class="text-center">Add Promo Video</h4>
                        <section className="container">
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop video here, or click to select video</p>
                                <em>(Only video file will be accepted)</em>
                            </div>
                            <aside>
                                <h4>Files</h4>
                                <ul>{files}</ul>
                            </aside>
                        </section>
                        <div class="col-12 text-right">
                            <a href="javascript:void(0)" class="btn btn-primary px-3" onClick={onUploadVideo}>UPLOAD VIDEO</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    createPromo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPromo)
