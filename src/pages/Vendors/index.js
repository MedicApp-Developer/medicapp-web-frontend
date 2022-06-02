import { Switch, withRouter } from "react-router-dom";
import VendorRoute from "../../ProtectedRoutes/VendorRoute";
import Packages from './Packages';
import VendorProfile from './Profile';
import PromoCodes from './PromoCodes';

const VendorRouter = withRouter(({ match, ...props }) => {
	return (
		<Switch {...props}>
			<VendorRoute exact path={`${match.path}`}>
				<Packages />
			</VendorRoute>
			<VendorRoute exact path={`${match.path}/profile`}>
				<VendorProfile />
			</VendorRoute>
			<VendorRoute exact path={`${match.path}/promo-codes`}>
				<PromoCodes />
			</VendorRoute>
		</Switch>
	)
});

export default VendorRouter;
