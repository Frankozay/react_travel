import styles from "./DetailPage.module.css";

import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Spin,
  Row,
  Col,
  DatePicker,
  Typography,
  Divider,
  Anchor,
  Menu,
  Button,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "@/redux/hooks";
import {
  getProductDetail,
  productDetailSlice,
} from "@/redux/productDetail/slice";
import { ProductIntro, ProductComments } from "@/components";
import { MainLayout } from "@/layouts/mainLayout";
import { addShoppingCartItem } from "@/redux/shoppingCart/slice";
import { MenuItem, getItem } from "@/utils";
import { commentMockData } from "./mockup";

const { RangePicker } = DatePicker;

type MatchParams = {
  touristRouteId: string;
};

export const DetailPage: React.FC = React.memo(() => {
  const { touristRouteId } = useParams<MatchParams>();

  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const product = useSelector((state) => state.productDetail.data);

  const dispatch = useDispatch();

  const jwt = useSelector((s) => s.user.token) as string;
  const shoppingCartLoading = useSelector((s) => s.user.loading);

  const items: MenuItem[] = [
    getItem(<Anchor.Link href="#feature" title="产品特色" />, "1"),
    getItem(<Anchor.Link href="#fees" title="费用" />, "3"),
    getItem(<Anchor.Link href="#notes" title="预定须知" />, "4"),
    getItem(<Anchor.Link href="#comments" title="用户评论" />, "5"),
  ];

  useEffect(() => {
    if (touristRouteId) {
      dispatch(getProductDetail(touristRouteId));
    }

    return () => {
      dispatch(productDetailSlice.actions.pageOut());
    };
  }, [dispatch, touristRouteId]);

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
      <div className={styles["product-intro-container"]}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={product.touristRoutePictures.map((p) => p.url)}
            />
          </Col>
          <Col span={11}>
            <Button
              style={{ marginTop: 50, marginBottom: 30, display: "block" }}
              type="primary"
              danger
              loading={shoppingCartLoading}
              onClick={() => {
                dispatch(
                  addShoppingCartItem({ jwt, touristRouteId: product.id })
                );
              }}
            >
              <ShoppingCartOutlined />
              放入购物车
            </Button>
            <RangePicker open style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>
      {/* 锚点菜单 */}
      <Anchor className={styles["product-detail-anchor"]}>
        <Menu mode="horizontal" items={items} />
      </Anchor>
      {/* 产品特色 */}
      <div id="feature" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>产品特色</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.features }}
          style={{ margin: 50 }}
        ></div>
      </div>
      {/* 费用 */}
      <div id="fees" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>费用</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.fees }}
          style={{ margin: 50 }}
        ></div>
      </div>
      {/* 预定须知 */}
      <div id="notes" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>预定须知</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.notes }}
          style={{ margin: 50 }}
        ></div>
      </div>
      {/* 用户评论 */}
      <div id="comments" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>用户评论</Typography.Title>
        </Divider>
        <div style={{ margin: 40 }}>
          <ProductComments data={commentMockData} />
        </div>
      </div>
    </MainLayout>
  );
});
