import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { Sidebar } from '../components/Sidebar';

import styles from '../styles/pages/Leaderboard.module.css';

interface User {
  name: string;
  email: string;
  avatarUrl: string;
  level: number;
  challengesCompleted: number;
  experience: number;
}

export default function Leaderboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [session, loading] = useSession();
  const router = useRouter();

  if (!session && !loading) {
    router.push('/');
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/api/users');
      setUsers(data.users);
    }

    fetchUsers();
  }, []);

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
            {users.map((user, index) => (
              <div className={styles.tableItem} key={index}>
                <span>{index+1}</span>
                <div>
                  <img src={user.avatarUrl} alt="Avatar"/>
                  <div>
                    <h2>{user.name}</h2>
                    <span>
                      <img src="icons/level.svg" alt="Level"/> Level {user.level}
                    </span>
                  </div>
                </div>
                <p><span>{user.challengesCompleted}</span> completados</p>
                <p><span>{user.experience}</span> xp</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
