import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from '../../Redux/Selectors';
import { logout } from '../../Redux/Operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <span>Hello {name}</span>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
