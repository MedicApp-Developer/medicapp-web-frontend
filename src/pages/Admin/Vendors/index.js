import React, { useEffect } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import { getVendors, deleteVendor } from '../../../store/actions/vendorActions'
import { connect } from 'react-redux'
import CATEGORY_PLACEHOLDER_IMAGE from '../../../assets/images/cateogries_placeholder.png'
import { useState } from 'react'
import AddVendor from './components/AddVendor'


function Vendors({ getVendors, vendors, deleteVendor }) {
	const { vendors: allVendors } = vendors && vendors
	const [selectedVendor, setSelectedVendor] = useState(null);

	useEffect(() => {
		getVendors()
	}, [getVendors])

	const deleteVendorHandler = (vendor) => {
		deleteVendor(vendor._id)
	}

	return (
		<>
			<DashboardLayout>
				<div className="row align-items-center add-list">
					<div className="col-6">
						<h4>Vendors</h4>
					</div>
					<div className="col-6 text-right">
						<a href={href} onClick={() => { setSelectedVendor(null) }} data-toggle="modal" data-target="#addVendor" className="btn btn-primary px-3">+ ADD VENDOR</a>
					</div>
				</div>
				<div className="row list-block patient-list">
					{allVendors?.map((ven, key) => (
						<div key={key} className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
							<div className="card">
								{ven?.image !== "" && (
									<img src={ven?.image} style={{ height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", objectFit: "cover", padding: "0px" }} alt="package_image" />
								)}
								<div className="card-body">
									<div className="media">
										<h3>{ven?.firstName + " " + ven?.lastName}</h3>
										<div className="media-body">
											<h5 className="mt-0">{ven.name}</h5>
											<p className="mt-0">Email: {ven.email}</p>
											<p className="mt-0">Branch: {ven?.branch_name}</p>
										</div>
									</div>
								</div>
								<div className="dropdown">
									<a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span className="icon-dots"></span>
									</a>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deleteVendorHandler(ven) }}>Delete</a>
										<a className="dropdown-item delete-item" style={{ backgroundColor: "#417EBF" }} href={href} onClick={(e) => { e.preventDefault(); setSelectedVendor(ven) }} data-toggle="modal" data-target="#addVendor">Update</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* Add Doctor Modal */}
				<AddVendor selectedVendor={selectedVendor} />
				{/* Set Doctor Schedule */}
			</DashboardLayout>
		</>
	)
}

const mapStateToProps = (state) => ({
	vendors: state.vendors
})

const mapDispatchToProps = {
	getVendors,
	deleteVendor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors)
