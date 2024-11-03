import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  paddingBottom: '32px',
  fontSize: '24px',
  color: colors.red[500],
});
