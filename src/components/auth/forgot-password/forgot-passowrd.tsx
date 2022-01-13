import { Form, Input, Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import VerifyOTP from "../verify-otp/verify-otp";
import SetPassword from "../set-password/set-password";

const ForgotPassword = (props: any) => {
  const [openVerify, setOpenVerify] = useState(false);
  const [openSetPassword ,setOpenSetPassword] = useState(false);
  
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    setOpenVerify(true);
    setOpenSetPassword(false);

  };

  useEffect(() => {
    console.log(props.visible);
  }, []);

  return (
    <div>
      <Modal
        title="Forgot Password"
        visible={props.visible}
        onCancel={() => {
            props.closeModal();
            setOpenVerify(false);
            setOpenSetPassword(false);
        }}
        footer={false}
      >
        {!openVerify && !openSetPassword && (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your Emaul!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Verify Email"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Verify
              </Button>
            </Form.Item>
          </Form>
        )}
        {openVerify && (
          <VerifyOTP
            hideOTPForm={() => {
              setOpenVerify(false);
              setOpenSetPassword(true)
            }}
          />
        )}
        {
            openSetPassword && <SetPassword/>
        }
      </Modal>
    </div>
  );
};

export default ForgotPassword;
