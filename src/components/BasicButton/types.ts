export type BasicButtonProps = {
  text: string;
  onClick?: () => void;
  backgroundColor: string;
  color: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: object;
};

export type StyeProps = {
  backgroundColor: string;
  color: string;
};
