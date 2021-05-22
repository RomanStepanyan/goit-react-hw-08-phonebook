import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import { getIsLoggedOn } from './Redux/Selectors';
import { getContacts } from './Redux/Operations';

const ContactsList = lazy(() =>
  import('./components/ContactsList/ContactsList'),
);
const FilterContacts = lazy(() =>
  import('./components/FilterContacts/FilterContacts'),
);
const UserLogin = lazy(() => import('./components/User/User'));
const UserRegister = lazy(() => import('./components/Register/Register'));
const PrivatRoute = lazy(() => import('./components/Routes/PrivatRoute'));
const PublicRoute = lazy(() => import('./components/Routes/PublicRoute'));
const NavigationBar = lazy(() =>
  import('./components/Navigation/NavigationBar'),
);
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));

export const App = () => {
  const isLoggedOn = useSelector(getIsLoggedOn);
  console.log(isLoggedOn);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContacts()));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationBar />
        <Switch>
          <PublicRoute path="/" exact>
            <NavigationBar />
          </PublicRoute>
          <PublicRoute path="/login" exact restricted>
            <UserLogin />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <UserRegister />
          </PublicRoute>
          <PrivatRoute path="/contacts">
            <ContactForm />
          </PrivatRoute>
          <PrivatRoute path="/contactsList">
            <ContactsList />
          </PrivatRoute>
          <PrivatRoute path="/filterContacts">
            <FilterContacts />
          </PrivatRoute>
        </Switch>
      </Suspense>
    </>
  );
};
