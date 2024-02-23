import React, { Suspense, useState } from "react";
import { Layout, Space, Spin } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
const { Header, Content } = Layout;

const AppLayout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Spin spinning={isLoading}>
      <Layout theme="white">
        <Header
          style={{
            border: "1px solid black",
            height: "40px",
            display: "flex",
          }}
        >
          <Space>
            <Link to={"/dashboard/products"}>
              <span>Home</span>
            </Link>
            <Link to={"/dashboard"}>
              <span>Home</span>
            </Link>
            <Link to={"/dashboard"}>
              <span>Home</span>
            </Link>
            <Link to={"/dashboard"}>
              <span>Home</span>
            </Link>
          </Space>
        </Header>

        <Content
          style={{
            border: "1px solid black",
            height: "88vh",
            overflow: "auto",
          }}
        >
          <Suspense fallback="Please wait content is loading...">
            <Outlet context={{ dispatch, isLoading, setIsLoading }} />
          </Suspense>
        </Content>
      </Layout>
    </Spin>
  );
};

export default AppLayout;
