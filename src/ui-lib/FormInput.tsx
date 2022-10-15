import { children, Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

const FormInput: Component<FormInputProps> = (props: FormInputProps) => {
  const childrenComponents = children(() => props.children);

  const Container = styled('div')`
    display: flex;
    border: 1px solid #cdcdcd;
    align-content: center;
    width: fit-content;
    border-radius: 0.5rem;
    overflow: hidden;
    box-sizing: border-box;
    height: 2.25rem;
  `;

  const Label = styled('div')`
    padding: 0.25rem 1rem;
    background: #f0f0f0;
    border-right: 1px solid #cdcdcd;
    display: flex;
    align-items: center;
  `;

  return (
    <Container>
      <Label>
        {props.label}
      </Label>
      { childrenComponents() }
    </Container>
  );
};

export default FormInput;

interface FormInputProps {
  label: string;
  children: JSX.Element;
}