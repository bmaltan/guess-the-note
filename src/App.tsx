import { Component, onMount } from 'solid-js';
import Bass from './components/instruments/Bass';
import InstrumentSettings from './components/shared/InstrumentSettings';
import Preferences from './components/shared/Preferences';
import { bassPresets } from './shared/instrument-presets';
import { applyTuningPreset } from './store/instrument-store';
import Flex from './ui-lib/Flex';
import Game from './views/game/Game';

const App: Component = () => {

  onMount(() => {
    applyTuningPreset(bassPresets.standard)
  });

  return (
    <Flex direction="column">
      <Bass />
      <Game />
      <InstrumentSettings />
      <Preferences />
    </Flex>
  );
};

export default App;
