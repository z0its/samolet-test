import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import AppContent from "../AppContent";
import "antd/dist/antd.less";
import styles from "./styles.module.scss";

const { Header } = Layout;

const AppContainer = () => {
   return (
      <BrowserRouter>
         <Layout className={styles.appContainer}>
            <Header className={styles.appHeader}>
               <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1">
                     <Link to="/librariesList">librariesList</Link>
                  </Menu.Item>
               </Menu>
            </Header>
            <AppContent />
         </Layout>
      </BrowserRouter>
   );
};

export default AppContainer;
