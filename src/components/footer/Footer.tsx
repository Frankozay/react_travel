import React from "react";
import { Layout, Typography } from "antd";
import { Trans } from "react-i18next";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        <Trans>footer.detail</Trans>
      </Typography.Title>
    </Layout.Footer>
  );
};
