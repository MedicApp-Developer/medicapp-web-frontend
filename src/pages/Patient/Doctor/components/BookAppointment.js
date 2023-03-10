import React, { useState, useRef, useEffect, useContext } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { RootContext } from '../../../../contextApi/index'
import SlotApi from '../../../../api/Slots/index'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { href } from '../../../../constants/extra'
import CreateAppointment from './CreateAppointment'
import AppLayout from '../../../../layout/AppLayout'
import { SELECTED_DOCTOR_OR_HOSPITAL } from '../../../../constants/Slots'
import { useTranslation } from "react-i18next"

const localizer = momentLocalizer(moment)

function BookAppointment() {

    const doctor = JSON.parse(localStorage.getItem(SELECTED_DOCTOR_OR_HOSPITAL))
    const hospitalDetailPage = parseFloat(localStorage.getItem("hospitalDetailPage"))
    const { t } = useTranslation()

    const [slots, setSlots] = useState([])
    const { id } = useParams()
    const [selectedSlot, setSelectedSlot] = useState({})
    const buttonRef = useRef()

    const { user } = useContext(RootContext);

    useEffect(() => {
        let selectedDoctorId = id ?? doctor?._id
        selectedDoctorId = hospitalDetailPage ? doctor?._id : selectedDoctorId

        SlotApi.getAllDoctorsSlots(selectedDoctorId).then(res => {
            if (res.data.data && res.data.data.length > 0) {
                const events = []
                res.data.data.forEach(slot => {
                    if ((user._id === slot?.patientId?._id && slot.status === "BOOKED") || slot.status === "AVAILABLE") {
                        events.push({
                            title: moment(slot.from).format("hh:mm a") + " - " + moment(slot.to).format("hh:mm a"),
                            start: slot.from,
                            end: slot.to,
                            status: slot.status,
                            _id: slot._id
                        })
                    }
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
            fontSize: '14px',
            textAlign: 'center',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        }

        if ((event.status === "BOOKED") && moment(event.end).isSameOrBefore()) {
            style.backgroundColor = "#D22B2B"
            style.pointerEvents = 'none'
        }

        if (moment(event.end).isAfter() && (event.status === "BOOKED")) {
            style.backgroundColor = "green"
        }

        return {
            style: style
        }
    }

    const onSelectEvent = (slot) => {
        if (moment(slot.start).isAfter()) {
            setSelectedSlot(slot)
            buttonRef.current.click()
        }

    }
    let selectedDoctorName = id ?? doctor?.firstName + " " + doctor?.lastName

    selectedDoctorName = hospitalDetailPage ? doctor?.name : selectedDoctorName

    return (
        <AppLayout>
            <div class='container'>
                <div class="col-6 text-right" style={{ visibility: 'hidden' }}>
                    <a ref={buttonRef} href={href} data-toggle="modal" data-target="#setAppointment" class="btn btn-primary px-3"></a>
                </div>
                <div className="col-md-12 mb-3">
                    <div class="col-6 mb-4" style={{ marginLeft: '-15px', fontWeight: '600', fontSize: "22px" }}>
                        <h4><span style={{ fontStyle: 'italic', textDecoration: 'underline' }}>{selectedDoctorName}'s</span> {t("available_slots")}</h4>
                    </div>
                    <Calendar
                        popup
                        localizer={localizer}
                        events={slots}
                        onSelectEvent={onSelectEvent}
                        startAccessor="start"
                        views={['month']}
                        endAccessor="end"
                        selectable={true}
                        style={{ height: 900 }}
                        eventPropGetter={(eventStyleGetter)}
                    />
                </div>
                <CreateAppointment doctor={doctor} selectedSlot={selectedSlot} />
            </div>
        </AppLayout>
    )
}

export default BookAppointment
