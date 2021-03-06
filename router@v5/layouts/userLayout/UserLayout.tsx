import React from "react";
import styles from "./UserLayout.module.css";
import logo from "@/assets/logo.jpg";

import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
import { MenuItem, getItem } from "@/utils";

const { Header, Footer, Content } = Layout;

interface Props {
  children?: React.ReactNode;
}

export const UserLayout: React.FC<Props> = (props) => {
  const items: MenuItem[] = [getItem("中文", "1"), getItem("English", "2")];

  return (
    <Layout className={styles["user-layout-container"]}>
      <Header className={styles["header"]}>
        <div className={styles["lang"]}>
          <Dropdown overlay={<Menu items={items} />}>
            <Button>
              {" "}
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
            <Link to="/">
              <img alt="logo" className={styles["logo"]} src={logo} />
              <span className={styles["title"]}>白耗儿旅游网</span>
            </Link>
          </div>
          <div className={styles["desc"]}>让旅游更轻松</div>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>白耗儿学习用</Footer>
    </Layout>
  );
};
