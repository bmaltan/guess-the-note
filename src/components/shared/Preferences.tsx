import { Component } from 'solid-js';
import { Preference, preferencesState, togglePreference } from '../../store/preferences-store';
import Flex from '../../ui-lib/Flex';
import Heading2 from '../../ui-lib/Heading2';
import Switch from '../../ui-lib/Switch';

const Preferences: Component = () => {
  return (
    <>
      <Heading2>Preferences</Heading2>
      <Flex direction="column">
        <div>
          <Switch
            onClick={() => togglePreference(Preference.HighlightNaturalNotes)}
            checked={preferencesState.highlightNaturalNotes}
            label="Highlight natural notes"
          />
          <Switch
            onClick={() => togglePreference(Preference.DisplayFretMarkers)}
            checked={preferencesState.displayFretMarkers}
            label="Display fret markers"
          />
          <Switch
            onClick={() => togglePreference(Preference.DisplaySharps)}
            checked={preferencesState.displaySharps}
            label="Toggle sharp/flat"
          />
          <Switch
            onClick={() => togglePreference(Preference.LeftHanded)}
            checked={preferencesState.leftHanded}
            label="Toggle left-handed"
          />
        </div>
      </Flex>
    </>
  );
};

export default Preferences;
