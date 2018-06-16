import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import { pageHeaderContainerStyles, pageHeaderIconStyles, pageHeaderSubheaderStyles } from './styles/page-header-style';

import './styles/page-header.css';

// import { appColorBlack, appColorWhite } from './styles/theme';

// const pageHeaderContainerStyles = {
//   backgroundColor: appColorBlack,
//   color: appColorWhite,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center'
// };

// const pageHeaderIconStyles = { 
//   paddingTop: '15px', 
//   marginBottom: '15px' 
// };

// const pageHeaderSubheaderStyles = {
//   color: appColorWhite
// };

export const PageHeader = () => <Header as="h1" style={pageHeaderContainerStyles}>
           <Icon name="trophy" style={pageHeaderIconStyles} />
           Achievement Board
           <Header.Subheader style={pageHeaderSubheaderStyles}>
             See all that you've accomplished
           </Header.Subheader>
         </Header>;