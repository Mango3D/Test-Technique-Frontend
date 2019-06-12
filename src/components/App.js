import React from 'react';
import {Global} from '@emotion/core';
import {css} from 'emotion';
import {HashRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import Home from './pages/Home';
import Control from './pages/Control';
import ZAxis from './pages/ZAxisPage';

export default (props) => {
  const styleContainer = css({
    '&>div': {
      height: '100%',
      position: 'absolute',
      width: '100%'
    },

    minHeight: 'calc(100vh - 50px)',
    width: '100%'
  });

  return <div>
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
          color: '#fff',
          fontFamily: 'Roboto',
          margin: 0,
          padding: 0
        },
        body: {
          backgroundColor: '#263238'
        },
        button: {
          outline: 'none'
        }
      }}
    />
    <HashRouter className={styleContainer}>
      <AnimatedSwitch
        atEnter={{opacity: 0}}
        atLeave={{opacity: 0}}
        atActive={{opacity: 1}}
        className={styleContainer}>
        <Route exact path='/' component={Home} />
        <Route exact path='/control' component={Control} />
        <Route exact path='/control/move' component={ZAxis} />
      </AnimatedSwitch>
    </HashRouter>
  </div>;
};
