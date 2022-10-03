import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { preferencesState } from '../../../../store/preferences-store';

const FretMarkers: Component<FretMarkersProps> = (props: FretMarkersProps) => {
  const FretMarkerContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `;

  const FretMarker = styled('div')`
    background: #434343;
    height: 1rem;
    width: 1rem;
    border-radius: 100%;
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
