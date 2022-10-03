import type { Component } from 'solid-js';
import Bass from '../../components/instruments/parts/frets/Frets';
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
