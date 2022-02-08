import React, { useCallback, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { createSpeciality } from '../../../../store/actions/specialitiesActions'
import { connect } from 'react-redux'
import TextInput from '../../../../components/forms/TextInput'
import TextArea from '../../../../components/forms/TextArea'
import { useDropzone } from 'react-dropzone'
import { CircularProgressbar } from 'react-circular-progressbar'
import SpecialityApi from '../../../../api/Specialities'
import axios from '../../../../axios'
import { SPECIALITY_REQUEST_NAMESPACE } from '../../../../constants/namespaces'
import { toast } from 'react-toastify'

function AddSpecialities({ createSpeciality, selectedSpeciality }) {

    const onDrop = useCallback(acceptedFiles => {
        setUploadedImage(acceptedFiles)
    }, [])
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ maxFiles: 1, accept: 'image/*', onDrop })
    const [uploadedImage, setUploadedImage] = useState([])
    const [progress, setProgress] = useState()

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))

    return (
        <Formik
            initialValues={{
                name_en: selectedSpeciality?.name_en || "",
                name_ar: selectedSpeciality?.name_ar || "",
                tags: selectedSpeciality?.tags || ""
            }}
            validationSchema={Yup.object({
                name_en: Yup.string().required('Required ( English )'),
                name_ar: Yup.string().required('Required ( Arabic )'),
                tags: Yup.string().required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {

                const formData = new FormData()

                if (uploadedImage[0]) {
                    if (uploadedImage[0].size > 5242880) {
                        toast.error("File too Big, please select a file less than 5mb")
                        return false
                    }

                    formData.append("image", uploadedImage[0])
                    formData.append("name_en", values.name_en)
                    formData.append("name_ar", values.name_ar)
                    formData.append("tags", values.tags)

                    if (selectedSpeciality?.name_en === null) {
                        axios.post(`/${SPECIALITY_REQUEST_NAMESPACE}`, formData, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            onUploadProgress: (data) => {
                                setProgress(Math.round((100 * data.loaded) / data.total))
                            }
                        }).then(async res => {
                            setProgress(null)
                            const response = await SpecialityApi.getAllSpecialities()
                            createSpeciality(response.data.data, false)
                            resetForm()
                        }).catch(err => {
                            setProgress(null)
                            toast.error(err.response.data.error.message)
                        })
                    } else {
                        axios.put(`/${SPECIALITY_REQUEST_NAMESPACE}/${selectedSpeciality._id}`, formData, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            onUploadProgress: (data) => {
                                setProgress(Math.round((100 * data.loaded) / data.total))
                            }
                        }).then(async res => {
                            setProgress(null)
                            const response = await SpecialityApi.getAllSpecialities()
                            createSpeciality(response.data.data, true)
                            resetForm()
                        }).catch(err => {
                            setProgress(null)
                            toast.error(err.response.data.error.message)
                        })
                    }

                } else {
                    toast.error('Please select an image')
                }
            }}
            enableReinitialize={true}
        >
            <div className="modal fade" id="addSpeciality" tabindex="-1" aria-labelledby="addDoctorLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="icon-close"></span>
                            </button>
                            <h4 className="text-center">{selectedSpeciality?.name_en ? "Update" : "Add"} Speciality</h4>
                            <Form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <TextInput type="text" name="name_en" placeholder="Name ( In English )" />
                                        </div>
                                        <div className="form-group">
                                            <TextInput type="text" name="name_ar" placeholder="Name ( In Arabic )" />
                                        </div>
                                        <div className="form-group">
                                            <TextArea name="tags" rows="5" placeholder="Add Search Tags in comma seperated formate ( i.e: fever,blood pressure,sugar )" />
                                        </div>
                                        {progress ? (
                                            <div style={{ width: 170, height: 170, margin: 'auto' }}>
                                                <CircularProgressbar value={progress} text={`${progress}%`} />
                                                <br />
                                            </div>
                                        ) : (
                                            <section className="container">
                                                <div {...getRootProps({ className: 'dropzone' })}>
                                                    <input {...getInputProps()} />
                                                    <p>Drag 'n' drop image here, or click to select image</p>
                                                    <em>(Only image file will be accepted)</em>
                                                </div>
                                                <aside>
                                                    <h4>Files</h4>
                                                    <ul>{files}</ul>
                                                </aside>
                                            </section>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group text-center mb-0 mt-3">
                                    <button type="submit" style={progress && { pointerEvents: "none" }} className="btn btn-primary">{selectedSpeciality?.name_en ? "Update" : "Save"}</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    createSpeciality
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpecialities)
