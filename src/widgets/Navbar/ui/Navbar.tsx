import { FC } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'helpers/classnames/classNames';
import Logo from 'shared/assets/icons/fluent.svg';

const Navbar: FC = () => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <Logo width={165} height={50} />
      </div>
    </div>
  );
};

export default Navbar;
