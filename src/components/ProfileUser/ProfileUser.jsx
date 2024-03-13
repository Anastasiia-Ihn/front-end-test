import { Link, Outlet } from 'react-router-dom';

export const ProfileUser = () => {
  return (
    <>
      <div>User</div>
      <ul>
        <li>
          <Link to="my-lessons">All lessons</Link>
        </li>
        <li>
          <Link to="create">New lesson</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
