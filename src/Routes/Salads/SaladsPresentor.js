import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Catalog from "../../Components/Catalog";

const Container = styled.div`
  width: 70%;
  margin: auto;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 30px;
  opacity: 0.7;
  font-size: 13px;
  font-weight: 400;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 20px;
`;

const TabList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
`;

const SaladsPresentor = ({ menus }) => {
  return (
    <>
      {menus ? (
        <Container>
          <Title>프레시 코드 샐러드</Title>
          <TabContainer>
            <TabList>
              <TabItem>전체보기</TabItem>
              <TabItem>비건</TabItem>
              <TabItem>해산물</TabItem>
              <TabItem>육류</TabItem>
              <TabItem>유제품</TabItem>
            </TabList>
          </TabContainer>
          <Catalog menus={menus} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SaladsPresentor;
