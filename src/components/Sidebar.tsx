import { signOut } from 'next-auth/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faAward, faHome } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <nav className={styles.container}>
      <a href="/dashboard">
        <img src="logo.svg" alt="Logo" />
      </a>
      <div className={styles.icons}>
        <a href="#" className={`${styles.link} ${styles.active}`}>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a href="#" className={styles.link}>
          <FontAwesomeIcon icon={faAward} />
        </a>
      </div>
      <button onClick={() => signOut()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </nav>
  );
}
