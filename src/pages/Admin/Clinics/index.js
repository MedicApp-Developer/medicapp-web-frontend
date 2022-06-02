import React, { useEffect } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout';
import RIGHT_ARROW from '../../../assets/images/right-arrow.png'
import { useState } from 'react';
import HospitalApi from '../../../api/Hospital';
import { Link } from 'react-router-dom';

function Clinics() {
	const [hospitals, setHospitals] = useState([]);

	useEffect(() => {
		HospitalApi.getAllHospitals().then(res => {
			setHospitals(res.data.data);
		})
	}, []);

	return (
		<DashboardLayout>
			<section class="user-dashboard">
				<div class="row justify-content-center">
					<div class="col-md-12 col-xl-10 pb-5">
						<h4 class="mb-4">Clinics</h4>
						{hospitals?.map((hospital, index) => (
							<div class="card lab-result mb-2" style={{ border: "1px solid lightgray", borderRadius: '1rem' }}>
								<div class="card-body py-2">
									<div class="row align-items-center">
										<div class="col-md-12 col-lg-8">
											<ul>
												<li>
													{index + 1}
												</li>
												<li>
													{hospital?.name}
												</li>
												<li>
													{hospital?.address}
												</li>
											</ul>
										</div>
										<div class="col-md-12 col-lg-4 text-center text-md-right mt-3 mt-md-0">
											<Link to={`clinic/${hospital._id}`}>
												<img src={RIGHT_ARROW} style={{ width: "2rem", height: '2rem' }} />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</DashboardLayout>
	)
}

export default Clinics