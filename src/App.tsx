import { Component, onMount } from 'solid-js';
import Bass from './components/instruments/Bass';
import Preferences from './components/shared/Preferences';

const App: Component = () => {

  onMount(() => {
  })

  return (
    <>
      <Preferences />
      <Bass />
    </>
  );
};

export default App;
