import css from './Navigation.module.css';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="lessons">All lessons</StyledLink>
        </li>
      </ul>
    </nav>
  );
};
