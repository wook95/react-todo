import { style } from '@vanilla-extract/css';
import { colors } from './styles/theme.css';

export const checkboxGroup = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 0',
});

export const checkboxItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  gap: '12px',
  padding: '12px 0',

  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      left: '0',
      right: '0',
      bottom: '0',
      height: '1px',
      backgroundColor: colors.grey['300'],
    },
  },
});

export const checkboxInput = style({
  appearance: 'none',
  position: 'relative',
  width: '18px',
  height: '18px',
  marginRight: '6px',
  cursor: 'pointer',
  border: `1px solid ${colors.grey['300']}`,
  borderRadius: '50%',

  selectors: {
    '&:hover::after': {
      content: '',
      position: 'absolute',
      left: '6px',
      top: '2px',
      width: '5px',
      height: '10px',
      border: `solid ${colors.grey['600']}`,
      borderWidth: '0 1px 1px 0',
      transform: 'rotate(45deg)',
    },
    '&:checked': {
      borderColor: colors.grey['700'],
      backgroundColor: colors.grey['700'],
    },
    '&:checked::after': {
      content: '',
      position: 'absolute',
      left: '6px',
      top: '2px',
      width: '5px',
      height: '10px',
      border: `solid ${colors.white}`,
      borderWidth: '0 1px 1px 0',
      transform: 'rotate(45deg)',
    },
  },
});

export const checkboxDescription = style({
  fontSize: '14px',
  userSelect: 'none',
});
