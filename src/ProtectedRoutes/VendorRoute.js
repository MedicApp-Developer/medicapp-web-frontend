import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { VENDOR } from '../constants/Roles';
import { RootContext } from '../contextApi/index';

export default ({ children, ...routeProps }) => {

	const { user } = useContext(RootContext);

	return (
		<Route
			{...routeProps}
			render={() => (user?.role === VENDOR ?
				(
					children
				) :
				<Redirect to='/login' />)
			}
		/>
	);
};