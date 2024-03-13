import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <p> {user.username}</p>
      <button type="button">Logout</button>
    </div>
  );
};
