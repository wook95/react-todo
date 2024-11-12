import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const deleteTodoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  width: '100%',
  color: colors.red['500'],
});

export const dialogOverlay = style({
  backgroundColor: colors.grey['500'],
  opacity: '0.5',
  position: 'fixed',
  inset: '0',
  animation: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  zIndex: '1',
});

export const dialogContent = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: colors.grey['000'],
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  zIndex: '1',
});

export const dialogTitle = style({
  fontWeight: 'bold',
  paddingBottom: '12px',
});

export const buttonWrapper = style({
  display: 'flex',
  marginTop: '24px',
  justifyContent: 'flex-end',
  gap: '12px',
});

const button = style({
  padding: '8px 12px',
  border: `1px solid ${colors.grey['300']}`,
  borderRadius: '4px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const deleteButton = style([
  button,
  {
    color: colors.red['500'],
    borderColor: colors.red['500'],
  },
]);

export const cancelButton = style([
  button,
  {
    color: colors.grey['500'],
  },
]);
