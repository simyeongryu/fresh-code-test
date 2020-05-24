import React from "react";
import styled from "styled-components";
import Tags from "./Tags";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;

const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MenuLink = styled(Link)`
  width: 320px;
  height: 400px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 320px;
  margin-bottom: 10px;
`;

const Image = styled.div`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  width: 100%;
  height: 320px;
`;

const MenuItem = styled.li`
  width: 320px;
  height: 420px;
  padding: 10px;
  margin-bottom: 25px;
  &:hover {
    ${ImageContainer} {
      opacity: 0.7;
    }
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 40%;
`;

const MenuName = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const MenuSummary = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const MenuPrice = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #28b06e;
  margin-bottom: 10px;
`;

const Catalog = ({ menus }) => {
  return (
    <Container>
      <MenuList>
        {menus.map((menu, i) => (
          <MenuItem key={i}>
            <MenuLink to={`/${menu.id}`}>
              <ImageContainer>
                <Image imgUrl={menu.imgUrl} />
              </ImageContainer>
              <TextContainer>
                <MenuName>{menu.name}</MenuName>
                <MenuSummary>{menu.summary}</MenuSummary>
                <MenuPrice>{menu.details[0].price}원&nbsp;~</MenuPrice>
                <Tags tags={menu.tags} />
              </TextContainer>
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

export default Catalog;
