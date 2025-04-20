import React from 'react';

import * as styles from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
