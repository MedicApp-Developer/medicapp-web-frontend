import React, { useEffect, useState, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import moment from 'moment';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { href } from '../../../../constants/extra';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { RootContext } from '../../../../contextApi/index'
import SlotApi from '../../../../api/Slots';

const localizer = momentLocalizer(moment)

function SetDoctorSchedule() {

    const { id } = useParams();
    const [selectedDate, setSelectedDate] = useState(null);
    const [startDate, setStartDate] = useState( new Date().setHours(new Date().setMinutes(new Date(), 0), 9));
    const [endDate, setEndDate] = useState( new Date().setHours(new Date().setMinutes(new Date(), 0), 9));
    const [slots, setSlots] = useState([]);

    const { user } = useContext(RootContext);
    const buttonRef = useRef();

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
    };

    useEffect(() => {
        SlotApi.getAllDoctorsSlots(id).then(res => {
            if(res.data.data && res.data.data.length > 0) {
                const events = [];
                res.data.data.forEach(slot => {
                    events.push({
                        title: moment(slot.from).format('LL') + " - " + moment(slot.to).format("LL"),
                        start: slot.from,
                        end: slot.to
                    })
                })
                setSlots(events);
            }
        })
    }, [id])

    const onSelectSlot = (box) => {
        setSelectedDate(box.start);
        buttonRef.current.click();
    }
    
    const createSlot = (e) => {
        e.preventDefault();
        const slot = {
            hospitalId: user.referenceId,
            doctorId: id,
            from: startDate,
            to: endDate
        }
        SlotApi.createSlot(slot).then(res => {
            setSlots([...slots, {
                title: moment(startDate).format('LL') + " - " + moment(endDate).format("LL"),
                start: startDate,
                end: endDate
            }]);
            toast.success("Slot created successfully");
            buttonRef.current.click();
        }).catch(err => {
            toast.error("Problem while creating the slot")
        })
    }

    return (
        <div className="col-md-12 mb-3">
            <div class="col-6 mb-4" style={{marginLeft: '-15px', fontWeight: '600', fontSize: "22px"}}>
                <h4>Doctor Schedule</h4>
            </div>
            <Calendar
                popup
                localizer={localizer}
                events={slots}
                startAccessor="start"
                views={['month']}
                endAccessor="end"
                selectable={true}
                onSelectSlot={onSelectSlot}
            />

            <div class="col-6 text-right" style={{ visibility: 'hidden' }}>
                  <a ref={buttonRef} href={href} data-toggle="modal" data-target="#setSchedule" class="btn btn-primary px-3"></a>
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
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            showTimeSelect
                                            filterTime={filterPassedTime}
                                            minDate={new Date(selectedDate)}
                                            maxDate={new Date(selectedDate)}
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
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            showTimeSelect
                                            filterTime={filterPassedTime}
                                            minDate={new Date(selectedDate)}
                                            maxDate={new Date(selectedDate)}
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
    )
}

export default SetDoctorSchedule
