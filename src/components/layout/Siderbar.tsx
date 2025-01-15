import { genericNavMenus } from "../../utils/RoutesNavmenuGenerator";
import { adminInfo } from "../../routes/Admin.Routes";
import { Button, Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

export default function Siderbar() {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  let sidebarItems;
  const role = userRole.ADMIN;
  console.log(genericNavMenus(adminInfo, userRole.ADMIN));
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = genericNavMenus(adminInfo, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = genericNavMenus(adminInfo, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = genericNavMenus(adminInfo, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.3rem",
          padding: "6px 0 6px 0",
          fontWeight: 700,
        }}
      >
        Z-University
      </div>
      <div className="demo-logo-vertical" />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
      <Button>
        <NavLink to="/login"> Login</NavLink>
      </Button>
    </Sider>
  );
}
