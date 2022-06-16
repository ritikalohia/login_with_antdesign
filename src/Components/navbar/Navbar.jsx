import { Layout, Menu, Button } from 'antd';
import './navbar.css';
import logo from "../../assets/images/ATools.png";

const { Header} = Layout;
const Navbar = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" >
          <img src={logo} alt="logo"/>
      </div>
      <Menu>
          <Button style={{backgroundColor:"#023047"}}>Start Free Trial</Button>
          <Button style={{backgroundColor:"#F6842B"}}>Login</Button>
      </Menu>
    </Header>
  </Layout>
);

export default Navbar;