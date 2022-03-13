import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { createPromo } from '../../../../store/actions/promosActions';
import { useDropzone } from 'react-dropzone';
import PromoApi from '../../../../api/promos';
import axios from '../../../../axios';
import { PROMO_REQUEST_NAMESPACE } from '../../../../constants/namespaces';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { toast } from 'react-toastify';

function AddPromo({ createPromo }) {

    const onDrop = useCallback(acceptedFiles => {
        setUploadedVideo(acceptedFiles);
    }, [])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ maxFiles: 1, accept: 'video/*', onDrop });
    const [uploadedVideo, setUploadedVideo] = useState([]);
    const [progress, setProgress] = useState();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const onUploadVideo = async () => {
        const formData = new FormData();

        if (uploadedVideo[0]) {
            if (uploadedVideo[0].size > 20000000) {
                toast.error("File too Big, please select a file less than 20mb")
                return false;
            }

            formData.append("video", uploadedVideo[0]);

            axios.post(`/${PROMO_REQUEST_NAMESPACE}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: (data) => {
                    setProgress(Math.round((100 * data.loaded) / data.total))
                }
            }).then(async res => {
                setProgress(null);
                const response = await PromoApi.getAllPromos(0);
                createPromo(response.data.data);
            }).catch(err => {
                setProgress(null);
                toast.error(err.response.data.message);
            })
        } else {
            toast.error('Please select a video');
        }
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
                        {progress ? (
                            <div style={{ width: 170, height: 170, margin: 'auto' }}>
                                <CircularProgressbar value={progress} text={`${progress}%`} />
                                <br />
                            </div>
                        ) : (
                            <section className="container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop video here, or click to select video</p>
                                    <em>(Only video file will be accepted)</em>
                                </div>
                                <aside>
                                    <h4>Files</h4>
                                    <ul>{files}</ul>
                                </aside>
                            </section>
                        )}
                        <div class="col-12 text-right">
                            <a href="javascript:void(0)" style={progress && { pointerEvents: "none" }} class="btn btn-primary px-3" onClick={onUploadVideo}>{progress ? "Uploading..." : "UPLOAD VIDEO"}</a>
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
