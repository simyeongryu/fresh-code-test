import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Catalog from "../../Components/Catalog";
import { connect } from "react-redux";
import { actionCreator } from "../../store";

let currentTab = "all";
const ALL = "all";
const VEGAN = "vegan";
const FISHES = "fishes";
const MEAT = "meat";
const DAIRY = "dairy";

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 80px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
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
  color: ${props => (props.current ? "#30a76b" : "#656565")};
  border-bottom: ${props => (props.current ? "2px solid #30a76b" : "#656565")};
  font-weight: 600;
  &:hover {
    color: #30a76b;
  }
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
  const handleClickAll = () => {
    setAll(originMenus);
    currentTab = ALL;
  };
  const handleClickVegan = () => {
    setVegan(originMenus);
    currentTab = VEGAN;
  };
  const handleClickFishes = () => {
    setFishes(originMenus);
    currentTab = FISHES;
  };
  const handleClickMeat = () => {
    setMeat(originMenus);
    currentTab = MEAT;
  };
  const handleClickDairy = () => {
    setDairy(originMenus);
    currentTab = DAIRY;
  };

  return (
    <>
      {menus ? (
        <Container>
          <Title>프레시 코드 샐러드</Title>
          <TabContainer>
            <TabList>
              <TabItem onClick={handleClickAll} current={currentTab === ALL}>
                전체보기
              </TabItem>
              <TabItem
                onClick={handleClickVegan}
                current={currentTab === VEGAN}
              >
                비건
              </TabItem>
              <TabItem
                onClick={handleClickFishes}
                current={currentTab === FISHES}
              >
                해산물
              </TabItem>
              <TabItem onClick={handleClickMeat} current={currentTab === MEAT}>
                육류
              </TabItem>
              <TabItem
                onClick={handleClickDairy}
                current={currentTab === DAIRY}
              >
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
