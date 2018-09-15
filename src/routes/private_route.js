import React from 'react';
import {
  Redirect,
  Route,
}            from 'react-router-dom';

const token = localStorage.getItem('token')

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    token ?
      <Component {...props} />
      :
      <Redirect
        to={{
          pathname : '/login',
          state    : { from: props.location },
        }}
      />
    )}
  />
);

export default PrivateRoute;
