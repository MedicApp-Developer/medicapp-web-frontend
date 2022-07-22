import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PatientApi from '../../../../api/Patients'
import { RootContext } from '../../../../contextApi'
import { saveAs } from 'file-saver'
import { useTranslation } from "react-i18next"

function SickLeaves() {
	const [sickLeaves, setSickLeaves] = useState([])
	const { user } = useContext(RootContext)
	const { t } = useTranslation()

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
					<h4 class="mb-4">{t("sick_leaves")}</h4>

					{sickLeaves?.map(leave => (
						<div class="card lab-result">
							<div class="card-body py-md-2">
								<div class="row align-items-center">
									<div class="col-md-12 col-lg-10">
										<ul>
											<li>
												<small class="d-block">{t("doctor")}</small>
												{leave?.doctorId?.firstName + " " + leave?.doctorId?.lastName}
											</li>
											<li>
												<small class="d-block">{t("from")}</small>
												{moment(leave?.from).format("LL")}
											</li>
											<li>
												<small class="d-block">{t("to")}</small>
												{moment(leave?.to).format("LL")}
											</li>
											<li>
												<small class="d-block">{t("issue_date")}</small>
												{moment(leave?.issuedDate).format("YYYY/MM/DD")}
											</li>
											<li>
											</li>
										</ul>

									</div>
									<a style={{ float: 'right' }} href="javascript:void(0)" data-toggle="modal" data-target="#qrCode" class="btn btn-primary px-3 py-2 mr-3" onClick={downloadSickLeave.bind(this, leave)}>{t("download")}</a>

								</div>
							</div>
						</div>
					))}
					{sickLeaves === undefined || sickLeaves?.length === 0 && (
						<div style={{ backgroundColor: "lightgray", padding: '1rem', borderRadius: '5px' }}>
							{t("no_sick_leaves_available_yet")} !
						</div>
					)}
				</div>
			</div>
		</div>
	</section>
}

export default SickLeaves
