import React, { useEffect, useState } from "react";
import SaladsPresentor from "./SaladsPresentor";
import { api } from "../../api";
import { connect } from "react-redux";
import { actionCreator } from "../../store";

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
  }, []);

  return <SaladsPresentor menus={menus} originMenus={menus} />;
};

const mapStateToProps = (state, ownProps) => ({ menus: state });

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAll: menus => dispatch(actionCreator.setAll(menus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaladsContainer);
