import { Input, Upload, Select, Button, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../antD.css";
// Name Input
export const NameInput = (
  <Input
    placeholder="Name"
    style={{
      height: "4rem",
      width: "100%",
      fontSize: "1.2rem",
    }}
  />
);

// Categories

const { Option } = Select;
export const Category = (
  <Select
    className="antSelect"
    placeholder="Select Category"
    size="large"
    style={{
      height: "4rem",
      width: "100%",
      display: "flex",
      alignItems: "center",
      border: "1px solid #d9d9d9",
      borderRadius: "6px",
    }}
    bordered={false}
  >
    <Option style={{ fontSize: "1.2rem" }} value="Electronics">
      Electronics
    </Option>
    <Option style={{ fontSize: "1.2rem" }} value="Cosmetics">
      Cosmetics
    </Option>
    <Option style={{ fontSize: "1.2rem" }} value="Toys">
      Toys
    </Option>
  </Select>
);

// upload file
const dummyRequest = ({ file, onSuccess }: any) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};
export const UploadButton = (
  <Upload
    name="logo"
    listType="picture"
    customRequest={dummyRequest}
    style={{ width: "100%", textAlign: "center" }}
  >
    <Button
      style={{
        fontSize: "1.2rem",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      icon={<UploadOutlined />}
    >
      Click to upload
    </Button>
  </Upload>
);

// Description
const { TextArea } = Input;
export const Description = (
  <TextArea
    style={{ fontSize: "1.2rem" }}
    rows={12}
    placeholder="Description"
  />
);

// Price
export const Price = (
  <InputNumber
    className="antInputNumber"
    bordered={false}
    addonBefore="$"
    placeholder="Price"
    min="0"
    style={{ width: "100%" }}
  />
);

// Quantity
export const Quantity = (
  <InputNumber
    style={{ width: "100%" }}
    className="antInputNumber"
    addonBefore="Qty"
    placeholder="Quantity"
    min="1"
  />
);
