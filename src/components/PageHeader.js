import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

// import { pageHeaderContainerStyles } from './styles/page-header-style';

import './styles/page-header.css';
import { appColorBlack, appColorWhite } from './styles/theme';

const pageHeaderContainerStyles = {
  backgroundColor: appColorBlack,
  color: appColorWhite,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const PageHeader = () => <Header as="h1" style={pageHeaderContainerStyles}>
           <Icon name="trophy" style={{ paddingTop: '15px', marginBottom: '15px' }} />
           <span style={{}}>Achievement Board</span>
           <Header.Subheader style={{ color: appColorWhite }}>
             See all that you've accomplished
           </Header.Subheader>
         </Header>;