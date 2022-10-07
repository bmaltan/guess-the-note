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
    const markers = [3, 5, 7, 9, 15, 17, 19, 21];
    const doubleMarkers = [12, 24];
    if (doubleMarkers.includes(fretIndex + 1)) {
      return <>
        <FretMarker />
        <FretMarker />
      </>;
    } else if (markers.includes(fretIndex + 1)) {
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
