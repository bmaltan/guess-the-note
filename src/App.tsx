import { Component, onMount } from 'solid-js';
import Bass from './components/instruments/Bass';
import InstrumentSettings from './components/shared/InstrumentSettings';
import Preferences from './components/shared/Preferences';
import { bassPresets } from './shared/instrument-presets';
import { applyTuningPreset, instrumentState } from './store/instrument-store';
import Flex from './ui-lib/Flex';

const App: Component = () => {

  onMount(() => {
    applyTuningPreset(bassPresets.standard)
    window.instrumentState = () => {
      console.log(JSON.parse(JSON.stringify(instrumentState)))
      // instrumentState.strings.forEach(s => {
      // })
    };
  });

  return (
    <Flex direction="column">
      <Bass />
      <InstrumentSettings />
      <Preferences />
    </Flex>
  );
};

export default App;
