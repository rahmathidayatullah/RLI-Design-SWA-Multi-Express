import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from 'features/Auth/actions';

export default function Logout() {

  let history = useHistory();
  let dispatch = useDispatch();

  React.useEffect(() => {

    const logout = () => {
      dispatch(userLogout())
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    logout()
  }, [history, dispatch]);

  return (

    <div className="text-center flex flex-col justify-center items-center">

      <br />
         Logging out ...
    </div>

  )
}