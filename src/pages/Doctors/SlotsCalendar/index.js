import React, { useState, useEffect, useContext } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { RootContext } from '../../../contextApi/index'
import SlotApi from '../../../api/Slots/index';
import moment from 'moment';

const localizer = momentLocalizer(moment)

function SlotsCalendar() {

    const [slots, setSlots] = useState([]);
    const { user } = useContext(RootContext);
    
    useEffect(() => {
        SlotApi.getAllDoctorsSlots(user.referenceId).then(res => {
            if(res.data.data && res.data.data.length > 0) {
                const events = [];
                res.data.data.forEach(slot => {
                    events.push({
                        title: moment(slot.from).format("hh:mm:ss a") + " - " + moment(slot.to).format("hh:mm:ss a"),
                        start: slot.from,
                        end: slot.to,
                        status: slot.status
                    })
                })
                setSlots(events);
            }
        })
    }, []);

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
        if(event.status === "BOOKED") {
            style.backgroundColor = "#D22B2B"
        }

        return {
            style: style
        };
    }

    return (
        <DashboardLayout>
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
                    views={['month']}
                    endAccessor="end"
                    selectable={true}
                    eventPropGetter={(eventStyleGetter)}
                />
            </div>
        </DashboardLayout>
    )
}

export default SlotsCalendar