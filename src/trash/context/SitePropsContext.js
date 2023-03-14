/** @format */

import { createContext, useReducer } from "react";

export const SitePropsContext = createContext();

export const sitePropsReducer = (state, action) => {
  console.log(state);
  // switch (action.type) {
  //   default:
  //     return state;
  // }
};

export const SitePropsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sitePropsReducer, {
    siteProps: { darkMode: false, currentSelection: "home" },
  });

  return (
    <SitePropsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SitePropsContext.Provider>
  );
};
