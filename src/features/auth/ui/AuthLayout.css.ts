import { style } from '@vanilla-extract/css';

export const containerWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px',
  height: '100%',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  maxWidth: '400px',
  width: '100%',
  height: '100%',
});
