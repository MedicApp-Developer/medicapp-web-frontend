import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react'
import RewardsApi from '../../../api/Rewards';
import VendorApi from '../../../api/Vendor';
import { href } from '../../../constants/extra';
import { BUY_SOME_GET_SOME } from '../../../constants/package';
import { PENDING, TAKEN } from '../../../constants/rewards';
import { RootContext } from '../../../contextApi';
import DashboardLayout from '../../../layout/DashboardLayout'

function PromoCodes() {
	const [promoCodes, setPromoCodes] = useState([]);
	// const [tabSelected, setTabSelected] = useState("Pending")
	const { user } = useContext(RootContext);

	useEffect(() => {
		VendorApi.getVendorPackage(user.referenceId).then(res => {
			setPromoCodes(res.data.data);
		});
	}, []);

	// const approvePackage = (id) => {
	// 	RewardsApi.approvePackage(id).then(res => {
	// 		const updatedPcs = JSON.parse(JSON.stringify(promoCodes));
	// 		updatedPcs.map(pc => {
	// 			if (pc._id === id) {
	// 				pc.status = TAKEN;
	// 			}
	// 		})
	// 		setPromoCodes(updatedPcs)
	// 	})
	// }

	return (
		<DashboardLayout>
			<div className="row align-items-center add-list">
				<div className="col-12">
					<h4>Promo Codes</h4>
					{/* <div className="row nav-tab-link">
						<div className="col-md-12">
							<ul className="nav justify-content-center">
								<li className="nav-item">
									<a className={classNames('nav-link', { 'active': tabSelected === "Pending" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Pending") }}>Pending</a>
								</li>
								<li className="nav-item">
									<a className={classNames('nav-link', { 'active': tabSelected === "Taken" })} href={href} onClick={(e) => { e.preventDefault(); setTabSelected("Taken") }}>Taken</a>
								</li>
							</ul>
						</div>
					</div> */}
					<div style={{ textAlign: 'center', marginTop: "30px" }}>
						{promoCodes?.filter(pc => pc.status === PENDING).length > 0 ? (
							<table style={{ border: '1px solid gray', padding: '7px', width: '100%' }}>
								<thead style={{ border: '1px solid gray', padding: '7px' }}>
									<tr style={{ border: '1px solid gray', padding: '7px' }}>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Patient Name</td>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Package</td>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Promo Code</td>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Points</td>
										{/* <td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Actions</td> */}
									</tr>
								</thead>
								<tbody style={{ border: '1px solid gray', padding: '7px' }}>
									{promoCodes?.filter(pc => pc.status === PENDING).map(promoCode => (
										<tr key={promoCode._id} style={{ border: '1px solid gray', padding: '7px' }}>
											<td style={{ border: '1px solid gray', padding: '7px' }}>{promoCode?.patientId?.firstName + " " + promoCode?.patientId?.lastName}</td>
											<td style={{ border: '1px solid gray', padding: '7px' }}>
												{promoCode?.packageId?.type === BUY_SOME_GET_SOME ? `Buy: ${promoCode?.packageId?.buyQuantity} - Get: ${promoCode?.packageId?.getQuantity}` : `${promoCode?.packageId?.off} % Off`}
											</td>
											<td style={{ border: '1px solid gray', padding: '7px' }}>{promoCode?.voucherCode}</td>
											<td style={{ border: '1px solid gray', padding: '7px' }}>{promoCode?.packageId?.points}</td>
											{/* <td style={{ border: '1px solid gray', padding: '7px' }}>
											<button className="btn btn-success" onClick={approvePackage.bind(this, promoCode._id)}>Accept</button>
										</td> */}
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p>No promo codes yet</p>
						)}
					</div>
				</div>
			</div>

		</DashboardLayout >
	)
}

export default PromoCodes