import React, { useCallback, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import TextInput from '../../../../components/forms/TextInput'
import VendorApi from '../../../../api/Vendor'
import ImageUpload from 'image-upload-react'
import { toast } from 'react-toastify'

function AddVendorType({ vendorTypes, selectedVendorType, setVendorTypes }) {
    const [imageSrc, setImageSrc] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageSelect = (e) => {
        setImage(e.target.files[0]);
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <Formik
            initialValues={{
                name_en: selectedVendorType?.name_en || "",
                name_ar: selectedVendorType?.name_ar || ""
            }}
            validationSchema={Yup.object({
                name_en: Yup.string().required('Required ( English )'),
                name_ar: Yup.string().required('Required ( Arabic )')
            })}
            onSubmit={(values, { resetForm }) => {
                if (selectedVendorType === null) {
                    if (imageSrc && image) {
                        let formData = new FormData();
                        imageSrc && image && formData.append('image', image);
                        formData.append('name_ar', values.name_ar);
                        formData.append('name_en', values.name_en);
                        VendorApi.createPackageCategory(formData).then(res => {
                            const tempVendorTypes = JSON.parse(JSON.stringify(vendorTypes));
                            setVendorTypes([...tempVendorTypes, res.data.data]);
                            resetForm();
                            setImage(null);
                            setImageSrc(null);
                            toast.success("Package Category Added Successfully")
                        })
                    } else {
                        toast.error("Please select image")
                    }
                } else {
                    if (imageSrc && image) {
                        let formData = new FormData();
                        imageSrc && image && formData.append('image', image);
                        formData.append('name_ar', values.name_ar);
                        formData.append('name_en', values.name_en);
                        VendorApi.updatePackageCategory(selectedVendorType._id, formData).then(res => {
                            setVendorTypes(res.data.data);
                            resetForm();
                            setImage(null);
                            setImageSrc(null);
                            toast.success("Package Category Updated Successfully")
                        })
                    } else {
                        toast.error("Please select image")
                    }
                }
            }
            }
            enableReinitialize={true}
        >
            <div className="modal fade" id="addVendorType" tabindex="-1" aria-labelledby="addVendorTypeLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="icon-close"></span>
                            </button>
                            <h4 className="text-center">{selectedVendorType?.name_en ? "Update" : "Add"} Package Category</h4>
                            <Form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <TextInput type="text" name="name_en" placeholder="Name ( In English )" />
                                        </div>
                                        <div className="form-group">
                                            <TextInput type="text" name="name_ar" placeholder="Name ( In Arabic )" />
                                        </div>
                                        {selectedVendorType?.image && (
                                            <>
                                                <div className="col-md-12" style={{ marginBottom: "1.5rem" }}>
                                                    <img className="img-fluid" style={{ width: "100%" }} src={selectedVendorType?.image} alt="hospital" />
                                                </div>
                                            </>
                                        )}
                                        <div className="col-md-12">
                                            <ImageUpload
                                                handleImageSelect={handleImageSelect}
                                                imageSrc={imageSrc}
                                                setImageSrc={setImageSrc}
                                                style={{
                                                    width: '100%',
                                                    height: '10rem',
                                                    background: '#417EBF',
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexDirection: 'column',
                                                    marginTop: "0",
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center mb-0 mt-3">
                                    <button type="submit" className="btn btn-primary">{selectedVendorType?.name_ar ? "Update" : "Save"}</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

export default AddVendorType
