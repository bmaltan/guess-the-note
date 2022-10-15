import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { preferencesState } from '../../../../store/preferences-store';

const FretMarkers: Component<FretMarkerProps> = (props: FretMarkerProps) => {
  const FretMarkerContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  `;

  const FretMarker = styled('div')<FretMarkerProps>(
    props => `
      background: #a1a1a1;
      height: calc(100% - 3rem);
      width: 1.25rem;
      border: 0.125rem solid black;

      @media screen and (max-width: 37.5rem) {
        &:after {
          content: '${props.index + 1}';
          position: absolute;
          top: -2rem;
          right: 0.25rem;
          font-weight: bold;
        }
      }
    `
  );

  const getFretMarkers = (fretIndex: number) => {
    const noteIndex = (fretIndex + 1) % 12;
    const markers = [3, 5, 7, 9];
    const doubleMarkers = [0];
    if (doubleMarkers.includes(noteIndex)) {
      return <>
        <FretMarker index={fretIndex} />
        <FretMarker index={fretIndex} />
      </>;
    } else if (markers.includes(noteIndex)) {
      return <FretMarker index={fretIndex} />;
    }
  }

  return (
    <FretMarkerContainer>
      {preferencesState.displayFretMarkers && getFretMarkers(props.index)}
    </FretMarkerContainer>
  );
};

export default FretMarkers;

interface FretMarkerProps {
  index: number;
}
