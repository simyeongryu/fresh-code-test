import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Catalog from "../../Components/Catalog";
import { connect } from "react-redux";
import { actionCreator } from "../../store";

let currentCategory = null;

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

  margin-bottom: 20px;
  cursor: pointer;
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
  border-bottom: 1px solid #e8e8e8;
`;

const SaladsPresentor = ({
  menus,
  originMenus,
  setAll,
  setVegan,
  setFishes,
  setMeat,
  setDairy
}) => {
  const handleClick = e => {
    const category = e.target.innerText;
    switch (category) {
      case "전체보기":
        setAll(originMenus);
        break;
      case "비건":
        setVegan(originMenus);
        break;
      case "해산물":
        setFishes(originMenus);
        break;
      case "육류":
        setMeat(originMenus);
        break;
      case "유제품":
        setDairy(originMenus);
        break;
    }
  };

  return (
    <>
      {menus ? (
        <Container>
          <Title>프레시 코드 샐러드</Title>
          <TabContainer>
            <TabList>
              <TabItem onClick={handleClick} currentCategory={currentCategory}>
                전체보기
              </TabItem>
              <TabItem onClick={handleClick} currentCategory={currentCategory}>
                비건
              </TabItem>
              <TabItem onClick={handleClick} currentCategory={currentCategory}>
                해산물
              </TabItem>
              <TabItem onClick={handleClick} currentCategory={currentCategory}>
                육류
              </TabItem>
              <TabItem onClick={handleClick} currentCategory={currentCategory}>
                유제품
              </TabItem>
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

const mapStateToProps = (state, ownProps) => ({ menus: state });

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAll: menus => dispatch(actionCreator.setAll(menus)),
  setVegan: menus => dispatch(actionCreator.setVegan(menus)),
  setFishes: menus => dispatch(actionCreator.setFishes(menus)),
  setMeat: menus => dispatch(actionCreator.setMeat(menus)),
  setDairy: menus => dispatch(actionCreator.setDairy(menus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaladsPresentor);
