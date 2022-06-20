import React from "react";

import { Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { handlePrice } from "@/utils";

interface PropTypes {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage: React.FC<PropTypes> = React.memo(
  ({ id, size, imageSrc, price, title }) => {
    return (
      <Link to={`/detail/${id}`}>
        {size === "large" ? (
          <Image src={imageSrc} height={285} width={490} />
        ) : (
          <Image src={imageSrc} height={120} width={240} />
        )}
        <div>
          <Typography.Text type="secondary">
            {title.slice(0, 25)}
          </Typography.Text>
          <Typography.Text type="danger" strong>
            ¥ {handlePrice(price)} 起
          </Typography.Text>
        </div>
      </Link>
    );
  }
);
