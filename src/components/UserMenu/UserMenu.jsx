import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
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
                <Link className="nav-text" to="/profile" title="Perfil">Perfil Publico</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link className="nav-text" to="/account" title="Cuenta">Cuenta</Link>
                </Menu.Item>
                <Menu.Item key="8">
                    <Link className="nav-text" to="/settings" title="Configuracion">Configuracion</Link>
                </Menu.Item>
                <Menu.Item key="9">
                    <Link className="nav-text" to="/logout" title="Desconectarse">Desconectarse</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default UserDetails;