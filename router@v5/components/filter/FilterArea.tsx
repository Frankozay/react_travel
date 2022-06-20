import React from "react";
import { Divider } from "antd";
import { Filter } from "./Filter";
import styles from "./FilterArea.module.css";

export const FilterArea: React.FC = () => {
  return (
    <>
      <Filter title="路线评价" tags={["1星", "2星", "3星", "4星", "5星"]} />
      <Divider dashed className={styles["filter-divider"]} />
      <Filter title="出发城市" tags={["北京", "上海", "广州", "深圳"]} />
      <Divider dashed className={styles["filter-divider"]} />
      <Filter title="行程天数" tags={["2日", "3日", "4日", "5日", "6日"]} />
      <Divider dashed />
      <Filter
        title="旅程类型"
        tags={["跟团游", "自由行", "自驾游", "高端定制"]}
      />
      <Divider dashed />
      <Filter title="出发时间" tags={["春节", "清明", "劳动节"]} />
    </>
  );
};
