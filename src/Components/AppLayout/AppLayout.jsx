import React, { Suspense, startTransition, useEffect, useState } from "react";
import { Layout, Spin, Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../helpers/helpers";
import { useNavigate } from "react-router";
const { Header, Content } = Layout;

const AppLayout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // logout section
  let logoutInterval;
  const redirectToLogin = () => {
    logoutInterval = setInterval(() => {
      if (getUser() === "undefined") {
        navigate("/login");
        clearInterval(logoutInterval);
      }
    });

    return () => {
      clearInterval(logoutInterval);
    };
  };

  const handleLogout = () => {
    localStorage.clear();
    redirectToLogin();
  };

  return (
    <Spin spinning={isLoading}>
      <Layout theme="white">
        <Header
          style={{
            border: "1px solid black",
            alignContent: "center",
            textAlign: "center",
          }}
          className="flex"
        >
          <div className="flex mr-auto">
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
          </div>
          <div className="display flex h-fit">
            <Button onClick={handleLogout} className="border-2 bg-red-500">
              LogOut
            </Button>
          </div>
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
