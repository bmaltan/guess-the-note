import type { Component } from 'solid-js';
import Bass from '../../components/instruments/Bass';

import Preferences from '../../components/shared/Preferences';


const Game: Component = () => {
  return (
    <>
      <Preferences />
      <Bass />
    </>
  );
};

export default Game;
