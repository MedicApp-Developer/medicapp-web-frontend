import React, { useState, useRef } from 'react'
import AppLayout from '../../../layout/AppLayout'
import { useTranslation } from "react-i18next"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useEffect } from 'react'
import { href } from '../../../constants/extra'
import CreatePCRAppointment from './components/CreatePCRAppointment'
import AppointmentApi from '../../../api/Appointment'
import { useContext } from 'react'
import { RootContext } from '../../../contextApi'

const localizer = momentLocalizer(moment)

const slots = [];

function PCRAppointments() {
	const { t } = useTranslation()
	const [appointments, setAppointments] = useState([]);
	const [selectedSlot, setSelectedSlot] = useState(null);
	const buttonRef = useRef()
	const slotRef = useRef()
	const { user } = useContext(RootContext)

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {

		AppointmentApi.getPatientMedicappBookedAppointment(user._id).then(res => {
			let startDate = moment("09:00:00", "HH:mm:ss").format('YYYY-MM-DD hh:mm A')
			let appointmentsArray = [];

			for (let j = 0; j < 15; j++) {
				startDate = moment(startDate).add(1, 'days').format('YYYY-MM-DD hh:mm A')
				for (let i = 1; i < 11; i++) {
					let toDate = moment(moment(startDate).add(1, 'hours').format('YYYY-MM-DD hh:mm A'))
					appointmentsArray.push({
						start: startDate,
						end: toDate,
						title: moment(startDate).format("hh:mm A") + " - " + moment(toDate).format("hh:mm A"),
						status: "AVAILABLE"
					});
					startDate = toDate
				}
				let tempDate = moment(startDate).set('hour', 9);
				let temp2Date = moment(tempDate).set('minute', 0);
				let temp3Date = moment(temp2Date).set('second', 0);
				startDate = temp3Date;
			}

			const booked = [];

			res.data.data.forEach(perDate => booked.push({
				start: moment(perDate.from).format('YYYY-MM-DD hh:mm A'),
				end: moment(perDate.to).format('YYYY-MM-DD hh:mm A'),
				title: moment(perDate.from).format('hh:mm A') + " - " + moment(perDate.to).format('hh:mm A'),
				status: "BOOKED",
				_id: perDate._id
			}));

			appointmentsArray.forEach(availables => {
				booked.forEach(booked => {
					if (moment(availables.start).isSame(booked.start)) {
						availables.status = "BOOKED";
						availables._id = booked._id;
					}
				})
			})

			const prevBookedSlots = [];

			booked.forEach(booked => {
				if (moment(booked.start).isBefore()) {
					prevBookedSlots.push({
						start: moment(booked.start).format('YYYY-MM-DD hh:mm A'),
						end: moment(booked.end).format('YYYY-MM-DD hh:mm A'),
						title: moment(booked.start).format('hh:mm A') + " - " + moment(booked.end).format('hh:mm A'),
						status: "BOOKED",
						_id: booked._id
					})
				}
			})

			setAppointments([...prevBookedSlots, ...appointmentsArray]);

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

		if ((event.status === "BOOKED" || event.status === "APPROVED")) {
			style.backgroundColor = "green"
		}

		if ((event.status === "BOOKED" || event.status === "APPROVED") && moment(event.end).isSameOrBefore()) {
			style.backgroundColor = "#D22B2B"
			style.pointerEvents = 'none'
		}

		return {
			style: style
		}
	}

	const onSelectEvent = (slot) => {
		setSelectedSlot(slot)
		buttonRef.current.click()
		slotRef.current.className = "modal fade show modal-block-custom-add"
	}

	const onSlotCalandarClose = () => {
		slotRef.current.className = "modal fade"
	}

	return (
		<AppLayout>
			<div className="container">
				<div class="col-6 text-right" style={{ visibility: 'hidden' }}>
					<a ref={buttonRef} href={href} data-toggle="modal" data-target="#setMedicappAppointment" class="btn btn-primary px-3"></a>
				</div>
				<h4 className="text-center" style={{ marginBottom: "3rem" }}>PCR Appointments</h4>
				<Calendar
					popup
					localizer={localizer}
					events={appointments}
					onSelectEvent={onSelectEvent}
					startAccessor="start"
					views={['month']}
					endAccessor="end"
					selectable={true}
					eventPropGetter={(eventStyleGetter)}
				/>
				<br />
			</div>
			<CreatePCRAppointment selectedSlot={selectedSlot} slotRef={slotRef} onSlotCalandarClose={onSlotCalandarClose} />
		</AppLayout>
	)
}

export default PCRAppointments