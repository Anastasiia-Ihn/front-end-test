import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  cursor: pointer;

  padding-top: 15px;
  padding-bottom: 15px;

  &.active {
    font-weight: 600;
    color: #c70c0c;
  }
`;
