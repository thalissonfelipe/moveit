import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const [session] = useSession();
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <img src="logo-full.svg" alt="Logo" />
        <h1>Bem-vindo</h1>
        <div>
          <img src="icons/github.svg" alt="Github" />
          <span>Faça login com seu Github para começar</span>
        </div>
        <button
          type="submit"
          onClick={() => signIn(null, { callbackUrl: 'http://localhost:3000/dashboard' })}
        >
          Entre com seu github
          <img src="icons/arrow-right.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
}
