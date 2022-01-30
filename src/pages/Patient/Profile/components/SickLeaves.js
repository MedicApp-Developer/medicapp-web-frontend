import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PatientApi from '../../../../api/Patients'
import { RootContext } from '../../../../contextApi'
import { saveAs } from 'file-saver'

function SickLeaves() {
	const [sickLeaves, setSickLeaves] = useState([])
	const { user } = useContext(RootContext)

	useEffect(() => {
		PatientApi.getPatientSickLeaves(user._id).then(res => {
			setSickLeaves(res.data.data)
		}).catch(err => {
			toast.error("Problem while getting sick leaves")
		})
	}, [])

	const downloadSickLeave = (leave) => {
		PatientApi.downloadSickLeave(leave._id).then(res => {
			const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
			saveAs(pdfBlob, 'Sick Leave Approval.pdf')
		})
	}

	return <section class="user-dashboard">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 col-xl-10 pb-5">
					<h4 class="mb-4">Sick Leaves</h4>
					{sickLeaves?.map(leave => (
						<div class="card lab-result">
							<div class="card-body py-md-2">
								<div class="row align-items-center">
									<div class="col-md-12 col-lg-10">
										<ul>
											<li>
												<small class="d-block">Doctor</small>
												{leave?.doctorId?.firstName + " " + leave?.doctorId?.lastName}
											</li>
											<li>
												<small class="d-block">From</small>
												{moment(leave?.from).format("LL")}
											</li>
											<li>
												<small class="d-block">To</small>
												{moment(leave?.to).format("LL")}
											</li>
											<li>
												<small class="d-block">Issue Date</small>
												{moment(leave?.issuedDate).format("YYYY/MM/DD")}
											</li>
											<li>
											</li>
										</ul>

									</div>
									<a style={{ float: 'right' }} href="javascript:void(0)" data-toggle="modal" data-target="#qrCode" class="btn btn-primary px-3 py-2 mr-3" onClick={downloadSickLeave.bind(this, leave)}>Download</a>

								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
}

export default SickLeaves
