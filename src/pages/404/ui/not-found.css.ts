import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const title = style({
  fontSize: '32px',
  fontWeight: 'bold',
});

export const link = style({
  marginTop: '16px',
  fontSize: '20px',
  color: colors.blue[500],
  textDecoration: 'underline',
});
