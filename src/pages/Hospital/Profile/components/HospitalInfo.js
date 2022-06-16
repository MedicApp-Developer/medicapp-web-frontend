import React, { useState } from 'react'
import ImageUpload from 'image-upload-react';
import 'image-upload-react/dist/index.css'
import { href } from '../../../../constants/extra';
import HospitalApi from '../../../../api/Hospital';
import { toast } from 'react-toastify';

function HospitalInfo({ hospital }) {

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

    const deleteImage = (id) => {

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
                    <div className="col-md-3" >
                        <img className="banner-picture" src={img} alt="hospital" />
                        <button className="btn btn-danger mt-2" onClick={deleteImage.bind(this, img)}>Delete</button>
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
