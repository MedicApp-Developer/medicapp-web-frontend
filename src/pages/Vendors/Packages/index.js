import React, { useContext, useEffect, useState } from 'react'
import { href } from '../../../constants/extra'
import DashboardLayout from '../../../layout/DashboardLayout'
import { getPackages, deletePackage } from '../../../store/actions/packageActions'
import { connect } from 'react-redux'
import AddPackage from './components/AddPackage'
import { BUY_SOME_GET_SOME } from '../../../constants/package'
import { RootContext } from '../../../contextApi'
import VendorApi from '../../../api/Vendor'


function Packages({ getPackages, packages, deletePackage }) {
	const { packages: allPackages } = packages && packages
	const [selectedPackage, setSelectedPackage] = useState(null);
	const [categories, setCategories] = useState([]);
	const { user } = useContext(RootContext);

	useEffect(() => {
		if (allPackages.length === 0) {
			getPackages(user.referenceId);
		}
		if (categories.length === 0) {
			VendorApi.getAllPackageCategories().then(res => {
				setCategories(res.data.data);
			})
		}
	}, [getPackages])

	const deletePackageHandler = (pack) => {
		deletePackage(pack._id)
	}

	return (
		<div>
			<DashboardLayout>
				<div className="row align-items-center add-list">
					<div className="col-6">
						<h4>Vendor Packages</h4>
					</div>
					<div className="col-6 text-right">
						<a href={href} onClick={() => { setSelectedPackage(null) }} data-toggle="modal" data-target="#addPackage" className="btn btn-primary px-3">+ ADD PACKAGE</a>
					</div>
				</div>
				<div className="row list-block">
					{allPackages?.map((pack, key) => (
						<div key={key} className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
							<div className="card">
								<div className="card-body">
									<div className="media">
										<div className="media-body">
											<h5 className="mt-0">{pack?.type === BUY_SOME_GET_SOME ? `Buy: ${pack.buyQuantity} - Get: ${pack.getQuantity}` : `${pack.off} % Off`}</h5>
											<p className="mt-0">Category: {pack?.category_id?.name_en}</p>
											<p className="mt-0">Points: {pack?.points}</p>
										</div>
									</div>
								</div>
								<div className="dropdown">
									<a href={href} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span className="icon-dots"></span>
									</a>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a className="dropdown-item delete-item" href={href} onClick={(e) => { e.preventDefault(); deletePackageHandler(pack) }}>Delete</a>
										<a className="dropdown-item delete-item" style={{ backgroundColor: "#417EBF" }} href={href} onClick={(e) => { e.preventDefault(); setSelectedPackage(pack) }} data-toggle="modal" data-target="#addPackage">Update</a>
									</div>
								</div>
							</div>
						</div>
					))}
					{allPackages?.length === 0 && (
						<div className="row align-items-center add-list">
							<div className="col-12 ml-3">
								<p>No Packages Yet.</p>
							</div>
						</div>
					)}
				</div>
				{/* Add Doctor Modal */}
				<AddPackage selectedPackage={selectedPackage} categories={categories} />
				{/* Set Doctor Schedule */}
			</DashboardLayout>
		</div>
	)
}

const mapStateToProps = (state) => ({
	packages: state.packages
})

const mapDispatchToProps = {
	getPackages,
	deletePackage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Packages)
