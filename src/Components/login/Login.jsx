import img from "../../assets/images/Connected world-amico.png";
import "./login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Alert } from "antd";
import { useState } from "react";
import {Link} from "react-router-dom";

const Login = () => {
  const [showAlert, setshowAlert] = useState(false);
  
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    console.log(body);
    if (!body.error) {
      setLoginSuccess(true);
      setEmail("");
      setPassword("");
    } else {
      setshowAlert(true);
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };


  return (
      <>
    <div className="mainAlertContainer">
      {loginSuccess && (
        <Alert
          message="Success"
          description="You have logged in successfully"
          type="success"
          showIcon
          closable
        />
      )}
        {
            showAlert && (
                <Alert
                    message="Error Tips"
                    description="Detailed description and advice about successful copywriting."
                    type="error"
                    showIcon
                    closable
                />
            ) 
        }
      
      </div>
      <div className="mainContainer">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h1>Welcome Back</h1>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            onChange={(e)=>setEmail(e.target.value)}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            onChange={(e)=>setPassword(e.target.value)}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="login-form-button" onClick={handleSubmit}>
              Log in
            </Button>
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
              <Link className="login-form-forgot" to="/">
                Forgot password
              </Link>
            </Form.Item>
          </Form.Item>
        </Form>
        <div className="imgContainer">
          <img src={img} alt="img1" className="mainImg" />
        </div>
      </div>
      </>
  );
};

export default Login;