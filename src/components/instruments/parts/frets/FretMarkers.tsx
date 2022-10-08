import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { preferencesState } from '../../../../store/preferences-store';

const FretMarkers: Component<FretMarkersProps> = (props: FretMarkersProps) => {
  const FretMarkerContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  `;

  const FretMarker = styled('div')`
    background: #a1a1a1;
    height: calc(100% - 3rem);
    width: 1.25rem;
    border: 0.125rem solid black;
  `;

  const getFretMarkers = (fretIndex: number) => {
    const noteIndex = (fretIndex + 1) % 12;
    const markers = [3, 5, 7, 9];
    const doubleMarkers = [0];
    if (doubleMarkers.includes(noteIndex)) {
      return <>
        <FretMarker />
        <FretMarker />
      </>;
    } else if (markers.includes(noteIndex)) {
      return <FretMarker />;
    }
  }

  return (
    <FretMarkerContainer>
      {preferencesState.displayFretMarkers && getFretMarkers(props.index)}
    </FretMarkerContainer>
  );
};

export default FretMarkers;

interface FretMarkersProps {
  index: number;
}
