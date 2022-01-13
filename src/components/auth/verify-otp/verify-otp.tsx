import { Form, Input, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const VerifyOTP = (props:any) => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        props.onSetIndex();
      };

    return ( <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true ,message: 'Please input OTP!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="OTP" />
        </Form.Item>
      
       
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Verify OTP
          </Button>
        </Form.Item>
      </Form>);
}
 
export default VerifyOTP;