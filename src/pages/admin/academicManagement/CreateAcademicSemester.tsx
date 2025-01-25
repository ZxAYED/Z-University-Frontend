import { FieldValues, SubmitHandler } from "react-hook-form";
import ZForm from "../../../components/ui/ZForm";

import { Button, Col, Flex } from "antd";
import ZSelect from "../../../components/ui/ZSelect";
import { months, sessionData, yearOptions } from "./Academic.constants";

import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicSchema";
import { useAddAcademicSemeserMutation } from "../../../redux/features/admin/academicSemesterApi";
import { toast } from "sonner";
import { IError } from "../../../types/global";

export default function AcademicSemester() {
  const [addAcademicSemester] = useAddAcademicSemeserMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Semester");
    const name = sessionData[Number(data?.name) - 1]?.label;
    const code = sessionData[Number(data?.name) - 1]?.value;

    const semesterData = {
      name,
      code,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = await addAcademicSemester(semesterData);

      if (res.error as IError) {
        toast.error((res.error as IError)?.data.message, { id: toastId });
      } else {
        toast.success("Semester Created", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err.message + "error", { id: toastId });
    }
  };

  return (
    <Flex align="center" justify="center">
      <Col span="6">
        <ZForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <ZSelect options={sessionData} label="Name" name="name"></ZSelect>
          <ZSelect options={yearOptions} label="Year" name="year"></ZSelect>
          <ZSelect
            options={months}
            label="Start Month"
            name="startMonth"
          ></ZSelect>
          <ZSelect options={months} label="End Month" name="endMonth"></ZSelect>
          <Button htmlType="submit"> Submit</Button>
        </ZForm>
      </Col>
    </Flex>
  );
}
