import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const popoverContent = style({
  backgroundColor: colors.grey['050'],
  padding: '16px',
  width: '550px',
  borderRadius: '10px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});
