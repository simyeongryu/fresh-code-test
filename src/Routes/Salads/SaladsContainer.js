import React, { useEffect, useState } from "react";
import SaladsPresentor from "./SaladsPresentor";
import { api } from "../../api";

const SaladsContainer = () => {
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { menus }
        } = await api.salads();
        setMenus(menus);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <SaladsPresentor menus={menus} />;
};

export default SaladsContainer;
