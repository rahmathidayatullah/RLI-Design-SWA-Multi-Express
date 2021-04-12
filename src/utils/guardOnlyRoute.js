import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function GuestOnlyRoute({ children, ...rest }) {

  let { token } = useSelector(state => state.auth);

  return <Route {...rest}>
    {!token ? children : <Redirect to="/transaction/create" />}
  </Route>
}