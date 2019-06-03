import React from 'react'
import { Avatar, Card, Icon, List } from 'antd'
import { Link } from 'react-router-dom'
import './ChatList.css'
import { IntlProvider, FormattedDate } from "react-intl";
import { FormattedRelative } from 'react-intl';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class ChatList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { chats, onChatClick } = this.props
    const intlData = {
      "locales": "es-AR"
    };
    return (
      <Card title="Conversaciones">
        <IntlProvider locale='es-AR'>
          <List
            itemLayout="horizontal"
            size="large"
            dataSource={chats}
            renderItem={chat => (
              <List.Item key={chat.message_from_user_id}
                actions={[
                  <Link href="/editar-consultoria" to="editar-consultoria" onClick={() => onChatClick(chat.message_from_user_id)} {...chat}>
                    <IconText type="message" text={chat.messsage_count} />
                  </Link>]}
                extra={
                  <FormattedRelative value={parseInt(chat.last_sent)} format="hour" className="last-sent" />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={"De: " + chat.user_login}
                  description={"Consultoria: " + chat.post_name}
                />
              </List.Item>
            )}
          />
        </IntlProvider>
      </Card>
    )
  }
}
/* 
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
} */

export default ChatList