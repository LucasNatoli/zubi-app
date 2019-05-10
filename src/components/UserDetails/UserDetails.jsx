import React from 'react';

import { Badge, Avatar, Icon } from 'antd';
import './UserDetails.css';

class UserDetails extends React.Component {

    render() {
          
        return (
            <div className="user-details">
                <span style={{ marginRight: 16 }}>
                    <Badge count={1}>
                        <Avatar  icon="user" />
                    </Badge>
                </span>
            </div>
        );
    }
}

export default UserDetails;