import ImageUpload from 'image-upload-react';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import VendorApi from '../../../../api/Vendor';
import { href } from '../../../../constants/extra';
import { RootContext } from '../../../../contextApi/index'

function Images({ vendor }) {
	const { _id, images } = vendor;
	const [imageSrc, setImageSrc] = useState(null);
	const [image, setImage] = useState(null);
	const { user } = useContext(RootContext);

	const handleImageSelect = (e) => {
		setImage(e.target.files[0]);
		setImageSrc(URL.createObjectURL(e.target.files[0]))
	}

	const uploadImage = () => {
		if (imageSrc && image) {
			let formData = new FormData();
			formData.append('image', image);
			VendorApi.uploadVendorImage(_id, formData).then(res => {
				toast.success("Image Uploaded Successfully");
				setImage(null);
				setImageSrc(null);
				setTimeout(() => {
					window.location.reload();
				}, 500);
			})
		}
	}

	return (
		<>
			<div className="row mt-2">
				{images?.length > 0 && images?.map(img => (
					<div className="col-md-3">
						<img className="img-fluid" src={img} alt="hospital" />
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
		</>
	)
}

export default Images