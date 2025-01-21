import { FieldValues, SubmitHandler } from "react-hook-form";
import ZForm from "../../../components/ui/ZForm";
import ZInput from "../../../components/ui/ZInput";
import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { Button, Col, Flex } from "antd";

export default function AcademicSemester() {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex>
      <Col span="8">
        <ZForm onSubmit={onSubmit}>
          <ZInput type="text" name="Name" label="Name"></ZInput>
          <ZInput type="text" name="Year" label="year"></ZInput>
          <ZInput type="text" name="s" label="s"></ZInput>
          <Button htmlType="submit"> Submit</Button>
        </ZForm>
      </Col>
    </Flex>
  );
}
