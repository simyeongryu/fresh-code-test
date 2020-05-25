import { createStore } from "redux";

// action types
const ALL = "ALL";
const VEGAN = "VEGAN";
const FISHES = "FISHES";
const MEAT = "MEAT";
const DAIRY = "DAIRY";

// action 생성 함수
export const actionCreator = {
  setAll: menus => ({ type: ALL, menus }),
  setVegan: menus => ({ type: VEGAN, menus }),
  setFishes: menus => ({ type: FISHES, menus }),
  setMeat: menus => ({ type: MEAT, menus }),
  setDairy: menus => ({ type: DAIRY, menus })
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ALL:
      return action.menus;
    case VEGAN:
      return action.menus.filter(menu => menu.category === '["비건"]');
    case FISHES:
      return action.menus.filter(menu => menu.category === '["해산물"]');
    case MEAT:
      return action.menus.filter(menu => menu.category === '["육류"]');
    case DAIRY:
      return action.menus.filter(menu => menu.category === '["유제품"]');
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
