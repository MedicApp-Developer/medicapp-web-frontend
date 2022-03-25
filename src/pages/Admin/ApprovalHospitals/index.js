import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import HospitalApi from '../../../api/Hospital';
import DashboardLayout from '../../../layout/DashboardLayout'

function ApprovalHospitals() {
	const [hospitals, setHospitals] = useState([]);

	useEffect(() => {
		HospitalApi.getPendingHospitals().then(res => {
			setHospitals(res.data.data);
		})
	}, []);

	const approveHospital = (id) => {
		HospitalApi.approveHospital(id).then(res => {
			toast.success("Hospital Approved Successfully");
			const tempHospital = JSON.parse(JSON.stringify(hospitals));
			setHospitals(tempHospital.filter(hos => hos._id !== id));
		});
	}

	const downloadFile = async (id, e) => {
		e.preventDefault();
		const result = await HospitalApi.getTradeLicenseFile(id)
		console.log("result => ", result.data.data);
		if (result.data.data.tradeLicenseFile) {
			const newWindow = window.open(result.data.data.tradeLicenseFile, '_blank', 'noopener,noreferrer')
			if (newWindow) newWindow.opener = null
		} else {
			toast.error("Don't have Trade License File")
		}
	}

	return (
		<DashboardLayout>
			<div className="row align-items-center add-list">
				<div className="col-12">
					<h4>Hospital Approvals</h4>
					<br />
					<div style={{ textAlign: 'center' }}>
						{hospitals?.length > 0 ? (
							<table style={{ border: '1px solid gray', padding: '7px', width: '100%' }}>
								<thead style={{ border: '1px solid gray', padding: '7px' }}>
									<tr style={{ border: '1px solid gray', padding: '7px' }}>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Hospital Name</td>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Email</td>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Status</td>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Trade License File</td>
										<td style={{ border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Actions</td>
									</tr>
								</thead>
								<tbody style={{ border: '1px solid gray', padding: '7px' }}>
									{hospitals?.map(hospital => (
										<tr key={hospital._id} style={{ border: '1px solid gray', padding: '7px' }}>
											<td style={{ border: '1px solid gray', padding: '7px' }}>{hospital?.firstName + " " + hospital?.lastName}</td>
											<td style={{ border: '1px solid gray', padding: '7px' }}>{hospital?.email}</td>
											<td style={{ border: '1px solid gray', padding: '7px' }}>{hospital?.status}</td>
											<td style={{ border: '1px solid gray', padding: '7px' }}><a href={""} onClick={downloadFile.bind(this, hospital.referenceId)}>See Attachment</a></td>
											<td style={{ border: '1px solid gray', padding: '7px' }}>
												<button className="btn btn-success" onClick={approveHospital.bind(this, hospital._id)}>APPROVE</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p>No pending hospital approvals</p>
						)}

					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default ApprovalHospitals