export type StyleProps = {
  color?: string;
  fontWeight?: number;
  size?: string;
  maxWidth?: string;
};

export type Props = {
  password?: boolean;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  [x: string]: any;
  subText?: React.ReactNode;
};
