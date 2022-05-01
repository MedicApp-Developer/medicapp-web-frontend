import React from 'react'
import HOSPITAL_IMAGE from '../../../../assets/images/resgister-hospital.png';
import { href } from '../../../../constants/extra';
import ImageUploading from "react-images-uploading"
import HospitalApi from '../../../../api/Hospital'
import { toast } from 'react-toastify'

function ProfilePicture({ hospital }) {

	const [images, setImages] = React.useState([])
	const maxNumber = 1

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex)
		setImages(imageList)
	}

	const uploadProfilePic = () => {
		if (images.length > 0) {
			let formData = new FormData()
			formData.append('image', images[0].file)
			HospitalApi.uploadProfilePic(hospital?._id, formData).then(res => {
				toast.success("Profile picture uploaded")
			}).catch(err => {
				toast.error("Problem while uploading the picture")
			})
		}
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
							<img
								className="img-fluid"
								src={imageList[0]?.data_url ? imageList[0]?.data_url : hospital?.image ?? HOSPITAL_IMAGE}
								alt="doctor"
								style={{ maxWidth: '200px', maxHeight: '230px' }}
								onClick={imageList[0]?.data_url ? onImageUpdate.bind(this, 0) : onImageUpload}
								{...dragProps}
							/>
							<hr style={{ visibility: 'hidden' }} />
							<div>
								<a href="" style={{ pointerEvents: imageList.length < 1 && 'none' }} onClick={(e) => { e.preventDefault(); onImageRemoveAll() }}>Remove</a>
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