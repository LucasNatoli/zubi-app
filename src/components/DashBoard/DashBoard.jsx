import React from 'react';
import { Layout } from 'antd';
import IsoBlue from '../../assets/images/logo-icon_blue.png';
import UserDetails from '../UserDetails/UserDetails';
import Consulting from '../Consulting-draft/Consulting';
import Capacitaciones from '../Capacitaciones/Capacitaciones';
import Agenda from '../Agenda/Agenda'
import './DashBoard.css';
import MySider from './MySider'


class DashBoard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed : false,
      selectedKey: '1'
    }
  }
  render() {

    const { Header, Content, Footer} = Layout;
    const page = this.props.page

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
         
            {page === "consulting-list" ? <Consulting /> : ""}
            {page === "training-list" ? <Capacitaciones /> : ""}
            {page === "training-list" ? <Capacitaciones /> : ""}
            
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