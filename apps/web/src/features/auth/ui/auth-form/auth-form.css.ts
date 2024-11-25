import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  marginTop: '32px',
});

export const title = style({
  marginBottom: '32px',
  fontSize: '32px',
  fontWeight: '700',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1rem',
});

export const input = style({
  display: 'flex',
  alignItems: 'center',
  height: '24px',
  color: colors.grey[900],
  fontSize: '16px',
  fontWeight: '600',
  '::placeholder': {
    color: colors.grey[500],
    fontWeight: '400',
  },
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '8px 8px 4px',
  gap: '8px',
  borderRadius: '8px',
  border: `1px solid ${colors.grey[500]}`,
  color: colors.grey[900],
  fontSize: '12px',
  selectors: {
    [`&:has(${input}:focus)`]: {
      borderColor: '#000',
    },
  },
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  height: '48px',
  minWidth: '68px',
  borderRadius: '8px',
  backgroundColor: colors.red[400],
  color: colors.grey[100],
  fontSize: '18px',
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});
