import React, { useState } from 'react';
import Menu from './Menu';
import { Fragment } from 'react';
import Projects from './Projects';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Portfolio = () => {
  const [menuOn, setMenuOn] = useState(false);
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const trigger = () => {
    setMenuOn(!menuOn);
  };

  return (
    <Fragment>
      <Menu overlayOn={menuOn} menuOpen={trigger} />
      <div className={'portfolio-box ' + (theme == 'day' ? '' : 'night')}>
        <div className={'more-ptf ' + (theme == 'day' ? '' : 'night')}>
          <a
            onClick={trigger}
            className={theme == 'day' ? 'more-day' : 'more-night'}
          >
            more... ¶
          </a>
        </div>
        <Projects />
      </div>
    </Fragment>
  );
};

export default Portfolio;
