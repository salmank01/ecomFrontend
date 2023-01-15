import {
  NameInput,
  Category,
  UploadButton,
  Description,
  Price,
  Quantity,
} from "../../atoms/inputs/inputs";
import { Form, Space, Button, Col, Row } from "antd";
import "../../atoms/antD.css";
import axios from "axios";

export const AddProduct = ({ ws }: any) => {
  console.log(ws);
  // FormData
  let formData: any = new FormData();

  // destructure antd form item
  const { Item } = Form;

  // upload file
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    // append image to formData
    formData.append("images", e.fileList);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // handle submit
  const handleSubmit = (values: any) => {
    console.log(values);
    formData.append("name", values.name);
    formData.append("category", values.category);
    console.log(formData);

    axios
      .post("http://localhost:4000/ecommerce/product", formData)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div className="addProduct">
      <Space
        style={{
          width: "100%",
          backgroundColor: "white",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
          overflow: "hidden",
          borderRadius: "8px",
          padding: " 48px",
        }}
      >
        <Form onFinish={handleSubmit} style={{ width: "100%" }}>
          <Row gutter={16}>
            <Col span={ws < 610 ? 24 : 12}>
              <Item
                name="name"
                rules={[{ required: true, message: "Name is required!" }]}
              >
                {NameInput}
              </Item>
            </Col>

            <Col span={ws < 610 ? 24 : 12}>
              <Item
                name="category"
                rules={[{ required: true, message: "Category is required!" }]}
              >
                {Category}
              </Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Item
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                  { required: true, message: "Product Image(s) required!" },
                ]}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {UploadButton}
              </Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Item
                name="description"
                rules={[
                  { required: true, message: "Description is required!" },
                ]}
              >
                {Description}
              </Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={ws < 610 ? 24 : 12}>
              <Item
                name="price"
                rules={[{ required: true, message: "Price is required!" }]}
              >
                {Price}
              </Item>
            </Col>

            <Col span={ws < 610 ? 24 : 12}>
              <Item
                name="quantity"
                rules={[{ required: true, message: "Quantity is required!" }]}
              >
                {Quantity}
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Item style={{ width: "100%" }}>
                <Button
                  htmlType="submit"
                  style={{
                    width: "100%",
                    fontSize: "1.3rem",
                    padding: "1rem",
                    backgroundColor: "#4E97FD",
                    height: "4rem",
                    color: "white",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                  }}
                >
                  Submit
                </Button>
              </Item>
            </Col>
          </Row>
        </Form>
      </Space>
    </div>
  );
};
