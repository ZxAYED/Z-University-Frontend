import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";

interface IZSelect {
  label: string;
  name: string;
  options?: {
    label?: string;
    value?: string;
  }[];
}

const ZSelect = ({ label, name, options }: IZSelect) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Space>
            <Select
              {...field}
              style={{ width: "200px" }}
              defaultValue={options[0]?.label}
              options={options}
              size="middle"
            />
            {error ? (
              <small style={{ color: "red" }}>{error?.message}</small>
            ) : (
              ""
            )}
          </Space>
        </Form.Item>
      )}
    />
  );
};

export default ZSelect;
