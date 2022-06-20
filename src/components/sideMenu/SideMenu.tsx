import React, { useMemo } from "react";
import styles from "./SideMenu.module.css";

import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
import { getKey, MenuItem, getItem } from "@/utils";

export const SideMenu: React.FC = React.memo(() => {
  const sideItems: MenuItem[] = useMemo(() => {
    return [
      ...sideMenuList.map((m) => {
        return getItem(
          <span>
            <GifOutlined />
            {m.title}
          </span>,
          `side-menu${getKey()}`,
          null,
          m.subMenu.map((sm) => {
            return getItem(
              <span>
                <GifOutlined />
                {sm.title}
              </span>,
              `sub-menu${getKey()}`,
              null,
              sm.subMenu.map((sms) => {
                return getItem(
                  <span>
                    <GifOutlined />
                    {sms}
                  </span>,
                  `sub-sub-menu${getKey()}`
                );
              })
            );
          })
        );
      }),
    ];
  }, []);

  return (
    <Menu mode="vertical" className={styles["side-menu"]} items={sideItems} />
  );
});
