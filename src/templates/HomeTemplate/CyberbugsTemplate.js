import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import SidebarCyberbugs from "../../components/Cyberbugs/SidebarCyberbugs";
import "../../index.css";
import MenuCyberbugs from "../../components/Cyberbugs/MenuCyberbugs";

export const CyberbugsTemplate = (props) => {
  const { Component, ...restParam } = props;

  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <div className="jira">
            <SidebarCyberbugs />
            <MenuCyberbugs />
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
