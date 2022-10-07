import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const Input: Component<InputProps> = (props: InputProps) => {

  const Input = styled('input')`
    border: none;
    margin-left: 0.5rem;
    font-size: 16px;
  `;

  return (
    <Input
      type="number"
      min={props.min ?? 0}
      max={props.max}
      value={props.value}
      class="form-control"
      onChange={props.onChange}
    />
  );
};

export default Input;

interface InputProps {
  value: number | string;
  onChange: (event: any) => void;
  min?: number;
  max?: number;
}