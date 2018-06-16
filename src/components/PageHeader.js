import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import { pageHeaderContainerStyles, pageHeaderIconStyles, pageHeaderSubheaderStyles } from './styles/page-header-style';

export const PageHeader = () => (
  <Header as="h1" style={pageHeaderContainerStyles}>
    <Icon name="trophy" style={pageHeaderIconStyles} />
    Achievement Board
    <Header.Subheader style={pageHeaderSubheaderStyles}>
      See all that you've accomplished
    </Header.Subheader>
  </Header>
);