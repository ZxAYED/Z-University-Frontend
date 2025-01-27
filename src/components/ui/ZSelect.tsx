import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

interface IZSelect {
  label: string;
  name: string;
  disabled?: boolean;
  options?: {
    label?: string;
    value?: string;
  }[];
}

const ZSelect = ({ label, name, options, disabled }: IZSelect) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            options={options}
            size="middle"
            disabled={disabled}
          />
          {error ? (
            <small style={{ color: "red" }}>{error?.message}</small>
          ) : (
            ""
          )}
        </Form.Item>
      )}
    />
  );
};

export default ZSelect;
