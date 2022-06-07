import logo from "@/assets/logo.jpg";
import styles from "./Header.module.css";

import React, { useState, useEffect } from "react";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Trans } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "@/redux/hooks";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "@/redux/language/languageActions";
import { userSlice } from "@/redux/user/slice";

interface JwtPayLoad extends DefaultJwtPayload {
  username: string;
}

export const Header: React.FC = () => {
  const history = useHistory();
  const language = useSelector((state) => state.language.language);
  const languageList = useSelector((state) => state.language.languageList);
  const dispatch = useDispatch();

  const jwt = useSelector((s) => s.user.token);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayLoad>(jwt);
      setUsername(token.username);
    }
  }, [jwt]);

  const menuClickHandler = (e) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("新语言", "new_lang"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
    history.push("/");
  };

  return (
    <div className={styles["app-header"]}>
      {/* topheader */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>
            <Trans>header.slogan</Trans>
          </Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map((l) => {
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                })}
                <Menu.Item key={"new"}>
                  <Trans>header.add_new_language</Trans>
                </Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          {jwt ? (
            <Space size={0} className={styles["button-group"]}>
              <span>
                <Trans>header.welcome</Trans>
                <Typography.Text strong> {username}</Typography.Text>
              </span>
              <Button>
                <Trans>header.shoppingCart</Trans>
              </Button>
              <Button onClick={onLogOut}>
                <Trans>header.signOut</Trans>
              </Button>
            </Space>
          ) : (
            <Space size={0} className={styles["button-group"]}>
              <Button onClick={() => history.push("/register")}>
                <Trans>header.register</Trans>
              </Button>
              <Button onClick={() => history.push("/signIn")}>
                <Trans>header.signin</Trans>
              </Button>
            </Space>
          )}
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            <Trans>header.title</Trans>
          </Typography.Title>
        </span>

        <Input.Search
          placeholder={"请输入旅游目的地，主题或关键字"}
          className={styles["search-input"]}
          onSearch={(keywords) => history.push("/search/" + keywords)}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key="1">
          {" "}
          <Trans>header.home_page</Trans>
        </Menu.Item>
        <Menu.Item key="2">
          {" "}
          <Trans>header.weekend</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="3">
          {" "}
          <Trans>header.group</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="4">
          {" "}
          <Trans>header.backpack</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="5">
          {" "}
          <Trans>header.private</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="6">
          {" "}
          <Trans>header.cruise</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="7">
          {" "}
          <Trans>header.hotel</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="8">
          {" "}
          <Trans>header.local</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="9">
          {" "}
          <Trans>header.theme</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="10">
          {" "}
          <Trans>header.custom</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="11">
          {" "}
          <Trans>header.study</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="12">
          {" "}
          <Trans>header.visa</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="13">
          {" "}
          <Trans>header.enterprise</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="14">
          {" "}
          <Trans>header.high_end</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="15">
          {" "}
          <Trans>header.outdoor</Trans>{" "}
        </Menu.Item>
        <Menu.Item key="16">
          {" "}
          <Trans>header.insurance</Trans>{" "}
        </Menu.Item>
      </Menu>
    </div>
  );
};
