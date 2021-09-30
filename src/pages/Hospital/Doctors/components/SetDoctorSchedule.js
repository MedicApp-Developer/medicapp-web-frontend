import React, { useEffect, useState } from 'react'
import DoctorApi from '../../../../api/Doctors';
import { getTimesArray } from '../../../../Utills/functions';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";

function SetDoctorSchedule() {

    const { id } = useParams();

    const [schedule, setSchedule] = useState({
        monday: {
            startTime: undefined,
            endTime: undefined
        },
        tuesday: {
            startTime: undefined,
            endTime: undefined
        },
        wednesday: {
            startTime: undefined,
            endTime: undefined
        },
        thursday: {
            startTime: undefined,
            endTime: undefined
        },
        friday: {
            startTime: undefined,
            endTime: undefined
        },
        satureday: {
            startTime: undefined,
            endTime: undefined
        },
        sunday: {
            startTime: undefined,
            endTime: undefined
        }
    });

    useEffect(() => {
        DoctorApi.getSingleDoctor(id).then(res => {
            res.data.data.schedule && setSchedule(res.data.data.schedule);
        })
    }, [id])

    const timesArray = getTimesArray();
    
    const submitHandler = (e) => {
        e.preventDefault();
        DoctorApi.updateDoctor(id, { schedule }).then(res => {
            toast.success("Doctor schedule updated");
            setTimeout(() => {
                window.location.reload();
            }, 500);
        })
    }

    return (
        <div class="modal fade" id="setSchedule" tabindex="-1" aria-labelledby="setScheduleLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="icon-close"></span>
                    </button>
                    <h4 class="text-center">Set Schedule</h4>
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Monday" disabled={true} placeholder="Monday" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Opening Time" value={schedule?.monday?.startTime} onChange={(e) => { setSchedule({ ...schedule, monday: { ...schedule.monday, startTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Closing Time" value={schedule?.monday?.endTime} onChange={(e) => { setSchedule({ ...schedule, monday: { ...schedule.monday, endTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Tuesday" disabled={true} placeholder="Tuesday" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Opening Time" value={schedule?.tuesday?.startTime} onChange={(e) => { setSchedule({ ...schedule, tuesday: { ...schedule.tuesday, startTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Closing Time" value={schedule?.tuesday?.endTime} onChange={(e) => { setSchedule({ ...schedule, tuesday: { ...schedule.tuesday, endTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Wednesday" disabled={true} placeholder="Wednesday" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Opening Time" value={schedule?.wednesday?.startTime} onChange={(e) => { setSchedule({ ...schedule, wednesday: { ...schedule.wednesday, startTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Closing Time" value={schedule?.wednesday?.endTime} onChange={(e) => { setSchedule({ ...schedule, wednesday: { ...schedule.wednesday, endTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Thursday" disabled={true} placeholder="Thursday" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Opening Time" value={schedule?.thursday?.startTime} onChange={(e) => { setSchedule({ ...schedule, thursday: { ...schedule.thursday, startTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Closing Time" value={schedule?.thursday?.endTime} onChange={(e) => { setSchedule({ ...schedule, thursday: { ...schedule.thursday, endTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Friday" disabled={true} placeholder="Friday" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Opening Time" value={schedule?.friday?.startTime} onChange={(e) => { setSchedule({ ...schedule, friday: { ...schedule.friday, startTime: e.target.value } }) }}>
                                        <option>Time</option >
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Closing Time" value={schedule?.friday?.endTime} onChange={(e) => { setSchedule({ ...schedule, friday: { ...schedule.friday, endTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Satureday" disabled={true} placeholder="Satureday" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Opening Time" value={schedule?.satureday?.startTime} onChange={(e) => { setSchedule({ ...schedule, satureday: { ...schedule.satureday, startTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Closing Time" value={schedule?.satureday?.endTime} onChange={(e) => { setSchedule({ ...schedule, satureday: { ...schedule.satureday, endTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Sunday" disabled={true} placeholder="Sunday" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Opening Time" value={schedule?.sunday?.startTime} onChange={(e) => { setSchedule({ ...schedule, sunday: { ...schedule.sunday, startTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control" placeholder="Closing Time" value={schedule?.sunday?.endTime} onChange={(e) => { setSchedule({ ...schedule, sunday: { ...schedule.sunday, endTime: e.target.value } }) }}>
                                        <option>Time</option>
                                        {timesArray.map((time => (
                                            <option value={time}>{time}</option>
                                        )))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-group text-center mb-0 mt-2">
                            <button type="submit" class="btn btn-primary mx-1 px-5" onClick={submitHandler}>Set</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SetDoctorSchedule
