import React from "react";
import { BrowserRouter } from "react-router-dom";
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
               <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
               </Menu>
            </Header>
            <AppContent />
         </Layout>
      </BrowserRouter>
   );
};

export default AppContainer;
