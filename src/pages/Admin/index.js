import { Switch, withRouter } from "react-router-dom";
import AdminRoute from "../../ProtectedRoutes/AdminRoute";
import AdminDashboard from "./AdminDashboard";
import Specialities from "./Specialities";

const AdminRouter = withRouter(({ match, ...props }) => {
    return (
        <Switch {...props}>
            <AdminRoute exact path={`${match.path}`}>
                <AdminDashboard />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/specialities`} >
                <Specialities />
            </AdminRoute>
        </Switch>
    )
});

export default AdminRouter;
