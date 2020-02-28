import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Projects = () => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <div className='projects'>
      <div className='project'>
        <p className={'p-name ' + (theme == 'day' ? 'day' : 'night')}>
          Github Finder
        </p>
        <div className='p-img'>
          <img
            src='https://raw.githubusercontent.com/utkutekalmaz/github-user-search-react/master/pics/pictwo.png'
            alt='day'
          />
        </div>
        <p className={'p-desc ' + (theme == 'day' ? 'day' : 'night')}>
          A Github user search app made with{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            React Js{' '}
          </span>
          <br />
          Mobile responsive and deployed to{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Netlify
          </span>
          .
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            {' '}
            Context API
          </span>{' '}
          is used for State Management. Requests made with{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Axios
          </span>
          .
        </p>
        <p>
          {' '}
          <a
            href='https://utkutekalmaz-githubfinder.netlify.com'
            className={'p-demo bld ' + (theme == 'day' ? 'day' : 'night')}
          >
            Live Demo
          </a>{' '}
          <a
            href='https://github.com/utkutekalmaz/github-user-search-react'
            className={'p-code bld ' + (theme == 'day' ? 'day' : 'night')}
          >
            {' '}
            {`{ Peek Code on Github }`}{' '}
          </a>{' '}
        </p>
        <div className='seperator' />
      </div>
      {/*                      */}
      <div className='project'>
        <p className={'p-name ' + (theme == 'day' ? 'day' : 'night')}>
          Contact Keeper
        </p>
        <div className='p-img'>
          <img
            src='https://raw.githubusercontent.com/utkutekalmaz/react-contacts/master/pics/pic1.png'
            alt='day'
          />
        </div>
        <p className={'p-desc ' + (theme == 'day' ? 'day' : 'night')}>
          A Fullstack MERN App
          <br />
          This is an old school phone book implementation on web; for
          registering phone numbers and e-mails. Built with{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            React Js
          </span>{' '}
          on the front end of the application. The state of the app is managed
          with{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Context API
          </span>{' '}
          While{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Axios
          </span>{' '}
          is used for requesting; adding, editing or removing contacts(CRUD
          operations) are handled with{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Express JS
          </span>
          . On the database side,{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            {' '}
            MongoDb{' '}
          </span>{' '}
          was driven with
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            {' '}
            Mongoose
          </span>
          . Mobile responsive and deployed to{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Heroku
          </span>
          .
        </p>
        <p>
          {' '}
          <a
            href='https://peaceful-basin-77750.herokuapp.com/register'
            className={'p-demo bld ' + (theme == 'day' ? 'day' : 'night')}
          >
            Live Demo
          </a>{' '}
          <a
            href='https://github.com/utkutekalmaz/react-contacts'
            className={'p-code bld ' + (theme == 'day' ? 'day' : 'night')}
          >
            {' '}
            {`{ Peek Code on Github }`}{' '}
          </a>{' '}
        </p>
        <div className='seperator' />
      </div>
      {/*                      */}
      <div className='project'>
        <p className={'p-name ' + (theme == 'day' ? 'day' : 'night')}>
          GitHub Repolister
        </p>
        <br />
        <p className={'p-desc ' + (theme == 'day' ? 'day' : 'night')}>
          An Android Github User Search App
          <br />
          <br />
          Similar to the Github Finder React app, This is one too lists the
          repositories of the user given and a few details about the selected
          repository. Using the{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Model-View-Presenter
          </span>{' '}
          pattern, and some third party libraries. Because of this, the app is
          heavly dependent in{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Interface
          </span>{' '}
          class.
          <br />
          The model is a POJO class made with{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            jsonschema2pojo
          </span>{' '}
          Most of the fields are not used in app, but they are implemented for
          future use. <br />
          Networking operations made with{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Retrofit
          </span>
          , Repo detail page is made with a{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Fragment
          </span>
          , which is called from the click listener of{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            RecyclerView
          </span>
          .{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            Glide
          </span>{' '}
          library was used for the avatar loading from the URL. Starring is
          stored in{' '}
          <span className={'bld ' + (theme == 'day' ? 'day' : 'night')}>
            SharedPreferences
          </span>
          .
        </p>
        <p>
          {' '}
          <a
            href='https://github.com/utkutekalmaz/github-repolister-android'
            className={'p-demo bld ' + (theme == 'day' ? 'day' : 'night')}
          >
            <span style={{ fontStyle: 'italic' }}> NO </span> Live Demo
          </a>{' '}
          <a
            href='https://github.com/utkutekalmaz/github-repolister-android'
            className={'p-code bld ' + (theme == 'day' ? 'day' : 'night')}
          >
            {' '}
            {`{ Peek Code on Github }`}{' '}
          </a>{' '}
        </p>
        <div className='seperator' />
      </div>
    </div>
  );
};

export default Projects;
