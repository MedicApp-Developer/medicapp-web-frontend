import React, { useState, useEffect, useContext, useRef } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { toast } from "react-toastify"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { RootContext } from '../../../contextApi/index'
import SlotApi from '../../../api/Slots/index'
import DoctorApi from '../../../api/Doctors/index'
import moment from 'moment'
import { href } from '../../../constants/extra'
import DatePicker from 'react-datepicker'
import AppointmentDetails from './components/AppointmentDetails'
import DeleteSlot from './components/DeleteSlot'


const localizer = momentLocalizer(moment)

function SlotsCalendar() {

    const [selectedDate, setSelectedDate] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [slots, setSlots] = useState([])
    const { user } = useContext(RootContext)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [hospitalId, setHospitalId] = useState(null)
    const buttonRef = useRef()
    const createSlotRef = useRef()
    const deleteSlotRef = useRef()

    const filterPassedTime = (time) => {
        const currentDate = new Date()
        const selectedDate = new Date(time.getTime())
        return currentDate.getTime() < selectedDate.getTime()
    }

    const filterEndPassedTime = (time) => {
        const newDate = moment(time)
        const dateSelected = moment(startDate)
        return newDate.isAfter(dateSelected)
    }

    useEffect(() => {
        DoctorApi.getSingleDoctor(user.referenceId).then(res => {
            if (res.data.data) {
                setHospitalId(res.data.data.hospitalId._id);
            }
        }).catch((err) => {
            console.log(err);
        });
        SlotApi.getAllDoctorsSlots(user.referenceId).then(res => {
            if (res.data.data && res.data.data.length > 0) {
                const events = []
                res.data.data.forEach(slot => {
                    events.push({
                        _id: slot._id,
                        title: moment(slot.from).format("hh:mm a") + " - " + moment(slot.to).format("hh:mm a"),
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
        if (slot.status === "BOOKED") {
            setSelectedSlot(slot)
            buttonRef.current.click()
        } else {
            if (moment(slot.start).isAfter()) {
                setSelectedSlot(slot)
                deleteSlotRef.current.click()
            }
        }
    }

    const onSelectSlot = (box) => {
        if (isTodayOrFuture(moment(box.start))) {
            setSelectedDate(box.start)
            const startDate = new Date(box.start.getTime());
            const endDate = new Date(box.start.getTime());

            const currentTime = new Date()
            console.log("Start Date", startDate);
            console.log("End Date", endDate);
            if (currentTime.getMinutes() < 30) {
                startDate.setMinutes(30)
                startDate.setHours(currentTime.getHours())
                setStartDate(startDate)
                endDate.setMinutes(0)
                endDate.setHours(new Date().getHours() + 1)
                setEndDate(endDate)
            } else {
                startDate.setMinutes(0)
                startDate.setHours(new Date().getHours() + 1)
                setStartDate(startDate)

                endDate.setMinutes(30)
                endDate.setHours(new Date().getHours() + 1)
                setEndDate(endDate)
            }
            createSlotRef.current.click()
        }
    }

    const handleSlotDeleteCallback = (deletedSlot) => {
        console.log('WOWWW Calback');
        const updatedSlots = slots.filter(item => item._id !== deletedSlot._id)
        setSlots(updatedSlots)
        deleteSlotRef.current.click()
    }

    function isTodayOrFuture(date) {
        date = stripTime(date);
        return date.diff(stripTime(moment.now())) >= 0;
    }

    function stripTime(date) {
        date = moment(date);
        date.hours(0);
        date.minutes(0);
        date.seconds(0);
        date.milliseconds(0);
        return date;
    }

    const createSlot = (e) => {
        e.preventDefault()
        const slot = {
            hospitalId: hospitalId,
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
            toast.error("Problem while creating the slot")
        })
    }

    return (
        <DashboardLayout>
            <div class="col-6 text-right" style={{ visibility: 'hidden' }}>
                <a ref={buttonRef} href={href} data-toggle="modal" data-target="#appointmentDetails" class="btn btn-primary px-3"></a>
                <a ref={deleteSlotRef} href={href} data-toggle="modal" data-target="#deleteSlot" class="btn btn-primary px-3"></a>
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
                    style={{ height: 900 }}
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
                                                    onChange={(date) => {
                                                        setStartDate(date)
                                                        const dateSelected = new Date(date.getTime());
                                                        if (dateSelected.getMinutes() < 30) {
                                                            dateSelected.setMinutes(30)
                                                            dateSelected.setHours(dateSelected.getHours())
                                                            setEndDate(dateSelected)
                                                        } else {
                                                            dateSelected.setMinutes(0)
                                                            dateSelected.setHours(dateSelected.getHours() + 1)
                                                            setEndDate(dateSelected)
                                                        }
                                                    }}
                                                    showTimeSelect
                                                    filterTime={filterPassedTime}
                                                    minDate={selectedDate}
                                                    maxDate={selectedDate}
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
                                                    filterTime={filterEndPassedTime}
                                                    minDate={selectedDate}
                                                    maxDate={selectedDate}
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
            <DeleteSlot selectedSlot={selectedSlot} slotDeletedCallback={handleSlotDeleteCallback} />
        </DashboardLayout>
    )
}

export default SlotsCalendar
