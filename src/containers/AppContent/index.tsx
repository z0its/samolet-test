import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import LibrariesList from "../LibrariesList";
import LibraryItem from "../LibraryItem";
import "antd/dist/antd.less";
import styles from "./styles.module.scss";

const { Content } = Layout;

const AppContent = () => {
   return (
      <Content className={styles.appContent}>
         <div className={styles.appContent__area}>
            <Switch>
               <Route exact path="/">
                  <Redirect to="/libraries" />
               </Route>
               <Route path="/libraries">
                  <LibrariesList />
               </Route>
               <Route path="/library/:id">
                  <LibraryItem />
               </Route>
            </Switch>
         </div>
      </Content>
   );
};

export default AppContent;
