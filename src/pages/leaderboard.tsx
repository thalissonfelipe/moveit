import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { Sidebar } from '../components/Sidebar';

import styles from '../styles/pages/Leaderboard.module.css';

export default function Leaderboard() {
  const mockData = Array(10).fill({
    name: 'Thalisson Felipe',
    avatar_url: 'https://avatars.githubusercontent.com/u/29899637?v=4',
    challengesCompleteds: 127,
    experience: 174000,
    level: 43
  });

  const [session, loading] = useSession();
  const router = useRouter();

  if (!session && !loading) {
    router.push('/');
  }

  useEffect(() => {
    if (!session && !loading) {
      router.push('/');
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Leaderboard | Moveit</title>
      </Head>
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header>
            <h1>Leaderboard</h1>
          </header>
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <span>Posição</span>
              <span>Usuário</span>
              <span>Desafios</span>
              <span>Experiência</span>
            </div>
            {mockData.map((user, index) => (
              <div className={styles.tableItem} key={index}>
                <span>{index+1}</span>
                <div>
                  <img src={user.avatar_url} alt="Avatar"/>
                  <div>
                    <h2>{user.name}</h2>
                    <span>
                      <img src="icons/level.svg" alt="Level"/> Level {user.level}
                    </span>
                  </div>
                </div>
                <p><span>{user.challengesCompleteds}</span> completados</p>
                <p><span>{user.experience}</span> xp</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
