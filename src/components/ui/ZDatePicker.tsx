import { DatePicker, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInputDatePicker {
  name: string;
  label?: string;
}

export default function ZDatePicker({ name, label }: IInputDatePicker) {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Item label={label} style={{ fontSize: "1.2rem" }}>
            <DatePicker
              style={{ width: "100%" }}
              {...field}
              id={name}
              size="large"
            ></DatePicker>
          </Form.Item>
        )}
      />
    </>
  );
}
