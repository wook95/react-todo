import * as styles from '@features/auth/ui/AuthLink.css';
import { Link } from 'react-router-dom';

interface AuthLinkProps {
  preText: string;
  link: string;
  linkText: string;
}

export const AuthLink = ({ preText, link, linkText }: AuthLinkProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{preText + ' '}</span>
      <Link to={link} className={styles.linkText}>
        {linkText}
      </Link>
      <span className={styles.text}>하세요</span>
    </div>
  );
};
