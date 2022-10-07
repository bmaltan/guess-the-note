import { createStore } from "solid-js/store";

const [preferencesState, setPrefrencesState] = createStore<PreferenceState>({
  highlightNaturalNotes: false,
  displayFretMarkers: true,
  leftHanded: false,
});

const togglePreference = (preference: Preference) => {
  setPrefrencesState({
    ...preferencesState,
    [preference]: !preferencesState[preference],
  });
};

enum Preference {
  HighlightNaturalNotes = "highlightNaturalNotes",
  DisplayFretMarkers = "displayFretMarkers",
  LeftHanded = "leftHanded",
}

type PreferenceState = {
  [key in Preference]: boolean;
};

export { preferencesState, togglePreference, Preference };
