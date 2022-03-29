import Login from './pages/shared/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import HospitalRegisteration from './pages/Hospital/Registeration'
import HospitalRouter from './pages/Hospital'
import RootContext from "./contextApi/index"
import DoctorRouter from './pages/Doctors'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './assets/css/style.css'
import SelectRegisterationType from './pages/shared/SelectRegisterationType'
import PatientRegisteration from './pages/Patient/Registeration'
import PublicRoute from './ProtectedRoutes/PublicRoute'
import NurseRouter from './pages/Nurse'
import LabortoriesRouter from './pages/Laboratories'
import PharmacyRouter from './pages/Pharmacy'
import AdminRouter from './pages/Admin'
import PatientRouter from './pages/Patient'
import TermsOfUse from './pages/Others/TermsOfUse'
import PrivacyPolicy from './pages/Others/PrivacyPolicy'
import VendorRouter from './pages/Vendors'
import ForgetPassword from './pages/shared/ForgetPassword'
import ResetPassword from './pages/shared/ForgetPassword/components/ResetPassword'

function App() {
  return (
    <>
      <RootContext>
        <Router>
          <Switch>
            <Route path="/hospital" component={HospitalRouter} />
            <Route path="/doctors" component={DoctorRouter} />
            <Route path="/nurse" component={NurseRouter} />
            <Route path="/laboratory" component={LabortoriesRouter} />
            <Route path="/pharmacy" component={PharmacyRouter} />
            <Route path="/admin" component={AdminRouter} />
            <Route path="/vendor" component={VendorRouter} />
            <Route path="/terms-of-use" component={TermsOfUse} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <PublicRoute path="/select-registeration-type" component={SelectRegisterationType} />
            <PublicRoute exact path="/register-hospital" component={HospitalRegisteration} />
            <PublicRoute exact path="/register-patient" component={PatientRegisteration} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/forget-password" component={ForgetPassword} />
            <PublicRoute exact path="/reset-password/:userToken" component={ResetPassword} />
            <Route path="/" component={PatientRouter} />
            {/* <Route path="/">
              <Redirect to="/login" />
            </Route> */}
          </Switch>
        </Router>
        <ToastContainer />
      </RootContext>
    </>
  )
}

export default App
