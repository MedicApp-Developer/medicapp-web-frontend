import ImageUpload from 'image-upload-react';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import VendorApi from '../../../../api/Vendor';
import { href } from '../../../../constants/extra';
import { RootContext } from '../../../../contextApi/index'

function Images({ vendor, imageDeleted, imageAdded }) {
	const { _id } = vendor;
	const [imageSrc, setImageSrc] = useState(null);
	const [image, setImage] = useState(null);
	const [vendorImages, setVendorImages] = useState(vendor.images);
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
				setVendorImages([...vendorImages, res.data.data.url])
				imageAdded(res.data.data.url)
				setImage(null);
				setImageSrc(null);
			})
		}
	}

	const deleteImage = (url) => {
		const imagePublicId = url.split('\\').pop().split('/').pop().split('.')[0];
		VendorApi.deleteGalleryImage(_id, imagePublicId).then(res => {
			console.log(res);
			toast.success("Vandor gallery image deleted");
			const images = vendorImages
			const updatedImages = images.filter(item => item != url)
			setVendorImages(updatedImages)
			imageDeleted(url)
		}).catch(err => {
			toast.error("Failed to delete image");
			console.log(err);
		});
	}

	return (
		<>
			<div className="row mt-2">
				{vendorImages?.length > 0 && vendorImages?.map(img => (
					<div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 justify-content-center">
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
		</>
	)
}

export default Images