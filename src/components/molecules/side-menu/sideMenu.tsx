import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, Space } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <PieChartOutlined />),

  getItem("Products", "sub1", <MailOutlined />, [
    getItem("Add Product", "2"),
    getItem("Product List", "3"),
  ]),

  getItem("Categories   ", "sub2", <AppstoreOutlined />, [
    getItem("Add Category", "4"),
    getItem("Category List", "5"),
  ]),

  getItem("Orders", "sub2", <AppstoreOutlined />, [
    getItem("Order List", "6"),
    getItem("Order Details", "7"),
  ]),

  getItem("Reviews", "8", <PieChartOutlined />),
  getItem("Account Settings", "9", <PieChartOutlined />),
  getItem("Logout", "10", <PieChartOutlined />),
];

const SideMenu = ({ ws }: { ws: number }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuStyles: any = {
    backgroundColor: " rgb(255, 255, 255)",
    color: "rgb(43, 52, 69)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: "1 0 auto",
    zIndex: "1200",
    position: "fixed",
    top: "4rem",
    outline: "0px",
    left: "0px",
    width: collapsed ? "120px" : "280px",
  };
  return (
    <Space>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16, zIndex: "1300" }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      {ws < 610 && collapsed ? (
        <Space />
      ) : (
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
          style={menuStyles}
        />
      )}
    </Space>
  );
};

export default SideMenu;
