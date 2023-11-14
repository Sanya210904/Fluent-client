import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'helpers/classnames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, { [cls[theme]]: true }, [])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
