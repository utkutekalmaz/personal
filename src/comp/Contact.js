import React, { Fragment, useState } from 'react';
import skypeLogo from './assets/skype.svg';
import gitLogo from './assets/github.svg';
import linkedLogo from './assets/linkedin.svg';
import gmailLogo from './assets/gmail.svg';
import Menu from './Menu';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Contact = () => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const [menuOn, setMenuOn] = useState(false);

  const trigger = () => {
    setMenuOn(!menuOn);
  };

  return (
    <Fragment>
      <Menu overlayOn={menuOn} menuOpen={trigger} />
      <div className='info-box'>
        <div className='contact'>
          <h1 className={theme == 'day' ? 'day' : 'night'}>Reach me Out!</h1>
          <p>
            {' '}
            <img src={gmailLogo} height='22px' width='22px' />{' '}
            <span className={'url tag ' + (theme == 'day' ? '' : 'night')}>
              e-mail:
            </span>{' '}
            <span className={'url ' + (theme == 'day' ? '' : 'night')}>
              utkutekalmaz@gmail.com
            </span>
          </p>
          <p>
            {' '}
            <img src={linkedLogo} height='22px' width='22px' />{' '}
            <span className={'url tag ' + (theme == 'day' ? '' : 'night')}>
              linkedin:
            </span>{' '}
            <a
              href='https://linkedin.com/in/utku-tekalmaz'
              target='_blank'
              className={'url ' + (theme == 'day' ? '' : 'night')}
            >
              <span className={'url ' + (theme == 'day' ? '' : 'night')}>
                in/utku-tekalmaz
              </span>
            </a>
          </p>
          <p>
            {' '}
            <img src={skypeLogo} height='22px' width='22px' />{' '}
            <span className={'url tag ' + (theme == 'day' ? '' : 'night')}>
              skype:
            </span>{' '}
            <a
              href='https://join.skype.com/invite/fDfNaEadu7fq'
              target='_blank'
              className={'url ' + (theme == 'day' ? '' : 'night')}
            >
              <span
                className={theme == 'day' ? 'day' : 'night'}
                style={{ fontStyle: 'italic', textDecoration: 'underline' }}
              >
                invitation link!
              </span>
            </a>
          </p>
          <p>
            {' '}
            <img src={gitLogo} />{' '}
            <span className={'url tag ' + (theme == 'day' ? '' : 'night')}>
              github:
            </span>{' '}
            <a
              href='https://www.github.com/utkutekalmaz'
              target='_blank'
              className={'url ' + (theme == 'day' ? 'day' : 'night')}
            >
              github.com/utkutekalmaz
            </a>
          </p>
          <div className='mr30'>
            <a
              onClick={trigger}
              className={theme == 'day' ? 'more-day' : 'more-night'}
            >
              more... ¶
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
