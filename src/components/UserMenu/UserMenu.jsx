import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './UserMenu.css';

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          collapsed: true,
          selectedKey: '6'
        }
      }
    render() {
          
        return (
            <Menu theme="light" mode="inline" defaultSelectedKeys={this.state.selectedKey}>
                <Menu.Item key="6">
                    <Link className="nav-text" href="/profile" to="/profile" title="Perfil Publico">
                    <Icon type="video-camera" />Perfil Publico</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link className="nav-text" href="/account" to="/account" title="Cuenta">
                        <Icon type="upload" /><span className="nav-text">Cuenta</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="8">
                    <Link className="nav-text" href="/settings" to="/settings" title="Configuracion">
                        <Icon type="user" />
                        <span className="nav-text">Configuracion</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="9">
                    <Link className="nav-text" href="/logout" to="/" title="Desconectarse">
                        <Icon type="user" />
                        <span className="nav-text">Desconectarse</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default UserDetails;