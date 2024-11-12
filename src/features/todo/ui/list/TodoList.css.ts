import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const todoDescriptionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const todoDescriptionContent = style({
  fontSize: '12px',
  color: colors.grey['500'],
});
