import { children, Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

const Grid: Component<GridProps> = (props: GridProps) => {
  const childrenComponents = children(() => props.children);

  const Container = styled('div')<GridProps>(
    props => `
      display: grid;
      gap: ${props.gap ?? '1rem'};
      padding-right: ${props.gap ?? '0'};
      grid-template-columns: ${props.gridTemplateColumns};
      grid-template-rows: ${props.gridTemplateRows};
    `
  );

  return (
    <Container
      gap={props.gap}
      gridTemplateColumns={props.gridTemplateColumns}
    >
      {childrenComponents()}
    </Container>
  );
};

export default Grid;

interface GridProps {
  children: JSX.Element;
  gap?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
}
