import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faAward, faHome } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <Link href="/dashboard">
        <a title="Moveit">
          <img src="logo.svg" alt="Logo" />
        </a>
      </Link>
      <div className={styles.icons}>
        <Link href="/dashboard">
          <a
            className={router.pathname === '/dashboard' ? `${styles.link} ${styles.active}` : `${styles.link}`}
            title="Home"
          >
            <FontAwesomeIcon icon={faHome} />
          </a>
        </Link>
        <Link href="/leaderboard">
          <a
            className={router.pathname === '/leaderboard' ? `${styles.link} ${styles.active}` : `${styles.link}`}
            title="Ranking"
          >
            <FontAwesomeIcon icon={faAward} />
          </a>
        </Link>
      </div>
      <button onClick={() => signOut()}  title="Logout">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </nav>
  );
}
