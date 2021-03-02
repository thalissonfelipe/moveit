import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const percent = 100 - ((minutes * 60 + seconds) * 100) / (25 * 60);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
        disabled
        className={styles.countdownButton}
      >
        Ciclo encerrado
        <FontAwesomeIcon icon={faCheckCircle} />
      </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <FontAwesomeIcon icon={faTimes} />
              <div style={{ width: `${percent}%` }}></div>
            </button>
          ) : (
            <button
            type="button"
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
          </button>
          ) }
        </>
      ) }
    </div>
  );
}
