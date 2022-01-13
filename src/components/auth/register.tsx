import { Button, Modal } from "antd";
import VerifyOTP from "./verify-otp";
import SetPassword from "./set-password";
import { connect } from "react-redux";
import { LoginUser } from "../../store/auth";
import RegistrationForm from "./registerationForm";
import { useState } from "react";

const Register = (props: any) => {
  const [currIndex ,setCurIndex] = useState(0);
  const components = [<RegistrationForm onSetIndex = {()=>setCurIndex(1)}/> ,<VerifyOTP onSetIndex = {()=>setCurIndex(2)}/>, <SetPassword/>]

  return (
    <Modal
      title="Register"
      visible={props.visible}
      onCancel={() => {
        props.closeModal();
      }}
      footer={false}
    >
    
      { components[currIndex] }
     
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
