import { colors } from '@/shared/ui';
import { style } from '@vanilla-extract/css';

export const dialogContentBody = style({
  display: 'flex',
  height: '100%',
});

export const detailCheckbox = style({
  marginRight: '12px',
});

export const dialogContentBodyContent = style({
  flex: 1,
  display: 'flex',
  padding: '16px',
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
