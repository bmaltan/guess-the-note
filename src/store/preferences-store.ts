import { createStore } from "solid-js/store";

const [preferencesState, setPrefrencesState] = createStore<PreferenceState>({
  highlightNaturalNotes: false,
  displayFretMarkers: true,
});

const togglePreference = (preference: Preference) => {
  console.log(preference)
  setPrefrencesState({
    ...preferencesState,
    [preference]: !preferencesState[preference],
  });
};

type PreferenceState = {
  [key in Preference]: boolean;
};

enum Preference {
  HighlightNaturalNotes = "highlightNaturalNotes",
  DisplayFretMarkers = "displayFretMarkers",
}

export { preferencesState, togglePreference, Preference };
