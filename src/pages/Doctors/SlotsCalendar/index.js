import React, { useState, useEffect, useContext, useRef } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { RootContext } from '../../../contextApi/index'
import SlotApi from '../../../api/Slots/index'
import moment from 'moment'
import { href } from '../../../constants/extra'
import DatePicker from 'react-datepicker'
import AppointmentDetails from './components/AppointmentDetails'


const localizer = momentLocalizer(moment)

function SlotsCalendar() {

    const { id } = useParams()
    const [selectedDate, setSelectedDate] = useState(null)
    const [startDate, setStartDate] = useState(new Date().setHours(new Date().setMinutes(new Date(), 0), 9))
    const [endDate, setEndDate] = useState(new Date().setHours(new Date().setMinutes(new Date(), 0), 9))
    const [slots, setSlots] = useState([])
    const { user } = useContext(RootContext)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const buttonRef = useRef()
    const createSlotRef = useRef()

    const filterPassedTime = (time) => {
        const currentDate = new Date()
        const selectedDate = new Date(time)

        return currentDate.getTime() < selectedDate.getTime()
    }

    useEffect(() => {
        console.log(user);
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
    }, [user.referenceId])

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
        if (slot.status === "BOOKED") {
            setSelectedSlot(slot)
            buttonRef.current.click()
        }
    }

    const onSelectSlot = (box) => {
        setSelectedDate(box.start)
        createSlotRef.current.click()
    }

    const createSlot = (e) => {
        e.preventDefault()
        const slot = {
            hospitalId: user.id,
            doctorId: user.referenceId,
            from: startDate,
            to: endDate
        }
        SlotApi.createSlot(slot).then(res => {
            setSlots([...slots, {
                _id: res.data.data._id,
                title: moment(startDate).format("hh:mm a") + " - " + moment(endDate).format("hh:mm a"),
                start: startDate,
                end: endDate,
            }])
            toast.success("Slot created successfully")
            createSlotRef.current.click()
        }).catch(err => {
            console.log(err);
            toast.error("Problem while creating the slot" + err.toString())
        })
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
                    onSelectSlot={onSelectSlot}
                    views={['month']}
                    endAccessor="end"
                    selectable={true}
                    eventPropGetter={(eventStyleGetter)}
                />
                <div class="col-6 text-right" style={{ visibility: 'hidden' }}>
                    <a ref={createSlotRef} href={href} data-toggle="modal" data-target="#setSchedule" class="btn btn-primary px-3"></a>
                </div>
                <div class="modal fade" id="setSchedule" tabindex="-1" aria-labelledby="setScheduleLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span class="icon-close"></span>
                                </button>
                                <h4 class="text-center">Create Slots</h4>
                                <form onSubmit={createSlot}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="from">From</label>
                                                <DatePicker
                                                    id="from"
                                                    className="form-control"
                                                    placeholderText="From Date"
                                                    autoComplete='off'
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    showTimeSelect
                                                    filterTime={filterPassedTime}
                                                    minDate={new Date(selectedDate)}
                                                    // maxDate={new Date(selectedDate)}
                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="to">To</label>
                                                <DatePicker
                                                    id="to"
                                                    className="form-control"
                                                    placeholderText="To Date"
                                                    autoComplete='off'
                                                    selected={endDate}
                                                    onChange={(date) => setEndDate(date)}
                                                    showTimeSelect
                                                    filterTime={filterPassedTime}
                                                    minDate={new Date(selectedDate)}
                                                    // maxDate={new Date(selectedDate)}
                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center mb-0">
                                        <button type="submit" className="btn btn-primary">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppointmentDetails selectedSlot={selectedSlot} />
        </DashboardLayout>
    )
}

export default SlotsCalendar
