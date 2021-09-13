import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DOCTOR } from '../constants/Roles';
import { RootContext } from '../contextApi/index';

export default ({ children, ...routeProps }) => {

  const { user } = useContext(RootContext);

  return (
    <Route
      {...routeProps}
      render={() => (user?.role === DOCTOR ?
        (
          children
        ) :
        <Redirect to='/login' />)
      }
    />
  );
};