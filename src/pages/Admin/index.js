import { Switch, withRouter } from "react-router-dom";
import AdminRoute from "../../ProtectedRoutes/AdminRoute";
import Addons from "./Addons";
import AdminDashboard from "./AdminDashboard";
import Categories from "./Categories";
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
            <AdminRoute exact path={`${match.path}/categories`} >
                <Categories />
            </AdminRoute>
            <AdminRoute exact path={`${match.path}/addons`} >
                <Addons />
            </AdminRoute>
        </Switch>
    )
});

export default AdminRouter;
