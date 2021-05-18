import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from './Redux/Operations';
import { getIsLoggedOn } from './Redux/Selectors';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import FilterContacts from './components/FilterContacts/FilterContacts';
import UserLogin from './components/User/User';
import UserRegister from './components/Register/Register';
import UserMenu from './components/UserMenu/UserMenu';
import s from './App.module.css';

export const App = () => {
  const isLoggedOn = useSelector(getIsLoggedOn);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  const notLogedOnRender = () => {
    return [<UserRegister />, <UserLogin />];
  };
  const logedOnRender = () => {
    return [
      <UserMenu />,
      <ContactForm />,
      <FilterContacts />,
      <ContactsList />,
    ];
  };

  return (
    <div className={s.container}>
      {/* {isLoggedOn ? logedOnRender() : notLogedOnRender()} */}
      {logedOnRender()} {notLogedOnRender()}
      {/* {isLoggedOn
        ? ((<UserMenu />),
          (<ContactForm />),
          (<FilterContacts />),
          (<ContactsList />))
        : <UserRegister /> ?? <UserLogin />}

      <h2 className={s.title}>Contact form</h2>

      <h2 className={s.title}>Contact list</h2> */}
    </div>
  );
};
