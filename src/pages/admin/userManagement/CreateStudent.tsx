import React from "react";
import { SubmitHandler, FieldValues, Controller } from "react-hook-form";
import { Row, Col, Button, Divider, Input, Form } from "antd";
import ZForm from "../../../components/ui/ZForm";
import ZInput from "../../../components/ui/ZInput";

import { bloodGroups, gender } from "./userManagement.constant";

import ZDatePicker from "../../../components/ui/ZDatePicker";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllSemesterQuery,
} from "../../../redux/features/admin/academicSemesterApi";
import ZSelect from "../../../components/ui/ZSelect";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagementApi";

const CreateStudent: React.FC = () => {
  const [addStudent] = useAddStudentMutation();

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemesterQuery(undefined);
  const {
    data: departmentData,
    isLoading: isDeptLoading,
    isFetching: isDeptFetching,
  } = useGetAllAcademicDepartmentQuery(undefined, { skip: isLoading });

  const semesterOptions = semesterData?.data?.map((i) => ({
    value: i._id,
    label: `${i.name} ${i.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", JSON.stringify(data.profileImg));

    addStudent(formData);
    // console.log(Object.fromEntries(formData));
  };

  return (
    <ZForm onSubmit={onSubmit}>
      <Divider>Personal Info</Divider>
      <Row gutter={16}>
        <Col span={24} md={12} lg={8}>
          <ZInput type="text" name="name.firstName" label="First Name" />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput type="text" name="name.middleName" label="Middle Name" />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput type="text" name="name.lastName" label="Last Name" />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZSelect
            disabled={
              isLoading || isFetching || isDeptFetching || isDeptLoading
            }
            name="gender"
            label="Gender"
            options={gender}
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZDatePicker name="dateOfBirth" label="Date of Birth" />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput type="text" name="email" label="Email" />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZSelect
            disabled={
              isLoading || isFetching || isDeptFetching || isDeptLoading
            }
            name="bloogGroup"
            label="Blood Group"
            options={bloodGroups}
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput type="text" name="contactNo" label="Contact No" />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="emergencyContactNo"
            label="Emergency Contact No"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput type="text" name="presentAddress" label="Present Address" />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="permanentAddress"
            label="Permanent Address"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <Controller
            name="profileImg"
            render={({ field: { onChange, value, ...field } }) => (
              <Form.Item label="Profile Image">
                <Input
                  {...field}
                  value={value?.fileName}
                  onChange={(e) => {
                    onChange(e.target.files?.[0]);
                  }}
                  type="file"
                />
              </Form.Item>
            )}
          />
        </Col>
      </Row>

      <Divider>Guardian Info</Divider>
      <Row gutter={16}>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="guardian.fatherName"
            label="Father's Name"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="guardian.fatherOccupation"
            label="Father's Occupation"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="guardian.fatherContactNo"
            label="Father's Contact No"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="guardian.motherName"
            label="Mother's Name"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="guardian.motherOccupation"
            label="Mother's Occupation"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="guardian.motherContactNo"
            label="Mother's Contact No"
          />
        </Col>
      </Row>

      <Divider>Local Guardian Info</Divider>
      <Row gutter={16}>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="localGuardian.name"
            label="Local Guardian Name"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="localGuardian.occupation"
            label="Local Guardian Occupation"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="localGuardian.contactNo"
            label="Local Guardian Contact No"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZInput
            type="text"
            name="localGuardian.address"
            label="Local Guardian Address"
          />
        </Col>
      </Row>
      <Divider> Academic Semester Info</Divider>
      <Row gutter={16}>
        <Col span={24} md={12} lg={8}>
          <ZSelect
            disabled={
              isLoading || isFetching || isDeptFetching || isDeptLoading
            }
            options={semesterOptions}
            name="admissionSemester"
            label="Admission Semester"
          />
        </Col>
        <Col span={24} md={12} lg={8}>
          <ZSelect
            options={departmentData}
            name="academicDepartment"
            label="Academic Department"
          />
        </Col>
      </Row>
      <Row justify="center" style={{ margin: "16px 0px" }}>
        <Col>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </ZForm>
  );
};

export default CreateStudent;
