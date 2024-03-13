import { StyledLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <StyledLink to="register">Registration</StyledLink>
      </li>
      <li>
        <StyledLink to="login">Login</StyledLink>
      </li>
    </ul>
  );
};
