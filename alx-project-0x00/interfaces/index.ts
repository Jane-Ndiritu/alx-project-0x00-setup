export interface PillProps {
  title: string
}
export interface ButtonProps {
  title: string;
  styles?: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}