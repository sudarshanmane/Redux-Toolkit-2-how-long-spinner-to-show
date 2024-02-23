import React, { Suspense, useEffect, useState } from "react";
import { Layout, Space, Spin } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
const { Header, Content } = Layout;

const AppLayout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    function buildMenu(menuItems, parentElement) {
      menuItems.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.textContent = item.sectionName;
        menuItem.classList.add("menu-item");

        if (item.subsections.length > 0) {
          menuItem.classList.add("has-submenu");
          const submenu = document.createElement("div");
          submenu.classList.add("submenu");
          buildMenu(item.subsections, submenu);
          menuItem.appendChild(submenu);
        }

        parentElement.appendChild(menuItem);
      });
    }

    const sideMenu = document.createElement("div");
    sideMenu.classList.add("side-menu");
    buildMenu(
      [
        {
          sectionName: "Main",
          subsections: [
            {
              sectionName: "Dashboard",
              subsections: [
                { sectionName: "Admin Dashboard", subsections: [] },
                { sectionName: "Employee Dashboard", subsections: [] },
              ],
            },
          ],
        },
        {
          sectionName: "Chat",
          subsections: [
            {
              sectionName: "Video Call",
              subsections: [],
            },
            {
              sectionName: "Voice Call",
              subsections: [
                { sectionName: "Voice call 1", subsections: [] },
                { sectionName: "Voice call 2", subsections: [] },
                { sectionName: "Voice call 3", subsections: [] },
              ],
            },
            {
              sectionName: "Calling",
              subsections: [
                { sectionName: "call 1", subsections: [] },
                { sectionName: "call 2", subsections: [] },
                { sectionName: "  call 3", subsections: [] },
              ],
            },
          ],
        },
      ],
      sideMenu
    );
    document.body.appendChild(sideMenu);
  }, []);

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
