import { genericNavMenus } from "../../utils/RoutesNavmenuGenerator";
import { adminInfo } from "../../routes/Admin.Routes";
import { Button, Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { IUser, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { facultyPaths } from "../../routes/Faculty.Routes";

const { Sider } = Layout;

export default function Siderbar() {
  const userRole = {
    ADMIN: "admin",
    SUPERADMIN: "superAdmin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  let sidebarItems;

  const user = useAppSelector(selectCurrentUser) as IUser;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = genericNavMenus(adminInfo, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = genericNavMenus(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = genericNavMenus(adminInfo, userRole.STUDENT);
      break;
    case userRole.SUPERADMIN:
      sidebarItems = genericNavMenus(adminInfo, userRole.ADMIN);
      break;

    default:
      break;
  }

  return (
    <Sider
      width={"280px"}
      style={{ height: "100dvh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.3rem",
          padding: "12px 0 6px 0",
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
