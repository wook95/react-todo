import { colors } from '@/shared/ui';
import { style } from '@vanilla-extract/css';

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
