import React from 'react'
import { List, Avatar } from 'antd'

const NotificationsList = ({ notification, onNotificationClick }) => (
  <List
      itemLayout="horizontal"
      dataSource={notification}
      renderItem={noti => (
        <List.Item  key={noti.id}  onClick={() => onNotificationClick(noti.id)} {...noti}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={noti.post_title}
            description={noti.post_content}
            extra={
              <div class="image-placeholder">
                  <h4>image placeholder text</h4>
              </div>
            }
          />
        </List.Item>
      )}
    />
)

export default NotificationsList