import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import CodesApi from '../../../api/Codes'
import { RootContext } from '../../../contextApi';
import moment from 'moment'

function PatientPromoCode() {
	const [hospitalCodes, setHospitalCodes] = useState([]);
	const [search, setSearch] = useState("");
	const { user } = useContext(RootContext);
	const [searchedHospitalCodes, setSearchedHospitalCodes] = useState([]);

	useEffect(() => {
		CodesApi.getAllHospitalCodes(user.referenceId).then(res => {
			setHospitalCodes(res.data.data);
			setSearchedHospitalCodes(res.data.data);
		});
	}, []);

	const handleSearch = (e) => {
		const searchText = e.target.value;
		setSearch(searchText);
		if (searchText === "") {
			setSearchedHospitalCodes(hospitalCodes);
		} else {
			setSearchedHospitalCodes(hospitalCodes.filter(code => code.patientId.emiratesId.includes(searchText)))
		}
	}

	return (
		<DashboardLayout>
			<div className="row align-items-center add-list">
				<div className="col-12">
					<h4>Patient Promo Code</h4>
					<br />

					<div style={{ textAlign: 'center' }}>
						<div className="col-md-12">
							<div className="form-group">
								<input type="text" className="form-control" name="search" value={search} onChange={handleSearch} placeholder="Search Patient with Emirates ID" />
							</div>
						</div>
						<table style={{ border: '1px solid gray', padding: '7px', width: '100%' }}>
							<thead style={{ border: '1px solid gray', padding: '7px' }}>
								<tr style={{ border: '1px solid gray', padding: '7px' }}>
									<td style={{ fontSize: "1.2rem", border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Patient Name</td>
									<td style={{ fontSize: "1.2rem", border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Appointment Date</td>
									<td style={{ fontSize: "1.2rem", border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Patient Emirates ID</td>
									<td style={{ fontSize: "1.2rem", border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Doctor</td>
									<td style={{ fontSize: "1.2rem", border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Code</td>
									<td style={{ fontSize: "1.2rem", border: '1px solid gray', padding: '7px', fontWeight: 'bold' }}>Status</td>
								</tr>
							</thead>
							<tbody style={{ border: '1px solid gray', padding: '7px' }}>
								{searchedHospitalCodes?.map(code => (
									<tr key={code._id} style={{ border: '1px solid gray', padding: '7px' }}>
										<td style={{ border: '1px solid gray', padding: '7px' }}>{code?.patientId?.firstName + " " + code?.patientId?.lastName}</td>
										<td style={{ border: '1px solid gray', padding: '7px' }}>{`${moment(code.slotId.from).format("DD-MM-YY")} - ( ${moment(code.slotId.from).format('HH.mm')} - ${moment(code.slotId.to).format('HH.mm')} )`}</td>
										<td style={{ border: '1px solid gray', padding: '7px' }}>{code?.patientId?.emiratesId}</td>
										<td style={{ border: '1px solid gray', padding: '7px' }}>{code.slotId?.doctorId?.firstName + " " + code.slotId?.doctorId?.lastName}</td>
										<td style={{ border: '1px solid gray', padding: '7px' }}>{code?.code}</td>
										<td style={{ border: '1px solid gray', padding: '7px', color: "white" }} className={code?.status === "TAKEN" ? "bg-success" : "bg-danger"}>{code?.status}</td>
									</tr>
								))}
							</tbody>
						</table>

						<br />

						{(search === "" && hospitalCodes.length === 0) && (
							<p>No Promo Codes</p>
						)}

						{(search !== "" && searchedHospitalCodes.length === 0) && (
							<p>Search Not Found</p>
						)}

					</div>
				</div>
			</div>
		</DashboardLayout>
	)
}

export default PatientPromoCode