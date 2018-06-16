import React from 'react';

import { pageFooterContainerStyles } from './styles/page-footer-style';

export const Footer = () => (
  <div style={pageFooterContainerStyles}>
    <p>© {new Date().getFullYear()} Kyle Spresser</p>
  </div>
);
