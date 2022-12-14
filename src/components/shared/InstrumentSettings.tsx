import { Component, For, Show } from 'solid-js';
import { gameState } from '../../store/game-store';
import { addString, instrumentState, removeString, setFirstNote, setNumOfFrets, toggleAllNotesFlipped } from '../../store/instrument-store';
import Button from '../../ui-lib/Button';
import Flex from '../../ui-lib/Flex';
import FormInput from '../../ui-lib/FormInput';
import Grid from '../../ui-lib/Grid';
import Heading2 from '../../ui-lib/Heading2';
import Input from '../../ui-lib/Input';
import Select from '../../ui-lib/Select';
import { Note } from '../instruments/parts/notes/note.enum';

const InstrumentSettings: Component = () => {
  const availableNotes = Object.values(Note);
  const onFirstNoteChange = (event: Event, index: number) => {
    setFirstNote(index, event?.target?.value as Note);
  }

  return (
    <Show when={!gameState.active}>
      <Heading2>Settings</Heading2>
      <Flex direction="column">
      <div>
        <Button
          onClick={() => removeString()}
          label="Remove string"
        />
        <Button
          onClick={() => addString(instrumentState.strings[0]?.firstNote || Note.A)}
          label="Add string"
        />
      </div>
        <Grid gridTemplateColumns="repeat(auto-fill, minmax(auto, 8.5rem))">
          <For each={instrumentState.strings}>{(_, i) =>
            <FormInput label={`Tune ${instrumentState.strings.length - i()}`}>
              <Select
                value={instrumentState.strings[i()].firstNote}
                onChange={(event) => onFirstNoteChange(event, i())}
              >
                <For each={availableNotes}>{(note) =>
                  <option value={note}>{note}</option>
                }</For>
              </Select>
            </FormInput>
          }</For>
        </Grid>
          <FormInput label="Number of frets">
            <Input
              onChange={(event) => setNumOfFrets(parseInt(event.currentTarget.value))}
              min={5}
              max={24}
              value={instrumentState.numOfFrets}
            />
          </FormInput>
        <div>
          <Button
            onClick={() => toggleAllNotesFlipped()}
            label="Toggle all"
          />
          <Button
            onClick={() => toggleAllNotesFlipped(false)}
            label="Reset"
          />
        </div>
      </Flex>
    </Show>
  )
};

export default InstrumentSettings;
