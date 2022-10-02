import { createStore } from "solid-js/store";

const [preferencesState, setPrefrencesState] = createStore({
  highlightNaturalNotes: false,
});

const toggleHighlightNaturalNotes = () => {
  setPrefrencesState({
    ...preferencesState,
    highlightNaturalNotes: !preferencesState.highlightNaturalNotes
  });

  console.log(preferencesState.highlightNaturalNotes);
};

export { preferencesState, toggleHighlightNaturalNotes };