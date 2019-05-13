import React from 'react';
import { Badge, Avatar, Popover } from 'antd';
import UserMenu from '../UserMenu/UserMenu'
import './UserDetails.css';

const content = (
    <UserMenu />
  );
  
class UserDetails extends React.Component {

    render() {
          
        return (
        <Popover placement="bottomRight" content={content} trigger="hover">
            <div className="user-details">
                <span style={{ marginRight: 16 }}>
                    <Badge count={1}>
                        <Avatar  icon="user" />
                    </Badge>
                </span>
            </div>
        </Popover>
        );
    }
}

export default UserDetails;