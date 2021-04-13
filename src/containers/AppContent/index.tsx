import React from "react";
import { Route, Switch } from "react-router";
import { Layout } from "antd";
import "antd/dist/antd.less";
import styles from "./styles.module.scss";

const { Content } = Layout;

const AppContent = () => {
   return (
      <Content className={styles.appContent}>
         <div className={styles.appContent__area}>
            <Switch>
               <Route path="librariesList"></Route>
               <Route path="library/:id"></Route>
            </Switch>
         </div>
      </Content>
   );
};

export default AppContent;
