import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLink = ({ title, path }) => {
  return (
    <NavList className="navbarLink">
      <Link to={path}>
        <a>{title}</a>
      </Link>
    </NavList>
  );
};

const NavList = styled.li`
  font-size: 1.5rem;
  font-weight: 600;
  a {
    color: #fff;
    transition: all 0.1s ease-in;
  }
  a:hover {
    color: #e2e2e2;
  }
`;

export default NavbarLink;
