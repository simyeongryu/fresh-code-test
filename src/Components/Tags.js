import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  float: none;
  clear: both;
`;

const IngredientContainer = styled.div`
  display: flex;
  color: #f5a324;
  font-size: 11px;
  float: left;
`;

const IngredientItem = styled.div`
  margin: 0 1px;
  padding: 2px;
  border: 1px solid #f5a324;
  border-radius: 10px;
`;

const VegetarianismContainer = styled.div`
  font-size: 11px;
  color: #f98c4d;

  float: right;
`;

const VegetarianismItem = styled.div`
  padding: 2px;
  border: 1px solid #f98c4d;
`;

const Tags = ({ tags }) => {
  const ingredientArr = tags.filter(tag => tag.type === "ingredient");
  const vegetarianismItem = tags.filter(tag => tag.type === "vegetarianism")[0];

  return (
    <>
      {tags.length > 0 ? (
        <Container>
          <IngredientContainer>
            {ingredientArr.map((item, i) => (
              <IngredientItem key={i}>{item.name}</IngredientItem>
            ))}
          </IngredientContainer>
          <VegetarianismContainer>
            <VegetarianismItem>{vegetarianismItem.name}</VegetarianismItem>
          </VegetarianismContainer>
        </Container>
      ) : null}
    </>
  );
};

export default Tags;
