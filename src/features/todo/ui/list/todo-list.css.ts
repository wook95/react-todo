import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const todoDescriptionContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const todoDescriptionContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const todoDescriptionContent = style({
  fontSize: '12px',
  color: colors.grey['500'],
});

export const contextButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '4px',
  selectors: {
    '&:hover': {
      backgroundColor: colors.grey['100'],
    },
  },
});

export const contextContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '4px',
  width: '150px',
  padding: '8px',
  border: `1px solid ${colors.grey['200']}`,
  borderRadius: '4px',
  backgroundColor: colors.grey['000'],
  zIndex: 1,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

export const contextButtonContainer = style({
  display: 'flex',
  gap: '8px',
});

// dialog
export const dialogOverlay = style({
  backgroundColor: colors.grey['900'],
  opacity: 0.5,
  position: 'fixed',
  inset: 0,
});

export const dialogContentContainer = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  minWidth: '500px',
  minHeight: '500px',
  width: '80%',
  height: '80%',
  backgroundColor: colors.grey['000'],
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

export const dialogContent = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const dialogTitle = style({
  marginBottom: '4px',
  fontSize: '20px',
  fontWeight: 'bold',
});

export const dialogDescription = style({
  fontSize: '14px',
  color: colors.grey['500'],
});

export const dialogHeader = style({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingBottom: '16px',
  borderBottom: `1px solid ${colors.grey['200']}`,
});

export const dialogCloseButton = style({
  fontSize: '14px',
  color: colors.grey['700'],
});

export const dialogContentBody = style({
  display: 'flex',
  height: '100%',
});

export const dialogContentBodyContent = style({
  flex: 1,
  display: 'flex',
  padding: '16px',
});

export const detailCheckbox = style({
  marginRight: '12px',
});

export const dialogContentBodySideBar = style({
  padding: '16px',
  minWidth: '240px',
  borderLeft: `1px solid ${colors.grey['200']}`,
  backgroundColor: colors.grey['100'],
});

export const sideBarSection = style({
  marginBottom: '24px',
});

export const sideBarTitle = style({
  fontSize: '12px',
  color: colors.grey['500'],
  marginBottom: '4px',
});

export const sideBarContent = style({
  fontSize: '14px',
  color: colors.grey['700'],
});
