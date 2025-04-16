import React from 'react';

import Logo from '@/images/react_boiler_plate.png';

import * as styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <img src={Logo} alt="react-biler-plate logo" />
        <h1 className="strong">Start Your Project!</h1>
      </header>
      <main>
        <p>The React boilerplate is ready.</p>
        <p>Dive in—no setup, no worries.</p>
      </main>
      <footer>
        <small>© 2025 kooljay82. MIT Licensed. Built with ❤️ and React.</small>
      </footer>
    </div>
  );
};

export default MainPage;
