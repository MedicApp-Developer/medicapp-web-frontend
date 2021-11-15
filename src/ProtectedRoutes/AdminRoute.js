import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ADMIN } from '../constants/Roles';
import { RootContext } from '../contextApi/index';

export default ({ children, ...routeProps }) => {

  const { user } = useContext(RootContext);

  return (
    <Route
      {...routeProps}
      render={() => (user?.role === ADMIN ?
        (
          children
        ) :
        <Redirect to='/login' />)
      }
    />
  );
};