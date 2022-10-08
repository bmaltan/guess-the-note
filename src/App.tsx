import { Component, onMount } from 'solid-js';
import Bass from './components/instruments/Bass';
import Preferences from './components/shared/Preferences';
import { bassPresets } from './shared/instrument-presets';
import { applyTuningPreset } from './store/instrument-store';

const App: Component = () => {

  onMount(() => {
    applyTuningPreset(bassPresets.standard)
  });
  
  return (
    <>
      <Preferences />
      <Bass />
    </>
  );
};

export default App;
