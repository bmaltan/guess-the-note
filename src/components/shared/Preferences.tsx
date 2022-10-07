import { Component, For } from 'solid-js';
import { addString, getFirstNotes, instrumentState, removeString, resetNotesFlipped, setFirstNote, setNumOfFrets } from '../../store/instrument-store';
import { Preference, preferencesState, togglePreference } from '../../store/preferences-store';
import Button from '../../ui-lib/Button';
import Flex from '../../ui-lib/Flex';
import FormInput from '../../ui-lib/FormInput';
import Input from '../../ui-lib/Input';
import Select from '../../ui-lib/Select';
import Switch from '../../ui-lib/Switch';
import { Note } from '../instruments/parts/notes/note.enum';

const Preferences: Component = () => {
  const availableNotes = Object.values(Note);

  const onFirstNoteChange = (event: Event, index: number) => {
    setFirstNote(index, event?.target?.value as Note);
  }
  
  return (
    <>
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
        onClick={() => togglePreference(Preference.LeftHanded)}
        checked={preferencesState.leftHanded}
        label="Toggle left-handed"
      />
      <Button
        onClick={() => resetNotesFlipped()}
        label="Reset"
      />
      <Button
        onClick={() => removeString()}
        label="Remove string"
      />
      <Button
        onClick={() => addString()}
        label="Add string"
      />
      <FormInput label="Number of frets">
        <Input 
          onChange={(event) => setNumOfFrets(parseInt(event.currentTarget.value))}
          min={5}
          max={24}
          value={instrumentState.numOfFrets}
        />
      </FormInput>
      <Flex direction="row-reverse">
        <For each={getFirstNotes()}>{(_, i) =>
          <FormInput label={`Tune ${getFirstNotes().length - i()}`}>
            <Select
              value={instrumentState.firstNotes[i()].note}
              onChange={(event) => onFirstNoteChange(event, i())}
            >
              <For each={availableNotes}>{(note) =>
                <option value={note}>{note}</option>
              }</For>
            </Select>
          </FormInput>
        }</For>
      </Flex>
    </>
  );
};

export default Preferences;
