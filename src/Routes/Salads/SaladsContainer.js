import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SaladsPresentor from "./SaladsPresentor";
import { api } from "../../api";
import { connect } from "react-redux";
import { actionCreator } from "../../store";

/**
 * 메뉴 페이지 데이터 관리
 * @param {funciton} setAll - store에서 받아온 dipatch
 */
const SaladsContainer = ({ setAll }) => {
  const [menus, setOriginMenus] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { menus }
        } = await api.salads();
        setAll(menus);
        setOriginMenus(menus);
      })();
    } catch (e) {
      console.log(e);
    }
    return;
  }, []);
  // originMenus - reducer로 보낼 원본 state
  return <SaladsPresentor menus={menus} originMenus={menus} />;
};

SaladsContainer.propTypes = {
  setAll: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({ menus: state });

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAll: menus => dispatch(actionCreator.setAll(menus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaladsContainer);
