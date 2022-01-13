import { Form, Input, Button, message } from "antd";
import { LockFilled } from "@ant-design/icons";

const SetPassword = (props:any) => {
  const setNewPassword = () => {
      props.registerUser();
  };
  return (
    <Form
      name="normal_login"
      autoComplete="off"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={setNewPassword}
    >
     
      <h1
        style={{
          fontWeight: "bold",
          color: "#348CFF",
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        SET PASSWORD
      </h1>
      <Form.Item
        className="message"
        name="newpassword"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
          {
            pattern: /^(?=.{6,})/,
            message: "The min number of characters is 6",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          type="password"
          size="large"
          prefix={<LockFilled className="site-form-item-icon" />}
          placeholder="New Password"
          className="antinput"
        />
      </Form.Item>
      <Form.Item
        className="message"
        name="conpassword"
        dependencies={["newpass"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "This field is required",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newpassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(
                  "Password does not match please Enter correct password"
                )
              );
            },
          }),
        ]}
      >
        <Input.Password
          type="password"
          size="large"
          prefix={<LockFilled className="site-form-item-icon" />}
          placeholder="Confirm Password"
          className="antinput"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="btn btn-rounded btn-primary btn-block mt-2"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SetPassword;
