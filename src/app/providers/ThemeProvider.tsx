import { light } from '@/shared/ui/styles/theme.css';
import { ReactNode, useEffect } from 'react';

export const GlobalThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.getElementById('root')?.classList.add(light);
  }, []);

  return <>{children}</>;
};
