import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { StyledLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="lessons">All lessons</StyledLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledLink to="my-lessons">My lessons</StyledLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
