import React, { useState, Fragment } from 'react';
import Menu from './Menu';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Gallery = () => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const [menuOn, setMenuOn] = useState(false);

  const trigger = () => {
    setMenuOn(!menuOn);
  };

  return (
    <Fragment>
      <Menu overlayOn={menuOn} menuOpen={trigger} />
      <div className={theme == 'day' ? 'day' : 'night'}>
        {' '}
        this is{' '}
        <span style={{ textDecoration: 'underline' }} className='bld'>
          not
        </span>{' '}
        art{' '}
      </div>
      <div className={'mr-ptf ' + (theme == 'day' ? '' : 'night')}>
        <a
          onClick={trigger}
          className={theme == 'day' ? 'more-day' : 'more-night'}
        >
          more... ¶
        </a>
      </div>
    </Fragment>
  );
};

export default Gallery;
