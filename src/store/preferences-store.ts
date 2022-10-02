import { createStore } from "solid-js/store";

const [preferencesState, setPrefrencesState] = createStore({
  highlightNaturalNotes: true,
});

const setHighlightNaturalNotes = (highlightNaturalNotes: boolean) => {
  setPrefrencesState({
    ...preferencesState,
    highlightNaturalNotes
  });
};

export { preferencesState, setHighlightNaturalNotes };