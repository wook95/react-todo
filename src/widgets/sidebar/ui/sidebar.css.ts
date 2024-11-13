import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const sidebarContainer = style({
  padding: '12px',
  height: '100%',
  width: '280px',
  backgroundColor: `${colors.grey['050']}`,
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
  borderRadius: '4px',
  cursor: 'pointer',

  transitionDuration: '.3s',
  transitionProperty: 'color, background-color',
  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',

  ':hover': {
    backgroundColor: `${colors.grey['300']}`,
  },
});
