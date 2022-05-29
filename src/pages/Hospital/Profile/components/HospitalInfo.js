import React, { useState } from 'react'
import HospitalImage from '../../../../assets/images/hospital.png';
import ImageUpload from 'image-upload-react';
import 'image-upload-react/dist/index.css'
import { href } from '../../../../constants/extra';
import HospitalApi from '../../../../api/Hospital';
import { toast } from 'react-toastify';
import TRASH_IMG from '../../../../assets/images/trash-bin.png';

function HospitalInfo({ hospital, setHospital }) {

    const { name, address, openingTime, closingTime, about, _id, images } = hospital.hospital;
    const [imageSrc, setImageSrc] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageSelect = (e) => {
        setImage(e.target.files[0]);
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    const uploadImage = () => {
        if (imageSrc && image) {
            let formData = new FormData();
            formData.append('image', image);
            HospitalApi.uploadHospitalImage(_id, formData).then(res => {
                toast.success("Image Uploaded Successfully");
                setImage(null);
                setImageSrc(null);
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            })
        }
    }

    const deleteImage = (url) => {
        const data = {
            url,
            hospitalId: _id
        }
        HospitalApi.deleteGalleryImage(data).then(res => {
            console.log("---> updatedhospital", res.data.data);
            setHospital({...hospital, hospital: res.data.data})
        });
    }

    return (
        <>
            <div className="row align-items-start add-list hospital-info">
                <div className="col-6">
                    <h4>{name}</h4>
                    <p className="rating mb-1">
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </p>
                    <h6> {(openingTime && closingTime) ? (openingTime + " - " + closingTime) : "Open Now"}  </h6>
                </div>
                <div className="col-6 text-right">
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#updateHospital" className="btn btn-primary px-4">Update</a>
                </div>
            </div>
            <div className="row mt-2">
                {images?.length > 0 && images?.map(img => (
                    <div className="col-md-3">
                        <img className="img-fluid" src={img} alt="hospital" />
                        <div style={{ textAlign: "center", marginTop: "10px" }} onClick={deleteImage.bind(this, img)}><img style={{ width: "2.2rem" }} src={TRASH_IMG} alt="Delete" /></div>
                    </div>
                ))}
                <div className="col-md-3">
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
                    {imageSrc && image && (
                        <span onClick={(e) => { e.preventDefault(); uploadImage(); }}>
                            <a href={href} style={{ width: '100%', marginTop: '10px' }} className="btn btn-primary px-4">Upload</a>
                        </span>
                    )}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-8" style={{ marginTop: '20px' }} >
                    <h4>About the Hospital</h4>
                    <p>{about}</p>
                </div>
            </div>
        </>
    )
}

export default HospitalInfo
