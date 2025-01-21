import React from "react";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Siderbar from "./Siderbar";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    toast.success("Logout  successfull", {
      duration: 2000,
      position: "top-right",
    });
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100dvh", position: "sticky" }}>
      <Layout>
        <Siderbar w></Siderbar>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogout}>Log out</Button>
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
