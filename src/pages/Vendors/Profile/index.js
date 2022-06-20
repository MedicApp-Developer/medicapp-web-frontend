import React, { useEffect, useState, useContext } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { href } from '../../../constants/extra'
import classNames from 'classnames'
import { RootContext } from '../../../contextApi/index'
import { toast } from 'react-toastify'
import VendorApi from '../../../api/Vendor'
import VendorAccount from './components/VendorAccount'
import Images from './components/Images'
import LocationMap from './components/LocationMap'

function VendorProfile() {

	const [tabSelected, setTabSelected] = useState("Account")
	const [vendor, setVendor] = useState(null)
	const { user } = useContext(RootContext)

	useEffect(() => {
		if (user) {
			VendorApi.getSingleVendor(user.referenceId).then(res => {
				setVendor(res.data.data)
			}).catch(err => {
				toast.error('Problem while fetching vendor profile')
			})
		}
	}, [user])

	const imageDeletedHandler = (url) => {
		console.log('Image Deleted', url);
		const images = vendor.images
		const updatedImages = images.filter(item => item != url)
		vendor.images = updatedImages
		console.log("Updated Images", vendor.images);
		setVendor(vendor)
	}

	const imageAddedHandler = (url) => {
		console.log('Image Added', url);
		const updatedImages = vendor.images
		updatedImages.push(url)
		vendor.images = updatedImages
		console.log(vendor);
		setVendor(vendor)
	}

	let returnedComponent = null

	if (tabSelected === "Account") {
		returnedComponent = <VendorAccount vendorId={user.referenceId} vendor={vendor} />
	} else if (tabSelected === "Images") {
		returnedComponent = <Images vendor={vendor} imageDeleted={imageDeletedHandler} imageAdded={imageAddedHandler} />
	} else if (tabSelected === "Location") {
		returnedComponent = <LocationMap vendorId={user.referenceId} lat={vendor?.location?.coordinates[0]} lng={vendor?.location?.coordinates[1]} />
	}

	return (
		<>
			<DashboardLayout>
				<div className="row nav-tab-link">
					<div className="col-md-12">
						<ul className="nav justify-content-center">
							<li className="nav-item">
								<a className={classNames('nav-link', { 'active': tabSelected === "Account" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Account") }}>Vendor Profile</a>
							</li>
							<li className="nav-item">
								<a className={classNames('nav-link', { 'active': tabSelected === "Images" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Images") }}>Images</a>
							</li>
							<li className="nav-item">
								<a className={classNames('nav-link', { 'active': tabSelected === "Location" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Location") }}>Location</a>
							</li>
						</ul>
					</div>
				</div>
				{returnedComponent}
			</DashboardLayout>
		</>
	)
}

export default VendorProfile
