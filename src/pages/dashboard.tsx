import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Sidebar } from '../components/Sidebar';

import styles from '../styles/pages/Dashboard.module.css';

interface DashboardProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Dashboard(props: DashboardProps) {
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

  return session ? (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <title>Início | Moveit</title>
      </Head>
      <Sidebar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  ) : '';
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
