import React, { useEffect } from "react";
import sideImage1 from "@/assets/images/sider_2019_12-09.png";
import sideImage2 from "@/assets/images/sider_2019_02-04.png";
import sideImage3 from "@/assets/images/sider_2019_02-04-2.png";

import { Row, Col, Typography, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getRecommendProduct } from "@/redux/recommendProducts/slice";
import { useSelector } from "@/redux/hooks";
import { MainLayout } from "@/layouts/mainLayout";
import {
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "@/components";

export const HomePage: React.FC = () => {
  const loading = useSelector((state) => state.recommendProduct.loading);
  const error = useSelector((state) => state.recommendProduct.error);
  const productList = useSelector(
    (state) => state.recommendProduct.productList
  );

  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getRecommendProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>网站出错:{error}</div>;
  }

  return (
    <MainLayout>
      <Row style={{ marginTop: 20 }}>
        <Col span={6}>
          <SideMenu />
        </Col>
        <Col span={18}>
          <Carousel />
        </Col>
      </Row>
      <ProductCollection
        title={
          <Typography.Title level={3} type="warning">
            {t("home_page.hot_recommended")}
          </Typography.Title>
        }
        sideImage={sideImage1}
        products={productList[0].touristRoutes}
      />
      <ProductCollection
        title={
          <Typography.Title level={3} type="danger">
            {t("home_page.new_arrival")}
          </Typography.Title>
        }
        sideImage={sideImage2}
        products={productList[1].touristRoutes}
      />
      <ProductCollection
        title={
          <Typography.Title level={3} type="success">
            {t("home_page.domestic_travel")}
          </Typography.Title>
        }
        sideImage={sideImage3}
        products={productList[2].touristRoutes}
      />
      <BusinessPartners />
    </MainLayout>
  );
};
