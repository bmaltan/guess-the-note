import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  const Button = styled('button')`
   cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background: #474747;
    border: none;
    border-radius: 0.5rem;
    height: 2rem;

    &:hover {
      background: #5e5e5e;
    }
  `;

  return (
    <Button onClick={props.onClick}>
      { props.label }
    </Button>
  );
};

export default Button;

interface ButtonProps {
  onClick: () => void;
  label: string;
}