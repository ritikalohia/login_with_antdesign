import img from '../../assets/images/Connected world-amico.png';
import './login.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import {useState} from 'react';



const Login = () => {
    const [showAlert, setshowAlert] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [email,setEmail] =useState("");
    const [password, setPassword]=useState("");

  async function login(){
    console.warn(email, password);
    let item={email,password};
    let result = await fetch("https://reqres.in/api/login",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });
    if(result.status==200){
        setLoginSuccess(true);
    }

    result=await result.json();
    localStorage.setItem(JSON.stringify(result), 0 );
  }


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
     setTimeout(() => {
         setshowAlert(true)
    },200);
  };
  //console.log(showAlert, loginSuccess);



  return (
    <div className="mainAlertContainer">
        { (showAlert && loginSuccess) ?
            <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
            closable
          /> :

            <Alert
                message="Error"
                description="Wrong password or wrong email!!"
                type="error"
                showIcon
                closable
            />
          
        }
        
        <div className="mainContainer">
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        //onSubmit={onSubmit}
        >
            <h1>Welcome Back</h1>
            <Form.Item
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
                onChange={(e)=>setEmail(e.target.value)}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
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
                <Button htmlType="submit" className="login-form-button" 
                onClick={login}
                >
                Log in
                </Button>
            </Form.Item>

            <Form.Item >
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
                </Form.Item>   
            </Form.Item>
        </Form>
        <div className='imgContainer'>
            <img src={img} alt="img1" className='mainImg'/>
        </div>
     </div>
    </div>
  );
};

export default Login;
