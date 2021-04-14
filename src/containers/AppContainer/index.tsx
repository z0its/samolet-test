import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import AppContent from "../AppContent";
import AppHeader from "../../components/AppHeader";
import "antd/dist/antd.less";
import styles from "./styles.module.scss";

const AppContainer: React.FC = () => {
   return (
      <ConfigProvider locale={ruRU}>
         <BrowserRouter>
            <Layout className={styles.appContainer}>
               <AppHeader />
               <AppContent />
            </Layout>
         </BrowserRouter>
      </ConfigProvider>
   );
};

export default AppContainer;
