import { Component } from 'solid-js';

const Switch: Component<SwitchProps> = (props: SwitchProps) => {
  const id = Math.random().toString(36);

  return (
    <div>
      <input
        type="checkbox"
        role="switch"
        id={id}
        checked={props.checked}
        onClick={props.onClick}
      />
      <label
        class="form-check-label"
        for={id}
      >
        { props.label }
      </label>
    </div>
  );
};

export default Switch;

interface SwitchProps {
  onClick: () => void;
  checked: boolean;
  label: string;
}