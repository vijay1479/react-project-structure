import { Link, BrowserRouter, useLocation, useParams } from "react-router-dom";
import { Layout, Menu, } from 'antd';
import './Header.css';
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import ForgotPassword from "../components/auth/forgot-passowrd";
import { useState } from "react";
import { connect } from "react-redux";
import { LoginUser } from "../store/auth";


const { Header } = Layout;

const Header_ = (props:any) => {
  const [loginVisible ,setLoginVisible] = useState(false);
  const [registerVisible ,setRegisterVisible] = useState(false);
  const [forgotVisible, setForgotVisible] = useState(false);
  let location = useLocation();
  
  const openForgotPasswordModal = ()=>{
      setLoginVisible(false);
      setForgotVisible(true);
  }
  
  return (
   <>
    <Header>
      <div className="logo" /> 
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key={1}>Companies</Menu.Item>
      <Menu.Item key={2}>Startups</Menu.Item>
      <Menu.Item key={3}>Jobs</Menu.Item>
      {!props.isLoggedIn && <Menu.Item key={4} onClick={()=>setLoginVisible(true)} ><Link  to={`/login/`}  state={{ backgroundLocation: location }}>Login</Link></Menu.Item>}
      {!props.isLoggedIn && <Menu.Item key={5} onClick={()=>setRegisterVisible(true)}>Register</Menu.Item>}
      {props.isLoggedIn && <Menu.Item key={3} onClick={()=>props.loginUser(false)}>Logout</Menu.Item>}

     </Menu>
    </Header>
    <Login visible={loginVisible} closeModal={()=>setLoginVisible(false)} openForgotPassword={()=>openForgotPasswordModal()}/>
    <Register visible={registerVisible} closeModal={()=>setRegisterVisible(false)}/>
    <ForgotPassword visible={forgotVisible} closeModal={()=>setForgotVisible(false)}/>

   </>
  );
};

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
  };

  const mapDispatchToProps = (dispatch: any) => {
    return {
      loginUser:(p1:any)=>dispatch(LoginUser(p1))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Header_);
