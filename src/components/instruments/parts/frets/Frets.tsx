import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';
import { bassState } from '../../../../store/bass-store';

const FretLine = styled('div')`
  border-right: 1px solid black;
  height: 100%;

  &:first-child {
    border-left: 1px solid black;
  }
`;

const Bass: Component = () => {
  const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(${bassState.numOfNotes}, 1fr);
    width: 100%;
    position: absolute;
    height: calc(100% - 2rem);
  `;

  return (
    <Container class="FUCK">
      <For each={[...Array(bassState.numOfNotes)]}>{() =>
        <FretLine />
      }</For>
    </Container>
  );
};

export default Bass;
