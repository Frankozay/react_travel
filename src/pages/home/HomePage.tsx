import React from "react";
import {
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "@/components";
import { Row, Col, Typography, Spin } from "antd";
import { withTranslation, WithTranslation, Trans } from "react-i18next";
import { connect } from "react-redux";
import { RootState } from "@/redux/store";
import { getDataActionCreator } from "@/redux/recommendProducts/recommendProductsActions";
import { MainLayout } from "@/layouts/mainLayout";
import sideImage1 from "@/assets/images/sider_2019_12-09.png";
import sideImage2 from "@/assets/images/sider_2019_02-04.png";
import sideImage3 from "@/assets/images/sider_2019_02-04-2.png";

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getDataActionCreator());
    },
  };
};

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    // console.log(this.props.t)
    // const { t } = this.props;
    const { loading, error, productList } = this.props;
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
              <Trans>home_page.hot_recommended</Trans>
            </Typography.Title>
          }
          sideImage={sideImage1}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              <Trans>home_page.new_arrival</Trans>
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              <Trans>home_page.domestic_travel</Trans>
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        />
        <BusinessPartners />
      </MainLayout>
    );
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent));
