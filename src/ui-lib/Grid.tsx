import { children, Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

const Flex: Component<GridProps> = (props: GridProps) => {
  const childrenComponents = children(() => props.children);

  const Container = styled('div')<GridProps>(
    props => `
      display: grid;
      gap: 1rem;
      grid-template-columns: ${props.gridTemplateColumns};
    `
  );

  return (
    <Container gridTemplateColumns={props.gridTemplateColumns}>
      {childrenComponents()}
    </Container>
  );
};

export default Flex;

interface GridProps {
  children: JSX.Element;
  gridTemplateColumns?: string;
}
