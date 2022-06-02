import React, { useState, useRef, useEffect, useContext } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { RootContext } from '../../../../../contextApi/index'
import SlotApi from '../../../../../api/Slots/index'
import moment from 'moment'
import { href } from '../../../../../constants/extra'
import { useParams } from 'react-router-dom'
import CreateAppointment from '../../../Doctor/components/CreateAppointment'
import AppLayout from '../../../../../layout/AppLayout'
import { useTranslation } from "react-i18next"

const localizer = momentLocalizer(moment)

function BookVaccinationHospital() {

    const hospital = JSON.parse(localStorage.getItem("HOSPITAL_VACCINATION_APPOINTMENT"))
    const [slots, setSlots] = useState([])
    const [selectedSlot, setSelectedSlot] = useState({})
    const buttonRef = useRef()
    const { user } = useContext(RootContext)
    const slotRef = useRef()
    const { t } = useTranslation()

    useEffect(() => {
        SlotApi.getHospitalPCRVaccinationSlots(hospital?._id).then(res => {
            if (res.data.data && res.data.data.length > 0) {
                const events = []
                res.data.data.forEach(slot => {
                    events.push({
                        title: moment(slot.from).format("hh:mm") + " - " + moment(slot.to).format("hh:mm"),
                        start: slot.from,
                        end: slot.to,
                        status: slot.status,
                        _id: slot._id
                    })
                })
                setSlots(events)
            }
        })
    }, [user])

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
                    <a ref={buttonRef} href={href} data-toggle="modal" data-target="#setAppointment" class="btn btn-primary px-3"></a>
                </div>

                <h4 className="text-center"><span style={{ fontStyle: 'italic', textDecoration: 'underline' }}>{hospital?.name}'s</span> {t('available_slots')}</h4>
                <Calendar
                    popup
                    localizer={localizer}
                    events={slots}
                    onSelectEvent={onSelectEvent}
                    startAccessor="start"
                    views={['month']}
                    endAccessor="end"
                    selectable={true}
                    eventPropGetter={(eventStyleGetter)}
                />

                <CreateAppointment doctor={hospital} selectedSlot={selectedSlot} slotRef={slotRef} onSlotCalandarClose={onSlotCalandarClose} />
            </div>
        </AppLayout>
    )
}

export default BookVaccinationHospital
