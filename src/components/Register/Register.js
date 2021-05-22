import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../Redux/Operations';
import { getIsLoggedOn } from '../../Redux/Selectors';
import s from '../User/User.module.css';

const UserRegister = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = ({ target }) => setName(target.value);
  const handleChangeEmail = ({ target }) => setEmail(target.value);
  const handleChangePassword = ({ target }) => setPassword(target.value);

  const isLoggedOn = useSelector(getIsLoggedOn);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoggedOn ? null : (
        <div>
          <h2 className={s.title}>Please sign up</h2>
          <form type="submit" className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
              <span>name</span>
              <input
                type="text"
                className={s.input}
                placeholder="Input your name"
                value={name}
                onChange={handleChangeName}
              />
            </label>
            <label className={s.label}>
              <span>email</span>
              <input
                type="email"
                className={s.input}
                placeholder="Input your email"
                value={email}
                onChange={handleChangeEmail}
              />
            </label>
            <label className={s.label}>
              <span>password</span>
              <input
                type="password"
                className={s.input}
                placeholder="Input your password"
                value={password}
                onChange={handleChangePassword}
              />
            </label>
            <button type="submit" className={s.button}>
              Sign up
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default UserRegister;
