import { LuUserRoundPlus } from "react-icons/lu";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { ImUserTie } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { UserOutlined } from "@ant-design/icons";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";

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
    name: "Academic Management",
    path: "academic-semesters",
    icon: <LuUserRoundPlus />,

    children: [
      {
        name: "Create Academic Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Create Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Create Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "User Management",
    icon: <UserOutlined />,
    children: [
      {
        name: "Create Student",
        path: "create-student",

        element: <CreateStudent />,
      },
      {
        name: "Create Admin",
        path: "create-admin",

        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",

        element: <CreateFaculty />,
      },
    ],
  },
];
