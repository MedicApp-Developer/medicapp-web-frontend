import React, { useState } from 'react'
import ImageUpload from 'image-upload-react';
import 'image-upload-react/dist/index.css'
import { href } from '../../../../constants/extra';
import HospitalApi from '../../../../api/Hospital';
import { toast } from 'react-toastify';

function HospitalInfo({ hospital, imageDeleted, imageAdded }) {

    const { name, address, openingTime, closingTime, about, _id } = hospital.hospital;
    const [imageSrc, setImageSrc] = useState(null);
    const [image, setImage] = useState(null);
    const [hospitalImages, setHospitalImages] = useState(hospital.hospital.images);

    const handleImageSelect = (e) => {
        setImage(e.target.files[0]);
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    const uploadImage = () => {
        if (imageSrc && image) {
            let formData = new FormData();
            formData.append('image', image);
            HospitalApi.uploadHospitalImage(_id, formData).then(res => {
                console.log(res);
                toast.success("Image Uploaded Successfully");
                setHospitalImages([...hospitalImages, res.data.data.url])
                imageAdded(res.data.data.url)
                setImage(null);
                setImageSrc(null);
            })
        }
    }

    const deleteImage = (url) => {
        const imagePublicId = url.split('\\').pop().split('/').pop().split('.')[0];
        HospitalApi.deleteGalleryImage(_id, imagePublicId).then(res => {
            console.log(res);
            toast.success("Hospital gallery image deleted");
            const images = hospitalImages
            const updatedImages = images.filter(item => item != url)
            setHospitalImages(updatedImages)
            imageDeleted(url)
        }).catch(err => {
            toast.error("Failed to delete image");
            console.log(err);
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
                {hospitalImages?.length > 0 && hospitalImages?.map(img => (
                    <div className="col-md-3" >
                        <img className="banner-picture" style={{ marginBottom: "20px" }} src={img} alt="hospital" />
                        <button className="btn btn-danger mb-4 cursor-pointer" onClick={deleteImage.bind(this, img)}>Delete</button>
                    </div>
                ))}
                <div className="col-md-3">
                    <ImageUpload
                        handleImageSelect={handleImageSelect}
                        imageSrc={imageSrc}
                        setImageSrc={setImageSrc}
                        defaultDeleteIconColor={"#F44336"}
                        style={{
                            width: "250px",
                            height: "200px",
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
                            <a href={href} style={{ width: '250px', marginTop: '10px' }} className="btn btn-primary px-4">Upload</a>
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
