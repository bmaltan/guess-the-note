import { Component } from 'solid-js';
import { Preference, preferencesState, togglePreference } from '../../store/preferences-store';
import Flex from '../../ui-lib/Flex';
import Switch from '../../ui-lib/Switch';

const Preferences: Component = () => {
  return (
    <>
      <Flex direction="column">
        <div>
          <Switch
            onClick={() => togglePreference(Preference.HighlightNaturalNotes)}
            checked={preferencesState.highlightNaturalNotes}
            label="Toggle natural notes"
          />
          <Switch
            onClick={() => togglePreference(Preference.DisplayFretMarkers)}
            checked={preferencesState.displayFretMarkers}
            label="Toggle fret markers"
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
