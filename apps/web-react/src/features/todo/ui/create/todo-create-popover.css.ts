import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const popoverContent = style({
  backgroundColor: colors.grey['000'],
  padding: '16px',
  width: '550px',
  borderRadius: '10px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const input = style({
  width: '100%',
  selectors: {
    '&:placeholder-shown': {
      color: colors.grey['400'],
    },
  },
});

export const titleInput = style([
  input,
  {
    fontSize: '20px',
    fontWeight: 'bold',
  },
]);

export const contentInput = style([
  input,
  {
    fontSize: '14px',
    color: colors.grey['600'],
  },
]);

export const submitButtonContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  marginTop: '12px',
  paddingTop: '12px',
  borderTop: `1px solid ${colors.grey['300']}`,
});

export const cancelButton = style({
  backgroundColor: colors.grey['200'],
  color: colors.grey['900'],
  borderRadius: '4px',
  padding: '8px 12px',
  selectors: {
    '&:hover': {
      backgroundColor: colors.grey['300'],
    },
  },
});

export const submitButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  width: '100px',
  backgroundColor: colors.red['600'],
  color: colors.grey['000'],
  borderRadius: '4px',
  padding: '8px 12px',
  selectors: {
    '&:hover': {
      backgroundColor: colors.red['700'],
    },
    '&:disabled': {
      backgroundColor: colors.red['200'],
      cursor: 'not-allowed',
    },
  },
});

export const menuButton = style({
  width: '100%',
  padding: '8px 4px',
});

export const menuItemPlus = style([
  {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    width: '100%',
    color: colors.red[700],
  },
]);

export const menuItemIcon = style({
  width: '16px',
  height: '16px',
});

export const errorMessage = style({
  color: colors.red['600'],
});
