import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Iso from '../../assets/images/logo-icon.png';
import Logo from '../../assets/images/logo-text.png';
import IsoBlue from '../../assets/images/logo-icon_blue.png';
import UserDetails from '../UserDetails/UserDetails';
import Consulting from '../Consulting-draft/Consulting';
import Capacitaciones from '../Capacitaciones/Capacitaciones';
import Agenda from '../Agenda/Agenda'
import './DashBoard.css';
import { Route } from 'react-router-dom';
import { Anchor } from 'antd';
import MySider from './MySiderbar'


class DashBoard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed : false,
      selectedKey: '1'
    }
  }
  render() {

    const {
      Header, Content, Footer, Sider,
    } = Layout;
    const page = this.props.page
    console.log("rendering", this.props.page)
    return (
      <Layout className="dashboard">
        <MySider></MySider>

        <Layout>
          <Header className="header">
             
            <div className={this.state.collapsed ? "logo" : "logo hidden"}>
              <img src={IsoBlue} alt="Zubi-Logo" className="logo-iso" />
            </div>
            <UserDetails />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="content" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
         
            {page == "consulting-list" ? <Consulting /> : ""}
            {page == "training-list" ? <Capacitaciones /> : ""}
            
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