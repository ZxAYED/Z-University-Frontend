import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicSemesterApi";
import { filterParams, IAcademicSemester } from "../../../types/global";
import { SetStateAction, useState } from "react";
import { yearOptionsForFilter } from "./Academic.constants";

type TDataType = Pick<
  IAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [queryParams, setqueryParams] = useState([]);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemesterQuery(queryParams);

  const tableData = semesterData?.data.map((i) => ({
    key: i._id,
    name: i.name,
    year: i.year,
    startMonth: i.startMonth,
    endMonth: i.endMonth,
  }));

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: yearOptionsForFilter,
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      // filters: monthsForFilter,
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      // filters: monthsForFilter,
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
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
  ) => {
    console.log("params", filters, extra);
    if (extra.action === "filter") {
      const params: filterParams[] & SetStateAction<never[]> = [];
      filters.name?.forEach((i) =>
        params.push({
          name: "name",
          value: i as string,
        })
      );
      filters.year?.forEach((i) =>
        params.push({
          name: "year",
          value: i as string,
        })
      );
      // filters.startMonth?.forEach((i) =>
      //   params.push({
      //     name: "year",
      //     value: i as string,
      //   })
      // );
      // filters.endMonth?.forEach((i) =>
      //   params.push({
      //     name: "year",
      //     value: i as string,
      //   })
      // );
      setqueryParams(params);
    }
  };

  return (
    <Table<TDataType>
      loading={isFetching || isLoading}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
