import { classNames } from 'helpers/classnames/classNames';
import { FC } from 'react';
import onboardingImage from 'shared/assets/images/fluent-onboarding.png';
import cls from './Onboarding.module.scss';
import { Button, Input } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';

const Onboarding: FC = () => {
  return (
    <div className={classNames(cls.wrapper, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <img src={onboardingImage} className={classNames(cls.image, {}, [])} />
        <div className={classNames(cls.infoBlock, {}, [])}>
          <h2 className={classNames(cls.infoTitle, {}, [])}>
            Всім привіт, як справи, тут крута фраза закликаюча до дії
          </h2>
          <div className={classNames(cls.buttonBlock, {}, [])}>
            <Button theme={ThemeButton.PRIMARY}>розпочати</Button>
            <Button theme={ThemeButton.SECONDARY}>я вже зареєстрований</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
