import { light } from '@/shared/ui';
import { ReactNode, useEffect } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.body.classList.add(light);
  }, []);

  return <>{children}</>;
};
