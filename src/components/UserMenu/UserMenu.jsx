import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // useSelector(state => console.log(state));

  return (
    <div>
      <p> {user.username}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
