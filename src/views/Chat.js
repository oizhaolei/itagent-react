import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import MessageList from '../components/MessageList';
import ChatSend from '../components/ChatSend';

class Chat extends Component  {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    const { match, history } = this.props;
    return (
        <div>
        <div className="top">
        <AppBar
      title={match.params.id}
      iconElementLeft={<IconButton onTouchTap={() => history.push('/')}><NavigationClose /></IconButton>}
        />
        </div>
        <div className="center_content">
        <MessageList />
        </div>
        <div className="bottom">
        <ChatSend />
        </div>
        </div>
        );
    }
}
export default Chat;