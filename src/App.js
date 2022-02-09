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
import { useEffect } from 'react'

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
            <Route path="/patient" component={PatientRouter} />
            <Route path="/terms-of-use" component={TermsOfUse} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <PublicRoute path="/select-registeration-type" component={SelectRegisterationType} />
            <PublicRoute exact path="/register-hospital" component={HospitalRegisteration} />
            <PublicRoute exact path="/register-patient" component={PatientRegisteration} />
            <PublicRoute exact path="/login" component={Login} />
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
        <ToastContainer />
      </RootContext>
    </>
  )
}

export default App
