import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../components/Header';
import CardExampleWithAvatar from '../components/CardExampleWithAvatar';
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple';

const styles = {
    center_content: {
        paddingTop: '50px',
        paddingBottom: '50px',
    }
};

const Main = ({ children}) => (
    <div>
    <Header />
    <div style={styles.center_content}>
    {children}
    </div>
    <BottomNavigationExampleSimple />
    </div>
);

export default Main;