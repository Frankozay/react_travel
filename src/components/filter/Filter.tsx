import React from "react";

import { Typography, Divider } from "antd";
import { FilterTag } from "./FilterTag";
import { getKey } from "@/utils";

const { Text } = Typography;

interface PropsType {
  title: string;
  tags: string[];
}

export const Filter: React.FC<PropsType> = React.memo(({ title, tags }) => {
  return (
    <div>
      <Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>
        {title} :{" "}
      </Text>
      {tags.map((t, index) => {
        if (index === tags.length - 1)
          return <FilterTag key={`filter${getKey()}`}>{t}</FilterTag>;
        return (
          <span key={`filter${getKey()}`}>
            <FilterTag>{t}</FilterTag>
            <Divider type="vertical" />
          </span>
        );
      })}
    </div>
  );
});
