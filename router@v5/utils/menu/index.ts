import React from "react";

import type { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];
export const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};
