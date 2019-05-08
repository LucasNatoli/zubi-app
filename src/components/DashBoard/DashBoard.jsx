import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Iso from '../../assets/images/logo-icon.png';
import Logo from '../../assets/images/logo-text.png';
import { Link } from 'react-router-dom';
import IsoBlue from '../../assets/images/iso-color-blue.svg';
import UserDetails from '../UserDetails/UserDetails';
import Consulting from '../Consulting-draft/Consulting';
import Capacitaciones from '../Capacitaciones/Capacitaciones';
import Agenda from '../Agenda/Agenda'
import './DashBoard.css';
import Home from './Home'

class DashBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,
      selectedKey: '1'
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {

    const { Header, Content, Footer, Sider } = Layout;
    const page = this.props.page

    return (
      <Layout className="dashboard">

        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="200"
          trigger={null}
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed) => { this.setState({ collapsed: collapsed }) }}
          collapsible
          collapsed={this.state.collapsed}

        >
          <div className="logo">
            <img src={Iso} alt="Zubi-Logo" className="logo-iso" />
            <img src={Logo} alt="Zubi-Logo" className="logo-text" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.selectedKey}>
            <Menu.Item key="1">
              <Link className="nav-text" href="#" to="/" title="DashBoard">
                <Icon type="user" />DashBoard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link className="nav-text" href="/mis-consultorias" to="/mis-consultorias" title="Mis Consultorias">
                <Icon type="video-camera" />
                Consultorias</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link className="nav-text" href="/mis-capacitaciones" to="/mis-capacitaciones" title="Mis Capacitaciones">
                <Icon type="upload" />
                <span className="nav-text">Capacitaciones</span>
              </Link>

            </Menu.Item>
            <Menu.Item key="4">
              <Link className="nav-text" href="/agenda" to="/agenda" title="Agenda">
                <Icon type="user" />
                Agenda
            </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span className="nav-text">Cerrar Session</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className="header">

            <div className={this.state.collapsed ? "trigger" : "trigger open"} onClick={this.toggle}>
              <img src={IsoBlue} alt="Zubi-Logo" className="logo-iso"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              />
            </div>
            <UserDetails />
          </Header>
          <Content>
            <div className="content" style={{ padding: 24, background: '#fff', minHeight: 360 }}>

              {page === "home" ? <Home /> : ""}
              {page === "consulting-list" ? <Consulting /> : ""}
              {page === "training-list" ? <Capacitaciones /> : ""}
              {page === "agenda" ? <Agenda /> : ""}

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Footer
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashBoard;