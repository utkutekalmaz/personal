import React, { useState, Fragment } from 'react';
import Menu from './Menu';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Home = props => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const [menuOn, setMenuOn] = useState(false);

  const trigger = () => {
    setMenuOn(!menuOn);
  };

  return (
    <Fragment>
      <Menu overlayOn={menuOn} menuOpen={trigger} />
      <div className={'home ' + (theme == 'day' ? '' : 'night')}>
        <p className={'name ' + (theme == 'day' ? '' : 'night')}>
          utku tekalmaz
        </p>
        <p className={'tag ' + (theme == 'day' ? '' : 'night')}>
          front-end & mobile developer
        </p>
        <a
          onClick={trigger}
          className={'more ' + (theme == 'day' ? '' : 'night')}
        >
          more... ¶
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
