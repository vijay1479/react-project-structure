import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LinkedinOutlined, GoogleOutlined } from "@ant-design/icons";
import { OmitProps } from "antd/lib/transfer/ListBody";

const RegistrationForm = (props:any) => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("props", props);
    props.onSetIndex();

  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
       <p>
        <Button type="primary">
          {" "}
          <LinkedinOutlined /> Continue with LinkedIn
        </Button>{" "}
        <Button type="primary">
          {" "}
          <GoogleOutlined />
          Continue with Google
        </Button>
      </p>
      <p style={{ textAlign: "center" }}>
        {" "}
        {props.title} {props.currentModal} {props.totalModals}
        <h3>OR</h3>
      </p>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
