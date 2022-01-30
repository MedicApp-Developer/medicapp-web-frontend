import React, { useState, useEffect, useContext, useRef } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { RootContext } from '../../../contextApi/index'
import SlotApi from '../../../api/Slots/index'
import moment from 'moment'
import { href } from '../../../constants/extra'
import AppointmentDetails from './components/AppointmentDetails'

const localizer = momentLocalizer(moment)

function SlotsCalendar() {

    const [slots, setSlots] = useState([])
    const { user } = useContext(RootContext)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const buttonRef = useRef()

    useEffect(() => {
        SlotApi.getAllDoctorsSlots(user.referenceId).then(res => {
            if (res.data.data && res.data.data.length > 0) {
                const events = []
                res.data.data.forEach(slot => {
                    events.push({
                        title: moment(slot.from).format("hh:mm") + " - " + moment(slot.to).format("hh:mm"),
                        start: slot.from,
                        end: slot.to,
                        status: slot.status,
                        description: slot.description,
                        doctorId: slot.doctorId,
                        patientId: slot.patientId,
                        familyMembers: slot.familyMemberId
                    })
                })
                setSlots(events)
            }
        })
    }, [])

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
        if (event.status === "BOOKED") {
            style.backgroundColor = "#D22B2B"
        }

        if (event.status === "AVAILABLE") {
            style.pointerEvents = "none"
        }

        return {
            style: style
        }
    }

    const onSelectEvent = (slot) => {
        setSelectedSlot(slot)
        buttonRef.current.click()
    }

    return (
        <DashboardLayout>
            <div class="col-6 text-right" style={{ visibility: 'hidden' }}>
                <a ref={buttonRef} href={href} data-toggle="modal" data-target="#appointmentDetails" class="btn btn-primary px-3"></a>
            </div>
            <div class="row align-items-center add-list">
                <div class="col-12">
                    <h4>Calendar Slots</h4>
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <Calendar
                    popup
                    localizer={localizer}
                    events={slots}
                    startAccessor="start"
                    onSelectEvent={onSelectEvent}
                    views={['month']}
                    endAccessor="end"
                    selectable={true}
                    eventPropGetter={(eventStyleGetter)}
                />
            </div>
            <AppointmentDetails selectedSlot={selectedSlot} />
        </DashboardLayout>
    )
}

export default SlotsCalendar
