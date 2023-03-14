/** @format */

import { SitePropsContext } from "../context/SitePropsContext";
import { useContext } from "react";

export const useSitePropsContext = () => {
  const context = useContext(SitePropsContext);
  if (!context) {
    throw Error("useSitePropsContext must be used inside SitePropsContext");
  }
  return context;
};
