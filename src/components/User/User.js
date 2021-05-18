import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../Redux/Operations';
import s from './User.module.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLoading = useSelector(state => state.user.isLoading);
  console.log(onLoading);

  const handleChangeEmail = ({ target }) => setEmail(target.value);
  const handleChangePassword = ({ target }) => setPassword(target.value);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2 className={s.title}>Please login</h2>
      <form type="submit" className={s.form} onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
};
export default UserLogin;
