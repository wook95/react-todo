import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const sidebarContainer = style({
  padding: '12px',
  height: '100%',
  width: '280px',
  backgroundColor: `${colors.grey['050']}`,
});

export const sidebarUserContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  width: 'fit-content',
  padding: '4px',
  borderRadius: '4px',
  cursor: 'pointer',
  transitionDuration: '.3s',
  transitionProperty: 'color, background-color',
  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',

  ':hover': {
    backgroundColor: `${colors.grey['300']}`,
  },

  selectors: {
    '&[data-state="open"]': {
      backgroundColor: `${colors.grey['300']}`,
    },
  },
});

export const sidebarUserIcon = style({
  width: '16px',
  height: '24px',
});

export const popoverContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '280px',
  padding: '12px',
  borderRadius: '4px',
  backgroundColor: `${colors.grey['050']}`,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
});

export const menuList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '12px',
});

export const menuItem = style({
  display: 'flex',
  gap: '4px',
  width: '100%',
  padding: '8px 4px',
  borderRadius: '4px',
  cursor: 'pointer',

  transitionDuration: '.3s',
  transitionProperty: 'color, background-color',
  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',

  ':hover': {
    backgroundColor: `${colors.grey['300']}`,
  },
});

export const menuItemPlus = style([
  menuItem,
  {
    color: colors.red[700],
  },
]);

export const menuItemIcon = style({
  width: '16px',
  height: '16px',
});
