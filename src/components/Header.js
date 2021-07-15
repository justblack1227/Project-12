import React from 'react';
import PropTypes from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
      <header>
        <Stats players={players} /> 
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }

  Header.proptypes = {
    title: PropTypes.string
  };

  Header.defaultProps = {
      title: 'Scoreboard',
      
  }

  export default Header;