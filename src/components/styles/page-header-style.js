import { 
  // appColorWhite, 
  appColorPrimaryDark, 
  // appColorSecondary2Light, 
  appColorComplement, 
  appColorComplementLight 
} from './theme';

export const pageHeaderContainerStyles = {
  backgroundColor: appColorPrimaryDark,
  color: appColorComplementLight,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '0px',
  height: '15vh',
  width: '100vw',
  position: 'fixed'
};

export const pageHeaderIconStyles = {
  color: appColorComplement,
  paddingTop: '15px',
  marginBottom: '15px'
};

export const pageHeaderSubheaderStyles = {
  color: appColorComplementLight
};