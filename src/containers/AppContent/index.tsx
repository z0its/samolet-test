import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import LibrariesList from "../LibrariesList";
import "antd/dist/antd.less";
import styles from "./styles.module.scss";

const { Content } = Layout;

const AppContent = () => {
   return (
      <Content className={styles.appContent}>
         <div className={styles.appContent__area}>
            <Switch>
               <Route path="/librariesList">
                  <LibrariesList />
               </Route>
               <Route path="/library/:id"></Route>
            </Switch>
         </div>
      </Content>
   );
};

export default AppContent;
