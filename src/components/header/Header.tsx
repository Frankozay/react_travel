import React from "react";
import logo from "@/assets/logo.jpg";
import styles from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const navItems = [
  { label: "旅游首页", key: "item-1" },
  { label: "周末游", key: "item-2" },
  { label: "跟团游", key: "item-3" },
  { label: "自由行", key: "item-4" },
  { label: "私家团", key: "item-5" },
  { label: "邮轮", key: "item-6" },
  { label: "酒店+景点", key: "item-7" },
  { label: "当地玩乐", key: "item-8" },
  { label: "主题游", key: "item-9" },
  { label: "定制游", key: "item-10" },
  { label: "游学", key: "item-11" },
  { label: "签证", key: "item-12" },
  { label: "企业游", key: "item-13" },
  { label: "高端游", key: "item-14" },
  { label: "爱玩户外", key: "item-15" },
  { label: "保险", key: "item-16" },
];

const langItems = [
  { label: "中文", key: "Chinese" },
  { label: "English", key: "English" },
];

export const Header: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
      {/* topheader */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={<Menu items={langItems} />}
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Space size={0} className={styles["button-group"]}>
            <Button>注册</Button>
            <Button>登录</Button>
          </Space>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles.title}>
          白耗儿旅游网
        </Typography.Title>
        <Input.Search
          placeholder="请输入旅游目的地，主题或关键字"
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu
        items={navItems}
        mode={"horizontal"}
        className={styles["main-menu"]}
      />
    </div>
  );
};
