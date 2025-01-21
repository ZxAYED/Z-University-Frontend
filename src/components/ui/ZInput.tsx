import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInputProps {
  type: string;
  name: string;
  label?: string;
}

export default function ZInput({ type, name, label }: IInputProps) {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Item label={label} style={{ fontSize: "1.2rem" }}>
            <Input
              {...field}
              id={name}
              placeholder="type here"
              type={type}
            ></Input>
          </Form.Item>
        )}
      />
    </>
  );
}
