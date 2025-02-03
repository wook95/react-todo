import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingTop: '16px',
  borderTop: `1px solid ${colors.grey[300]}`,
  textAlign: 'center',
});

export const text = style({
  color: colors.grey[600],
  fontSize: '12px',
});

export const linkText = style([
  text,
  {
    textDecoration: 'underline',
  },
]);
