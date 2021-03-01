import axios from 'axios';
import { FormEvent, useState } from 'react';
import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');

  async function login(event: FormEvent) {
    event.preventDefault();
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
        <form onSubmit={login}>
          <input
            type="text"
            value={username}
            placeholder="Digite seu username"
            onChange={e => setUsername(e.target.value)}
          />
          <button type="submit">
            <img src="icons/arrow-right.svg" alt="Arrow" />
          </button>
        </form>
      </div>
    </div>
  );
}
