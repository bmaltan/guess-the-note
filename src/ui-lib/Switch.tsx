import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Switch: Component<SwitchProps> = (props: SwitchProps) => {
  const id = Math.random().toString(36);

  const Switch = styled('div')`
    text-align: ${props.textAlign || 'left'};
    padding: 0.25rem 0;
    accent-color: black;
  `;

  const Label = styled('label')`
    margin-right: 0.25rem;
  `;

  const Input = styled('input')`
    transform: scale(1.25);
  `;

  return (
    <Switch>
      <Label for={id}>
        { props.label }
      </Label>
      <Input
        type="checkbox"
        role="switch"
        id={id}
        checked={props.checked}
        onClick={props.onClick}
      />
    </Switch>
  );
};

export default Switch;

interface SwitchProps {
  onClick: () => void;
  checked: boolean;
  label: string;
  textAlign?: 'left' | 'right';
}
