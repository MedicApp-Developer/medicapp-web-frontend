import React, { useContext, useEffect, useState } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import PLACEHOLDER_DOCTOR_IMAGE from '../../../assets/images/doctor_placeholder.png'
import VendorApi from '../../../api/Vendor';
import { toast } from 'react-toastify';
import AddVendorType from './components/AddVendorType';

function PackageCategories() {
	const [vendorTypes, setVendorTypes] = useState([]);
	const [selectedVendorType, setSelectedVendorType] = useState(null);

	useEffect(() => {
		VendorApi.getAllPackageCategories().then(res => {
			setVendorTypes(res.data.data);
		})
	}, []);

	const deleteTypeHandle = (type) => {
		VendorApi.deletePackageType(type._id).then(res => {
			const vendorTypesTemp = JSON.parse(JSON.stringify(vendorTypes));
			setVendorTypes(vendorTypesTemp.filter(vType => vType._id !== type._id));
			toast.success("Vendor Type Deleted Successfully");
		});
	}

	return (
		<div>
			<DashboardLayout>
				<div className="row align-items-center add-list">
					<div className="col-6">
						<h4>Package Categories</h4>
					</div>
					<div className="col-6 text-right">
						<a href={href} data-toggle="modal" data-target="#addVendorType" onClick={() => setSelectedVendorType(null)} className="btn btn-primary px-3">+ ADD PACKAGE CATEGORY</a>
					</div>
				</div>
				<div className="row list-block">
					{vendorTypes?.length > 0 ? vendorTypes?.map((type, key) => (
						<div key={key} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
							<div className="card">
								<div className="card-body">
									<div className="media">
										<img className="pointer" src={type?.image ? type?.image : PLACEHOLDER_DOCTOR_IMAGE} alt="doctor" />
										<div className="media-body">
											<h5 className="mt-0">{type.name_en}</h5>
											<p className="mt-0">{type.name_ar}</p>
										</div>
									</div>
								</div>
								<div className="dropdown">
									<a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span className="icon-dots"></span>
									</a>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteTypeHandle(type) }}>Delete</a>
										<a className="dropdown-item delete-item" style={{ backgroundColor: "#417EBF" }} href={href} onClick={(e) => { e.preventDefault(); setSelectedVendorType(type) }} data-toggle="modal" data-target="#addVendorType">Update</a>
									</div>
								</div>
							</div>
						</div>
					)) : (
						<p>No package category added yet</p>
					)}
				</div>
				{/* Add Doctor Modal */}
				<AddVendorType selectedVendorType={selectedVendorType} vendorTypes={vendorTypes} setVendorTypes={setVendorTypes} />
			</DashboardLayout>
		</div>
	)
}

export default PackageCategories
