import React, { useEffect } from 'react'
import { href } from '../../../../constants/extra';
import ImageUploading from "react-images-uploading"
import { toast } from 'react-toastify';
import CAMERA_IMAGE from '../../../../assets/images/camera.png';

function ProfilePicture({ data, updatePicture, removePicture, DEFAULTIMAGE }) {

	const [images, setImages] = React.useState([])
	const maxNumber = 1

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex)
		setImages(imageList)
	}

	const uploadProfilePic = () => {
		if (images?.length > 0) {
			let formData = new FormData()
			formData.append('image', images[0].file)
			updatePicture(data._id, formData).then(res => {
				toast.success("Profile picture uploaded")
			}).catch(err => {
				toast.error("Problem while uploading the picture")
			})
		}
	}
	const removeImage = () => {
		removePicture(data._id).then(res => {
			toast.success("Profile Picture Removed")
			setImages([])
			setTimeout(() => {
				window.location.reload()
			}, 2000)
		}).catch(err => {
			toast.error("Problem while uploading the picture")
		})

	}




	return (
		<div className="col-md-3 col-lg-3 col-xl-2">

			<div class="col-md-4">
				<ImageUploading
					multiple
					value={images}
					onChange={onChange}
					maxNumber={maxNumber}
					dataURLKey="data_url"
				>
					{({
						imageList,
						onImageUpload,
						onImageRemoveAll,
						onImageUpdate,
						onImageRemove,
						isDragging,
						dragProps
					}) => (
						// write your building UI
						<>
							<div className='imageBox' style={{ width: '200px', height: '200px', border: '1px solid #D3D3D3', borderRadius: '10px' }}>
								<div style={{
									width: '200px', height: '200px', position: 'absolute', backgroundColor: '#fff', opacity: 0.4, zIndex: 99999,
									justifyContent: 'center', alignItems: 'center',
									display: 'flex'
								}}
									onClick={imageList[0]?.data_url ? onImageUpdate.bind(this, 0) : onImageUpload}>
									<img style={{ width: '55px', height: '32px', opacity: 1, color: '#fff' }} class="avatar-lg mr-0" src={CAMERA_IMAGE} alt="camera" />
								</div>
								{
									(imageList[0]?.data_url || data?.image) &&
									<img
										src={imageList[0]?.data_url ? imageList[0]?.data_url : data?.image ?? DEFAULTIMAGE}
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
			</div>
		</div>
	)
}

export default ProfilePicture