import DashboardLayout from '../../../layout/DashboardLayout'
import MEDEOR_IMAGE from '../../../assets/images/medeor_logo.png';
import DOCTOR_IMAGE from '../../../assets/images/doctor.png';
import PATIENT_IMAGE from '../../../assets/images/patient.png';

function Dashboard() {
    
    return (
        <DashboardLayout>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card welcome-block px-lg-3 py-2">
                            <div class="card-body">
                                <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h2>Welcome to MedicApp</h2>
                                </div>
                                <div class="col-sm-6 text-sm-right">
                                    <img width="120" src={MEDEOR_IMAGE} alt="medeor-logo"/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <h4>Doctors Appointments</h4>
                            <div class="scrollbar">
                            <div class="table-responsive">
                                <table class="table mb-md-0">
                                    <tbody>
                                        <tr>
                                        <td>
                                            <span>Time</span>
                                            <p><strong>03:00PM</strong></p>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <span>Time</span>
                                            <p><strong>03:00PM</strong></p>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Antony Smith</h5>
                                                    <p>Patient</p>
                                                </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <span>Time</span>
                                            <p><strong>03:00PM</strong></p>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Antony Smith</h5>
                                                    <p>Patient</p>
                                                </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <span>Time</span>
                                            <p><strong>03:00PM</strong></p>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Antony Smith</h5>
                                                    <p>Patient</p>
                                                </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <span>Time</span>
                                            <p><strong>03:00PM</strong></p>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Antony Smith</h5>
                                                    <p>Patient</p>
                                                </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <span>Time</span>
                                            <p><strong>03:00PM</strong></p>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Antony Smith</h5>
                                                    <p>Patient</p>
                                                </div>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <span>Time</span>
                                            <p><strong>03:00PM</strong></p>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={DOCTOR_IMAGE} alt="doctor"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Dr. Travis Martin</h5>
                                                    <p>Dentist</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src={PATIENT_IMAGE} alt="patient"/>
                                                <div class="media-body">
                                                    <h5 class="mt-0">Antony Smith</h5>
                                                    <p>Patient</p>
                                                </div>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-12 col-xl-6">
                    <div class="card top-doctor">
                        <div class="card-body">
                            <h4>Top Doctors</h4>
                            <div class="row">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media">
                                        <img src={DOCTOR_IMAGE} alt="doctor"/>
                                        <div class="media-body">
                                            <h5 class="mt-0">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                        </div>
                                        </div>
                                        <div class="contact-info">
                                        <a href="javascript:void(0)"><span class="icon-email"></span></a>
                                        <a href="javascript:void(0)"><span class="icon-phone"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media">
                                        <img src={DOCTOR_IMAGE} alt="doctor"/>
                                        <div class="media-body">
                                            <h5 class="mt-0">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                        </div>
                                        </div>
                                        <div class="contact-info">
                                        <a href="javascript:void(0)"><span class="icon-email"></span></a>
                                        <a href="javascript:void(0)"><span class="icon-phone"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media">
                                        <img src={DOCTOR_IMAGE} alt="doctor"/>
                                        <div class="media-body">
                                            <h5 class="mt-0">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                        </div>
                                        </div>
                                        <div class="contact-info">
                                        <a href="javascript:void(0)"><span class="icon-email"></span></a>
                                        <a href="javascript:void(0)"><span class="icon-phone"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media">
                                        <img src={DOCTOR_IMAGE} alt="doctor"/>
                                        <div class="media-body">
                                            <h5 class="mt-0">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                        </div>
                                        </div>
                                        <div class="contact-info">
                                        <a href="javascript:void(0)"><span class="icon-email"></span></a>
                                        <a href="javascript:void(0)"><span class="icon-phone"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media">
                                        <img src={DOCTOR_IMAGE} alt="doctor"/>
                                        <div class="media-body">
                                            <h5 class="mt-0">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                        </div>
                                        </div>
                                        <div class="contact-info">
                                        <a href="javascript:void(0)"><span class="icon-email"></span></a>
                                        <a href="javascript:void(0)"><span class="icon-phone"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media">
                                        <img src={DOCTOR_IMAGE} alt="doctor"/>
                                        <div class="media-body">
                                            <h5 class="mt-0">Dr. Travis Martin</h5>
                                            <p>Dentist</p>
                                        </div>
                                        </div>
                                        <div class="contact-info">
                                        <a href="javascript:void(0)"><span class="icon-email"></span></a>
                                        <a href="javascript:void(0)"><span class="icon-phone"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </DashboardLayout>
    )
}

export default Dashboard
