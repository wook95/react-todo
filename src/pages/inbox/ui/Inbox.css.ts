import { colors } from '@/shared/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const sidebarContainer = style({
  padding: '12px',
  height: '100%',
  width: '210px',
  backgroundColor: `${colors.red['050']}`,
});
