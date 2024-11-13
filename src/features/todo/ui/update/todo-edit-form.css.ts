import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  margin: '16px 0',
  borderRadius: '8px',
  border: `1px solid ${colors.grey['400']}`,

  selectors: {
    '&:not(:focus-within)': {
      border: `1px solid ${colors.grey['200']}`,
    },
  },
});

export const titleInput = style({
  width: '100%',
});

export const contentInput = style({
  width: '100%',
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
  paddingTop: '16px',
  marginTop: '16px',
  borderTop: `1px solid ${colors.grey['200']}`,
});

export const cancelButton = style({
  backgroundColor: colors.grey['200'],
  color: colors.grey['900'],
  borderRadius: '4px',
  padding: '8px 12px',
  selectors: {
    '&:hover': {
      backgroundColor: colors.grey['300'],
    },
  },
});

export const submitButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  backgroundColor: colors.red['600'],
  color: colors.grey['000'],
  borderRadius: '4px',
  padding: '8px 12px',
  selectors: {
    '&:hover': {
      backgroundColor: colors.red['700'],
    },
    '&:disabled': {
      backgroundColor: colors.red['200'],
      cursor: 'not-allowed',
    },
  },
});
