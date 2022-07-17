import { Switch, withRouter } from "react-router-dom";
import AdminRoute from "../../ProtectedRoutes/AdminRoute";
import Addons from "./Addons";
import AdminDashboard from "./AdminDashboard";
import AllExpenses from './AllExpenses';
import AllExpenseType from './AllExpenses/components/AllExpenseType';
import ApprovalHospitals from './ApprovalHospitals';
import Categories from "./Categories";
import Clinics from './Clinics';
import GenerateReport from './Clinics/components/GenerateReport';
import Expenses from './Expenses';
import ExpensePerMonth from './Expenses/components/ExpensePerMonth';
import ExpensePerType from './Expenses/components/ExpensePerType';
import PCR from './PCR';
import PCRAppointment from './PCRAppointment/PCRAppointment';
import Specialities from "./Specialities";
import Insurances from "./Insurances";
import Vendors from './Vendors';
import VendorType from './PackageCategories';
import PackageCategories from './PackageCategories';

const AdminRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <AdminRoute exact path={`${match.path}`}>
                <AdminDashboard />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/specialities`} >
                <Specialities />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/insurances`} >
                <Insurances />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/package-categories`} >
                <PackageCategories />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/vendors`} >
                <Vendors />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/categories`} >
                <Categories />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/addons`} >
                <Addons />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/approve-hospitals`} >
                <ApprovalHospitals />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/clinics`} >
                <Clinics />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/clinic/:id`} >
                <GenerateReport />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/pcr`} >
                <PCR />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/pcr/:startDate`} >
                <PCRAppointment />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/expenses`} >
                <Expenses />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/expenses/:month`} >
                <ExpensePerMonth />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/expenses/type/:type`} >
                <ExpensePerType />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/allExpenses`} >
                <AllExpenses />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/allExpenses/:type`} >
                <AllExpenseType />
            </AdminRoute>
        </Switch>
    )
});

export default AdminRouter;
