import React from "react";
import { Menu } from "antd";
import { ToolOutlined, AppstoreFilled } from "@ant-design/icons";
// import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import Sider from "antd/lib/layout/Sider";
import { NavLink } from "react-router-dom";

const SideMenu = ({ collapsed }) => {
  return (
    <Sider theme="dark" className="sidebar" collapsed={collapsed}>
      <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
        <Menu.Item key="1" icon={<AppstoreFilled />}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Menu.Item>
        <SubMenu key="sub1" icon={<ToolOutlined />} title="Setups">
          <Menu.Item key="3">
            <NavLink to="/setup/users">Users</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/setup/roles">Roles</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
