import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Heading2: Component<Heading2Props> = (props: Heading2Props) => {
  const Heading = styled('h2')`
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin: 1.5rem 0 0 0;
    padding: 0;

    &:not(:first-child) {
      border-top: 0.125rem solid #333;
      padding-top: 0.5rem;
    }
  `;

  return (
    <Heading>
      {props.children}
    </Heading>
  );
};

export default Heading2;

interface Heading2Props {
  children: string;
}
