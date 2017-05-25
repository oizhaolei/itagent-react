import React, {Component} from 'react';
import { withRouter } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class SearchBar extends Component {

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
        <AppBar
      title="输入任意内容搜索"
      iconElementLeft={<IconButton onTouchTap={() => this.props.history.push('/')}><NavigationClose /></IconButton>}
        />
    );
  }
}

export default withRouter(SearchBar);