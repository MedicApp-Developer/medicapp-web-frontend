import React, { useRef } from 'react'
import { href } from '../../../../constants/extra';
import ImageUploading from "react-images-uploading"
import { toast } from 'react-toastify';
import CAMERA_IMAGE from '../../../../assets/images/camera.png';
import ImageCrop from './ImageCrop';


function ProfilePicture({ data, updatePicture, removePicture, DEFAULTIMAGE }) {

	const [images, setImages] = React.useState([])
	const [croppedImage, setCroppedImage] = React.useState()
	const [imageUrl, setImageUrl] = React.useState()
	const imageCropRef = useRef()
	const maxNumber = 1

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex)
		setImages(imageList)
		imageCropRef.current.click()
	}

	const uploadProfilePic = () => {
		if (croppedImage) {
			let formData = new FormData()
			formData.append('image', croppedImage)
			console.log('IDDD', data._id);
			updatePicture(data._id, formData)
		}
	}

	// const onChange = (imageList, addUpdateIndex) => {
	//     // data for submit
	//     console.log(imageList, addUpdateIndex)
	//     setImages(imageList)
	// }

	// const uploadProfilePic = () => {
	//     if (images?.length > 0) {
	//         let formData = new FormData()
	//         formData.append('image', images[0].file)
	//         updatePicture(data._id, formData)
	//     }
	// }

	const removeImage = () => {
		removePicture(data._id)
		setImages([])
	}

	const croppedImageHandler = (file, url) => {
		imageCropRef.current.click()
		if (file && url) {
			setCroppedImage(file)
			setImageUrl(url)
		}
	}


	return (
		<div className="col-md-3 col-lg-3 col-xl-2">
			<div class="col-md-1 text-right" style={{ visibility: 'hidden' }}>
				<a ref={imageCropRef} href={href} data-toggle="modal" data-target="#gellryImageCropp" class="btn btn-primary px-3"></a>
			</div>
			<div class="col-md-4">
				<ImageUploading
					value={images}
					onChange={onChange}
					maxNumber={maxNumber}
					dataURLKey="data_url"
					acceptType={["jpg", "jpeg"]}
					maxFileSize={500000}
					onError={(err, list) => {
						if (err.maxFileSize === true) {
							toast.error('Size should be less than or equal to 500 KB')
						}
					}}
				>
					{({
						imageList,
						onImageUpload,
						onImageUpdate,
						dragProps,
					}) => (
						// write your building UI
						<>
							<div className='imageBox' style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: "pointer" }}>
								<div style={{
									width: '200px', height: '200px', position: 'absolute', backgroundColor: '#fff', borderRadius: '10px', opacity: 0.4, zIndex: 99999,
									justifyContent: 'center', alignItems: 'center',
									display: 'flex'
								}}
									onClick={imageUrl ? onImageUpdate.bind(this, 0) : onImageUpload}>
									<img style={{ width: '55px', height: '32px', opacity: 1, color: '#fff' }} class="avatar-lg mr-0" src={CAMERA_IMAGE} alt="camera" />
								</div>
								{
									<img
										src={imageUrl ? imageUrl : data?.image ? data?.image : DEFAULTIMAGE}
										alt="doctor"
										style={{ width: '200px', height: '200px', borderRadius: '10px', objectFit: 'cover', }} //border: '1px solid #D3D3D3'
										// onClick={imageList[0]?.data_url ? onImageUpdate.bind(this, 0) : onImageUpload}
										{...dragProps}
									/>
								}
							</div>
							<hr style={{ visibility: 'hidden' }} />
							<div >
								<a href="" onClick={(e) => { e.preventDefault(); removeImage() }}>Remove</a>
								<a href="" style={{ pointerEvents: imageList.length < 1 && 'none', marginLeft: "15px", border: '1px solid dodgerblue', padding: '5px', fontWeight: 'bold' }} onClick={(e) => { e.preventDefault(); uploadProfilePic() }}>Upload</a>
							</div>
						</>
					)}
				</ImageUploading>
				{/* <img class="img-fluid" src={DOCTOR_SHIFTING_IN_FRONT} alt="doctor" /> */}
				<ImageCrop selectedFile={images[0]} croppedImageFile={croppedImageHandler} />
			</div>
		</div>
	)
}

export default ProfilePicture