import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'helpers/classnames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
}

const Input: FC<InputProps> = (props) => {
  const { title, ...rest } = props;

  return (
    <div className={classNames(cls.block, {}, [])}>
      {title ? (
        <h6 className={classNames(cls.title, {}, [])}>{title}</h6>
      ) : null}
      <input {...rest} className={classNames(cls.input, {}, [])} />
    </div>
  );
};

export default Input;
