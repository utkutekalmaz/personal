import React, { useContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import ThemeContext from '../context/ThemeContext';

export const Container = () => {
  // const [menuOpened, setMenuOpened] = useState(false);

  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;

  const handleChange = e => {
    if (e.target.checked) {
      toggleTheme('night');
      console.log('check status: night: ' + e.target.checked);
      document.body.style.background = '#52493c';
    } else {
      toggleTheme('day');
      console.log('check status: day: ' + e.target.checked);
      document.body.style.background = '#dcdcdc';
    }
  };

  return (
    <HashRouter>
      <div className='swc-group'>
        <label className='swc-label'>
          <div
            className={
              'swc-border ' +
              (theme == 'day' ? 'swc-border-day' : 'swc-border-night')
            }
          >
            <div
              className={
                'custom-swc ' + (theme == 'day' ? 'swc-day' : 'swc-night')
              }
            />
          </div>
          <span className={'swc-label ' + (theme == 'day' ? 'day' : 'night')}>
            {theme == 'day' ? 'Day' : 'Night'}
          </span>
          <input
            type='checkbox'
            id='modeswc'
            className={'swc-btn ' + (theme == 'day' ? 'day' : 'night')}
            value='mode'
            onClick={handleChange}
          />
        </label>
      </div>
      <div className={'main-container ' + (theme == 'day' ? '' : 'night')}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/gallery' component={Gallery} />
          <Route render={() => <p>Not found</p>} />
        </Switch>
      </div>
    </HashRouter>
  );
};
