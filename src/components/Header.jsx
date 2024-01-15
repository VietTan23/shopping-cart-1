import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const CartLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
            </Nav>
            <Title>My Web</Title>
            <CartLink to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
            </CartLink>
        </HeaderContainer>
    );
};

export default Header;
