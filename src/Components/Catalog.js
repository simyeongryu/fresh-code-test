import React from "react";
import styled from "styled-components";
import Tags from "./Tags";

const Container = styled.div`
  display: flex;
`;

const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MenuItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 250px;
  height: 400px;
  padding: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60%;
`;

const Image = styled.div`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  width: 100%;
  height: 250px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 40%;
  padding-top: 30px;
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

const TagsContainer = styled.div`
  width: 100%;
  height: 10px;
`;

const IngredientContainer = styled.div``;

const VegetarianismContainer = styled.div``;

const Catalog = ({ menus }) => {
  console.log(menus);
  return (
    <Container>
      <MenuList>
        {menus.map((menu, i) => (
          <MenuItem key={i}>
            <ImageContainer>
              <Image imgUrl={menu.imgUrl} />
            </ImageContainer>
            <TextContainer>
              <MenuName>{menu.name}</MenuName>
              <MenuSummary>{menu.summary}</MenuSummary>
              <MenuPrice>{menu.details[0].price}원&nbsp;~</MenuPrice>
              <Tags tags={menu.tags} />
            </TextContainer>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

export default Catalog;