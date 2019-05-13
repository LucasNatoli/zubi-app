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
            <div className="user-details">
                <Popover placement="topRight" content={content} trigger="hover">
                    <Badge count={1}>
                        <Avatar  icon="user" />
                    </Badge>
                </Popover>
            </div>
        );
    }
}

export default UserDetails;