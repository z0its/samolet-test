import React from "react";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";
import { Layout, Menu } from "antd";
import styles from "./styles.module.scss";

const { Header } = Layout;

const AppHeader: React.FC<RouteComponentProps> = ({ location }) => {
   return (
      <Header className={styles.appHeader}>
         <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[
               location.pathname === "/"
                  ? "libraries"
                  : `${location.pathname.split("/")[1]}`,
            ]}
         >
            <Menu.Item key="libraries">
               <Link to="/libraries">Список библиотек</Link>
            </Menu.Item>
         </Menu>
      </Header>
   );
};

export default withRouter(AppHeader);
