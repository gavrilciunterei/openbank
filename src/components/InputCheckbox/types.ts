export type CheckboxProps = {
  checked: boolean;
  text: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
};
