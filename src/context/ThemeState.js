import React, { useContext, createContext } from 'react';
import ThemeContext from './ThemeContext';
import { SET_THEME } from './types';
import { useReducer } from 'react';

const ThemeState = props => {
  const initialState = { theme: 'day' };
  const themeReducer = (state, action) => {
    switch (action.type) {
      case SET_THEME:
        return { ...state, theme: action.payload };
    }
  };
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = apptheme => {
    dispatch({ type: SET_THEME, payload: apptheme });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        toggleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
