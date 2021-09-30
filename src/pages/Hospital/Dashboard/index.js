import DashboardLayout from '../../../layout/DashboardLayout'
import MEDEOR_IMAGE from '../../../assets/images/medeor_logo.png';
import DoctorsAppointments from './components/DoctorsAppointments';
import TopDoctors from './components/TopDoctors';

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
                            <DoctorsAppointments />
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-12 col-xl-6">
                    <div class="card top-doctor">
                        <div class="card-body">
                            <h4>Top Doctors</h4>
                            <TopDoctors />
                        </div>
                    </div>
                </div>
                </div>
        </DashboardLayout>
    )
}

export default Dashboard
