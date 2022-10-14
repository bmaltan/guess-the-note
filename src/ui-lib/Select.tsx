import { children, Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

const Select: Component<SelectProps> = (props: SelectProps) => {
  const childrenComponents = children(() => props.children);

  const Select = styled('select')`
    font-size: 1rem;
    border: none;
  `;

  return (
    <Select
      value={props.value}
      onChange={props.onChange}
    >
      { childrenComponents() }
    </Select>
  );
};

export default Select;

interface SelectProps {
  value: number | string;
  onChange: (event: any) => void;
  children: JSX.Element;
}