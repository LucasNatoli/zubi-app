import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Iso from '../../assets/images/logo-icon.png';
import Logo from '../../assets/images/logo-text.png';
import { Link } from 'react-router-dom';


class MySider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      selectedKey: '1'
    }
  }
  render() {
    const { Sider } = Layout
    return (

      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="200"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed) => { this.setState({ collapsed: collapsed }); }}
      >
        <div className="logo">
          <img src={Iso} alt="Zubi-Logo" className="logo-iso" />
          <img src={Logo} alt="Zubi-Logo" className="logo-text" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.selectedKey}>
          <Menu.Item key="1">
            <Icon type="user" />

            <Link href="#" to="/" title="DashBoard">DashBoard</Link>

          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <Link className="nav-text" href="/mis-consultorias" to="/mis-consultorias" title="Mis Consultorias">Consultorias</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link className="nav-text" href="/mis-capacitaciones" to="/mis-capacitaciones" title="Mis Capacitaciones">
              <Icon type="upload" />
              <span className="nav-text">Capacitaciones</span>
            </Link>
            
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">Agenda</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="user" />
            <span className="nav-text">Cerrar Session</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default MySider