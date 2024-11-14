import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const todoDescriptionContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const todoDescriptionContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const todoDescriptionContent = style({
  fontSize: '12px',
  color: colors.grey['500'],
});

export const contextButtonContainer = style({
  display: 'flex',
  gap: '8px',
});

export const contextButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '4px',
  selectors: {
    '&:hover': {
      backgroundColor: colors.grey['100'],
    },
  },
});
export const contextContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '4px',
  width: '150px',
  padding: '8px',
  border: `1px solid ${colors.grey['200']}`,
  borderRadius: '4px',
  backgroundColor: colors.grey['000'],
  zIndex: 1,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});
