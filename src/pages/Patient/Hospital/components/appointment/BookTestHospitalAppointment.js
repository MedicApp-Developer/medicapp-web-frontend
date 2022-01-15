import React, { useState, useRef, useEffect, useContext } from 'react'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { RootContext } from '../../../../../contextApi/index'
import SlotApi from '../../../../../api/Slots/index';
import moment from 'moment';
import { href } from '../../../../../constants/extra';
import { useParams } from 'react-router-dom';
import CreateAppointment from '../../../Doctor/components/CreateAppointment';

const localizer = momentLocalizer(moment)

function BookTestHospitalAppointment({ hospital }) {

    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState({});
    const buttonRef = useRef();
    const { user } = useContext(RootContext);
    const { id } = useParams(); 
    const slotRef = useRef();

    useEffect(() => {
        SlotApi.getHospitalPCRTestSlots(id).then(res => {
            if(res.data.data && res.data.data.length > 0) {
                const events = [];
                res.data.data.forEach(slot => {
                    events.push({
                        title: moment(slot.from).format("hh:mm:ss a") + " - " + moment(slot.to).format("hh:mm:ss a"),
                        start: slot.from,
                        end: slot.to,
                        status: slot.status,
                        _id: slot._id
                    })
                })
                setSlots(events);
            }
        })
    }, [user]);

    const eventStyleGetter = (event, start, end, status) => {
        var backgroundColor = '#' + event.hexColor;
        var style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        };
        
        if(event.status === "BOOKED" && moment(event.end).isSameOrBefore()) {
            style.backgroundColor = "#D22B2B";
            style.pointerEvents = 'none';
        }

        if(moment(event.end).isAfter() && event.status === "BOOKED"){
            style.backgroundColor = "green";
        }

        return {
            style: style
        };
    }

    const onSelectEvent = (slot) => {
        setSelectedSlot(slot);
        buttonRef.current.click();
        slotRef.current.className = "modal fade show modal-block-custom-add";
    }

    const onSlotCalandarClose = () => {
        slotRef.current.className = "modal fade";
    }

    return (
        <>
            <div class="col-6 text-right" style={{ visibility: 'hidden' }}>
                  <a ref={buttonRef} href={href} data-toggle="modal" data-target="#setAppointment" class="btn btn-primary px-3"></a>
            </div>
            <div className="modal fade" id="hospitalTestBookAppointment" tabindex="-1" aria-labelledby="hospitalTestBookAppointmentLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '90%' }}>
                    <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span className="icon-close"></span>
                        </button>
                        <h4 className="text-center">Available Slots</h4>
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
                    </div>
                    </div>
                </div>
            </div>
            <CreateAppointment doctor={hospital} selectedSlot={selectedSlot} slotRef={slotRef} onSlotCalandarClose={onSlotCalandarClose} />
        </>
    )
}

export default BookTestHospitalAppointment