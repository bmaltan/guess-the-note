import { children, Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

const Flex: Component<FlexProps> = (props: FlexProps) => {
  const childrenComponents = children(() => props.children);

  const Container = styled('div')`
    display: flex;
    gap: 1rem;
    justify-content: ${props.justifyContent || 'left'};
    flex-direction: ${props.direction as string};
  `;

  return (
    <Container>
      {childrenComponents()}
    </Container>
  );
};

export default Flex;

interface FlexProps {
  children: JSX.Element;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}