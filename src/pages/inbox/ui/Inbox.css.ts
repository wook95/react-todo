import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const inboxContainer = style({
  width: '100%',
  padding: '56px 100px 84px 100px',
});

export const inboxTitle = style({
  fontSize: '26px',
  fontWeight: '700',
});
