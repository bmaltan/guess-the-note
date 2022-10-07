import { createStore } from "solid-js/store";

const [preferencesState, setPrefrencesState] = createStore<PreferenceState>({
  highlightNaturalNotes: false,
  displayFretMarkers: true,
  displaySharps: false,
  leftHanded: false,
});

const togglePreference = (preference: Preference) => {
  setPrefrencesState({
    ...preferencesState,
    [preference]: !preferencesState[preference],
  });
};

enum Preference {
  HighlightNaturalNotes = 'highlightNaturalNotes',
  DisplayFretMarkers = 'displayFretMarkers',
  DisplaySharps = 'displaySharps',
  LeftHanded = 'leftHanded',
}

type PreferenceState = {
  [key in Preference]: boolean;
};

export { preferencesState, togglePreference, Preference };
