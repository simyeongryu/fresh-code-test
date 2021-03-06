import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
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
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  font-weight: 400;
  &:hover {
    color: #30a76b;
  }
  color: ${props => (props.current ? "#30A76B" : "#6e7074")};
  border-bottom: ${props => (props.current ? "2px solid #30A76B" : "#6e7074")};
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Header 레이아웃 컴포넌트.
 * withRouter로 props 생성
 * @param {string} pathname - 탭 기능 구현을 위한 현재 url
 */
const Header = ({ location: { pathname } }) => {
  return (
    <SHeader>
      <List>
        <Item current={pathname === "/"}>
          <StyledLink to="/">홈</StyledLink>
        </Item>
        <Item current={pathname === "/salads"}>
          <StyledLink to="/salads">메뉴보기</StyledLink>
        </Item>
      </List>
    </SHeader>
  );
};

export default withRouter(Header);
