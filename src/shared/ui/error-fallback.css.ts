import { style } from '@vanilla-extract/css';
import { colors } from './styles/theme.css';

export const errorContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const resetButton = style({
  backgroundColor: colors.grey['000'],
  color: colors.grey['900'],
  cursor: 'pointer',
  borderRadius: '5px',
  border: `1px solid ${colors.grey['300']}`,
});
