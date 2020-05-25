import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

/**
 * 카탈로그 내 아이템의 tag를 구현하는 컴포넌트
 * @param {array} tags - 각 메뉴의 tag 배열
 */
const Tags = ({ tags }) => {
  const ingredientArr = tags.filter(tag => tag.type === "ingredient");
  const vegetarianismItem = tags.find(tag => tag.type === "vegetarianism");

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

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
