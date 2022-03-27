import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import COPY_ICON from '../../../assets/images/copy.png'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { saveAs } from 'file-saver'
import moment from 'moment';
import AppointmentApi from '../../../api/Appointment';
import HospitalApi from '../../../api/Hospital';

function PCRAppointment() {

	const [appointments, setAppointments] = useState([]);
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);

	const downloadReport = () => {

		if (!fromDate || !toDate) {
			toast.error("Select Start date and End date first");
			return false;
		}

		const data = {
			fromDate,
			toDate
		}

		HospitalApi.getMedicappPCRFinanceReport(data).then(res => {
			const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
			saveAs(pdfBlob, 'Appointment Slip.pdf')
		})
		HospitalApi.getMedicappPCRFinanceStatistics(data).then(res => {
			setAppointments(res.data.data);
		})
	}

	const copyToClipboard = (text) => {
		const elem = document.createElement('textarea');
		elem.value = text;
		document.body.appendChild(elem);
		elem.select();
		document.execCommand('copy');
		document.body.removeChild(elem);
		toast.success("Copied to clipboard")
	}

	const downloadFinanceData = () => {
		if (!fromDate || !toDate) {
			toast.error("Select Start date and End date first");
			return false;
		}

		const data = {
			fromDate,
			toDate
		}

		HospitalApi.getMedicappPCRFinanceStatistics(data).then(res => {
			setAppointments(res.data.data);
		})
	}

	return (
		<DashboardLayout>
			<form onSubmit={() => { }} encType="multipart/form-data" autocomplete="off">
				<div className="row">
					<div className="col-sm-6">
						<label for="name">Laboratory</label>
						<label class="sr-only" for="inlineFormInputGroup">Laboratory</label>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<div class="input-group-text" style={{ cursor: "pointer" }} onClick={(e) => { copyToClipboard("Text To Be Copied") }}>
									<img src={COPY_ICON} style={{ height: '1.1rem', width: '1.1rem' }} />
								</div>
							</div>
							<input id="name" type="text" class="form-control" id="inlineFormInputGroup" placeholder="Laboratory" />
						</div>
					</div>
					<div className="col-sm-6">
						<label class="sr-only" for="inlineFormInputGroup">From</label>
						<div className="form-group">
							<label for="from">From</label>
							<input id="from" type="date" class={"form-control"} placeholder="From" value={fromDate} onChange={(e) => { setFromDate(e.target.value) }} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<label for="name">Trade License #</label>
						<label class="sr-only" for="inlineFormInputGroup">Trade License #</label>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<div class="input-group-text" style={{ cursor: "pointer" }} onClick={(e) => { copyToClipboard("Text To Be Copied") }}>
									<img src={COPY_ICON} style={{ height: '1.1rem', width: '1.1rem' }} />
								</div>
							</div>
							<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Trade License #" />
						</div>
					</div>
					<div className="col-sm-6">
						<label class="sr-only" for="inlineFormInputGroup">To</label>
						<div className="form-group">
							<label for="to">To</label>
							<input id="to" type="date" class={"form-control"} placeholder="To" value={toDate} onChange={(e) => { setToDate(e.target.value) }} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<label for="name">Contact Info</label>
						<label class="sr-only" for="inlineFormInputGroup">Contact Info</label>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<div class="input-group-text" style={{ cursor: "pointer" }} onClick={(e) => { copyToClipboard("Text To Be Copied") }}>
									<img src={COPY_ICON} style={{ height: '1.1rem', width: '1.1rem' }} />
								</div>
							</div>
							<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Contact Info" />
						</div>
					</div>
					<div className="col-sm-6">
						<label class="sr-only" for="inlineFormInputGroup">Total Appointments</label>
						<div className="form-group">
							<label for="totalAppointments">Total PCR Appointments</label>
							<input id="totalAppointments" type="text" value={appointments?.filter(app => app.status === "BOOKED").length} class={"form-control"} placeholder="PCR Appointments" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<label for="name">Email Address</label>
						<label class="sr-only" for="inlineFormInputGroup">Email Address</label>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<div class="input-group-text" style={{ cursor: "pointer" }} onClick={(e) => { copyToClipboard("Text To Be Copied") }}>
									<img src={COPY_ICON} style={{ height: '1.1rem', width: '1.1rem' }} />
								</div>
							</div>
							<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Email" />
						</div>
					</div>
					<div className="col-sm-6">
						<label class="sr-only" for="inlineFormInputGroup">Total Amount</label>
						<div className="form-group">
							<label for="totalAppointments">Total Amount</label>
							<input id="totalAppointments" value={appointments?.filter(app => app.status === "BOOKED").length * 21} type="text" class={"form-control"} placeholder="To" />
						</div>
					</div>
					<div className="col-sm-6">
						<label for="name">Total Lab Fees</label>
						<label class="sr-only" for="inlineFormInputGroup">Total Lab Fees</label>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<div class="input-group-text" style={{ cursor: "pointer" }} onClick={(e) => { copyToClipboard("Text To Be Copied") }}>
									<img src={COPY_ICON} style={{ height: '1.1rem', width: '1.1rem' }} />
								</div>
							</div>
							<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Total Lab Fees" />
						</div>
					</div>
				</div>
				<div className="form-group text-center">
					<button type="button" className="btn btn-primary mt-2 ml-2" onClick={downloadReport}>Download Report</button>
					<button type="button" className="btn btn-primary mt-2 ml-2" onClick={downloadFinanceData}>Get Appointment Finance</button>
				</div>
			</form>
		</DashboardLayout>
	)
}

export default PCRAppointment