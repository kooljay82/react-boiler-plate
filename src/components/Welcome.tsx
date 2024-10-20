import React from 'react';

import styles from '../assets/styles/Welcome.module.scss';

interface IWelcomeProps {
  dataTestId: string;
  message: string;
}

const Welcome = function ({ dataTestId, message }: IWelcomeProps) {
  return (
    <>
      <div id="msg-card" data-testid={dataTestId}>
        <h2 className={`${styles.title}`}>TEST CARD UI</h2>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Welcome;
