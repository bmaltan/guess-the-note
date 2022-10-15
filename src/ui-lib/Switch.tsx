import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Switch: Component<SwitchProps> = (props: SwitchProps) => {
  const id = Math.random().toString(36);

  const Switch = styled('div')`
    text-align: ${props.textAlign || 'left'};
    padding: 0.25rem 0;
  `;

  return (
    <Switch>
      <label
        class="form-check-label"
        for={id}
      >
        { props.label }
      </label>
      <input
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