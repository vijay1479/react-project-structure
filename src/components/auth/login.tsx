import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { connect } from "react-redux";
import { LoginUser } from "../../store/auth";
import { LinkedinOutlined, GoogleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  let navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    props.loginUser(true);
    props.closeModal();
  };

  return (
    <Modal
      title="Login"
      visible={props.visible}
      onCancel={() => {
        props.closeModal();
        navigate(-1);
      }}
      footer={false}
    >
      <p><Button type="primary"> <LinkedinOutlined />Continue with LinkedIn</Button> <Button type="primary"> <GoogleOutlined />Continue with Google</Button></p>


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
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            className="login-form-forgot"
            onClick={() => props.openForgotPassword()}
          >
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (p1: any) => dispatch(LoginUser(p1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
