import React from "react";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Siderbar from "./Siderbar";
const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100dvh " }}>
      <Layout>
        <Siderbar></Siderbar>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
