import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useHistory } from 'react-router-dom'
import AppointmentApi from '../../../api/Appointment'

const localizer = momentLocalizer(moment)

function PCR() {
	const [slots, setSlots] = useState([])
	const [selectedDate, setSelectedDate] = useState(null)
	const history = useHistory();

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		AppointmentApi.getMedicappAppointments().then(res => {
			const appoints = [];

			res.data.data.forEach(perDate => {
				appoints.push({
					start: moment(perDate.from).format('YYYY-MM-DD hh:mm A'),
					end: moment(perDate.to).format('YYYY-MM-DD hh:mm A'),
					title: moment(perDate.from).format('hh:mm A') + " - " + moment(perDate.to).format('hh:mm A'),
					status: "BOOKED",
					_id: perDate._id
				})
			})

			setSlots(appoints);
		})
	}

	const eventStyleGetter = (event, start, end, status) => {
		var backgroundColor = '#' + event.hexColor
		var style = {
			backgroundColor: backgroundColor,
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white',
			border: '0px',
			display: 'block'
		}

		if ((event.status === "BOOKED" || event.status === "APPROVED") && moment(event.end).isSameOrBefore()) {
			style.backgroundColor = "#D22B2B"
			style.pointerEvents = 'none'
		}

		if (moment(event.end).isAfter() && (event.status === "BOOKED" || event.status === "APPROVED")) {
			style.backgroundColor = "green";
			style.pointerEvents = 'none';
		}

		return {
			style: style
		}
	}

	return (
		<DashboardLayout>
			<div className="col-md-12 mb-3">
				<div class="col-6 mb-4" style={{ marginLeft: '-15px', fontWeight: '600', fontSize: "22px" }}>
					<h4>PCR Schedule</h4>
				</div>
				<Calendar
					popup
					localizer={localizer}
					events={slots}
					startAccessor="start"
					views={['month']}
					endAccessor="end"
					selectable={true}
					eventPropGetter={(eventStyleGetter)}
				/>
				<br />
				<button className='btn btn-primary' style={{ float: 'right' }} onClick={() => { history.push("/admin/pcr/report") }}>See Reports</button>
			</div>

		</DashboardLayout>
	)
}

export default PCR