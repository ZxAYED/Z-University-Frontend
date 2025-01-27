import { Button, Pagination, Table, TableColumnsType, TableProps } from "antd";

import { IStudent } from "../../../../types/global";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../../redux/features/admin/userManagementApi";

type TDataType = Pick<IStudent, "fullName" | "id" | "email" | "contactNo">;

const StudentsData = () => {
  const [queryParams, setqueryParams] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("id");
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: "limit", value: limit },
    { name: "page", value: page },
    { name: "sort", value: sort },
    { name: "limit", value: limit },
    ...queryParams,
  ]);

  const tableData = studentData.data?.map((i) => ({
    key: i._id,
    name: i.fullName,
    id: i.id,
    email: i.email,
    contactNo: i.contactNo,
  }));

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Roll No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
            <Button>Details</Button>
            <Button>Block</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TDataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {};

  return (
    <>
      <Table<TDataType>
        loading={isFetching || isLoading}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      ></Table>
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={studentData.meta?.limit}
        total={studentData.meta?.total}
      ></Pagination>
    </>
  );
};

export default StudentsData;
