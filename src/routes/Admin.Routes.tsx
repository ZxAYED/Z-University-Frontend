import { LuUserRoundPlus } from "react-icons/lu";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { ImUserTie } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { UserOutlined } from "@ant-design/icons";

export const adminInfo = [
  {
    name: "Dashboard",
    icon: (
      <svg
        style={{
          display: "Flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27 24"
        width="20"
        height="20"
      >
        <path
          d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
          fill="currentColor"
        />
      </svg>
    ),
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    icon: <UserOutlined />,
    children: [
      {
        name: "Create Student",
        path: "create-student",
        icon: <LuUserRoundPlus />,
        element: <CreateStudent />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        icon: <RiAdminLine />,
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        icon: <ImUserTie />,
        element: <CreateFaculty />,
      },
    ],
  },
];
