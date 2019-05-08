import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import IsoBlue from '../../assets/images/iso-color-blue.svg';
import UserDetails from '../UserDetails/UserDetails';
import Consulting from '../Consulting-draft/Consulting';
import Capacitaciones from '../Capacitaciones/Capacitaciones';
import Agenda from '../Agenda/Agenda'
import './DashBoard.css';
import MySider from './MySider'
import Home from './Home'

class DashBoard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed : false,
      selectedKey: '1'
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {

    const { Header, Content, Footer} = Layout;
    const page = this.props.page

    return (
      <Layout className="dashboard">
        <MySider></MySider>

        <Layout>
          <Header className="header">
             
            <div className={this.state.collapsed ? "logo" : "logo open"}>
              <img src={IsoBlue} alt="Zubi-Logo" className="logo-iso trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
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