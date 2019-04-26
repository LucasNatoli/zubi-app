import React from 'react';
import { Badge, Avatar } from 'antd';
import './UserDetails.css';

class UserDetails extends React.Component {

    render() {
          
        return (
            <div className="user-details">
                <span style={{ marginRight: 24 }}>
                <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
                </span>
                <h4>NestorK1973</h4>
            </div>
        );
    }
}

export default UserDetails;