import React, { useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useHistory } from 'react-router-dom'

const localizer = momentLocalizer(moment)

function PCR() {
	const [slots, setSlots] = useState([])
	const [selectedDate, setSelectedDate] = useState(null)
	const history = useHistory();

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

		if (event.status === "BOOKED" && moment(event.end).isSameOrBefore()) {
			style.backgroundColor = "#D22B2B"
			style.pointerEvents = 'none'
		}

		if (moment(event.end).isAfter() && event.status === "BOOKED") {
			style.backgroundColor = "green"
		}

		return {
			style: style
		}
	}

	const onSelectSlot = (box) => {
		setSelectedDate(box.start)
		history.push(`/admin/pcr/${box.start}`)
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
					onSelectSlot={onSelectSlot}
					endAccessor="end"
					selectable={true}
					eventPropGetter={(eventStyleGetter)}
				/>
			</div>

		</DashboardLayout>
	)
}

export default PCR