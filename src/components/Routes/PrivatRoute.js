import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedOn } from '../../Redux/Selectors';

export default function PrivatRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedOn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
