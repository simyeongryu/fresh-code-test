import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: white;
  border-bottom: 1px solid #e7e7e7;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  font-weight: 400;
  color: ${props => (props.current ? "#30A76B" : "#6e7074")};
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <StyledLink to="/">홈</StyledLink>
        </Item>
        <Item current={pathname === "/salads"}>
          <StyledLink to="/salads">메뉴보기</StyledLink>
        </Item>
      </List>
    </Header>
  );
});
