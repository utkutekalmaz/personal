import React, { useState, Fragment } from 'react';
import Menu from './Menu';
import avatar from './assets/avatarsmall.jpg';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const About = () => {
  const [menuOn, setMenuOn] = useState(false);
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const trigger = () => {
    setMenuOn(!menuOn);
  };

  return (
    <Fragment>
      <Menu overlayOn={menuOn} menuOpen={trigger} />
      <div className={'about-box ' + (theme == 'day' ? '' : 'night')}>
        <div className={'summary ' + (theme == 'day' ? '' : 'night')}>
          <img src={avatar} className='avatar' />
          Hi,
          <br />
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Utku
          </span>{' '}
          speaking here,
          <br />
          The coding Hobbit. <br />
          and maybe the developer of your needs.
          <br />
          If you're reading this, you are in a search of some personal data of
          me.
          <br />
          So let's not waste your time &#128516; <br />
          <br />
          I was born in Tokat which is a small city in Turkey. <br />
          Educated from{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Tokat Science High School
          </span>
          <span className={'sub ' + (theme == 'day' ? '' : 'night')}>
            `which was cool back then`
          </span>
          <br />
          and my{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Kocaeli University
          </span>{' '}
          journey began. <br />
          After obtaining my{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Bachelor's Degree in Electronics and Communication
          </span>{' '}
          <br />
          started working as Software Developer in the industry.
          <br />
          I've made various apps in many industries using different languages
          and frameworks.
          <span className={'sub ' + (theme == 'day' ? '' : 'night')}>
            `you can examine some of them on my curriculum vitae and some other
            in my portfolio` <br />
          </span>{' '}
          Delightfully fluent in English and a noobie German `sprecher`.
          <br />
          <br />I spend my spare time mostly with movies and theatre activities.
          <br />
          Apart from that, I like to play computer games that has deep lores.
          <br />I am always faschinated by{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            talented storytellers
          </span>{' '}
          and willing to listen to their stories; whatever the `media` is.
          <br />
          <br /> So <br />
          <br />
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            “Do you wish me a good coding, or mean that it is a nice piece of
            code whether I want it or not; or that you feel good about this
            coding; or that it is a coding to feel good about?”
          </span>
        </div>
        <div className={'about-more ' + (theme == 'day' ? '' : 'night')}>
          <a
            onClick={trigger}
            className={theme == 'day' ? 'more-day' : 'more-night'}
          >
            more... ¶
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
