import React from 'react'
import { List, Icon } from 'antd'

const NotificationsList = ({ notification, onNotificationClick }) => (
  <List
      itemLayout="horizontal"
      dataSource={notification}
      renderItem={noti => (
        <List.Item  key={noti.id}  onClick={() => onNotificationClick(noti.id)} {...noti}>
          <List.Item.Meta
            avatar={<Icon type={noti.post_type} style={{fontSize: '24px', color: '#648cff'}}/>}
            title={noti.post_title}
            description={noti.post_content}
          />
        </List.Item>
      )}
    />
)

export default NotificationsList